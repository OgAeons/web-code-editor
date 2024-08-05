import React, {useState} from "react"
import Editor from "./Editor"

function App() {
    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [javascript, setJavascript] = useState("")

    return (
        <div>
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
                    title="output"
                    sandbox="allow-scripts"
                    style={{border: 0, height: "92%", width: "98%"}}
                ></iframe>
            </div>
        </div>
    )
}

export default App