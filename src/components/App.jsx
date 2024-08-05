import React, {useState, useEffect} from "react"
import Editor from "./Editor"

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

    return (
        <div>
            <div className="navbar">
                <h2>Web Code Editor</h2>
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