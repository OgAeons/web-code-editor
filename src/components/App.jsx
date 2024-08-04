import React from "react"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import Controlled from 'react-codemirror2'

function App() {
    return (
        <div>
            <div className="editor-section">
                <div className="editor">
                    <div className="editor-title-bar">
                        <h3>HTML</h3>
                        <button className="expand">EXPAND</button>
                    </div>
                    <div className="code" 
                        style={{lineWrapping: true, 
                        lint: true,
                        lineNumbers: true
                    }}></div>
                </div>
            </div>
            <div className="display">
                <iframe 
                    title="output"
                    sandbox="allow-scripts"
                    style={{border: 0, height: "100%", width: "100%"}}
                ></iframe>
            </div>
        </div>
    )
}

export default App