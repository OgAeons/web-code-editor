import React from "react"
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled } from "react-codemirror2"

function Editor(props) {
    function handleChange(editor, data, value) {
        props.onChange(value)
    }

    return (
        <div className="editor-container">
            <div className="editor-navbar">
                {props.title}
                <button></button>
            </div>
            <Controlled 
                onBeforeChange={handleChange}
                value={props.value}
                className="editor"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: props.language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    )
}

export default Editor