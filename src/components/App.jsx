import React, {useState, useEffect} from "react"
import Editor from "./Editor"
import JSZip from "jszip"
import { saveAs } from "file-saver"

function App() {
    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [javascript, setJavascript] = useState("")
    const [render, setRender] = useState("")
    const [autoCompile, setAutoCompile] = useState(false)

    function handleCompile() {
        setRender(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${javascript}</script>
            </html>
        `)
    }

    useEffect(() => {
        if (autoCompile) {
            const timeout = setTimeout(() => {
                handleCompile()
            }, 250)
            return () => clearTimeout(timeout)
        }
    }, [html, css, javascript, autoCompile])

    function toggleAutoCompile() {
        setAutoCompile(prev => !prev);
    }

    function downloadCode() {
        const zip = new JSZip()

        const htmlContent = `
            <!DOCTYPE html>
                <html>
                    <head>
                        <title>Web Code</title>
                        <link rel="stylesheet" href="./styles-WebCodeEditor.css">
                    </head>
                    <body>
                        ${html}
                    </body>
                    <script type="module" src="./index-WebCodeEditor.js"></script>
                </html>
        `
        zip.file("index.html", htmlContent)
        zip.file("styles.css", css)
        zip.file("index.js", javascript)

        zip.generateAsync({ type: "blob" }).then(content => {
            saveAs(content, "web-code-editor.zip")
        })
    }

    return (
        <div>
            <div className="navbar">
                <h2>Web Code Editor</h2>
                <button onClick={downloadCode}>Download Code as Zip</button>
                <p> | </p>
                <p>Auto Compile</p> 
                <label class="switch">
                    <input type="checkbox" checked={autoCompile} onChange={toggleAutoCompile}/>
                    <span class="slider round"></span>
                </label>
                <p> | </p>
                <button onClick={handleCompile}>Compile</button>
            </div>
            
            <div className="editor-section">
                <Editor 
                    title="HTML"
                    language="xml"
                    value={html}
                    onChange={setHtml}
                />
                <Editor 
                    title="CSS"
                    language="css"
                    value={css}
                    onChange={setCss}
                />
                <Editor 
                    title="JS"
                    language="javascript"
                    value={javascript}
                    onChange={setJavascript}
                />
            </div>
            <div className="display">
                <iframe 
                    srcDoc = {render}
                    title="output"
                    sandbox="allow-scripts"
                    style={{border: 0, height: "92%", width: "98%"}}
                ></iframe>
            </div>
        </div>
    )
}

export default App