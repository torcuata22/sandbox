import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
// Import CodeMirror styles
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css"; // Adjust the theme as needed

// Import CodeMirror mode files
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";

function Editor(props) {
  const { language, displayName, value, onChange } = props;
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-contaienr">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
        }}
      />
    </div>
  );
}

export default Editor;
