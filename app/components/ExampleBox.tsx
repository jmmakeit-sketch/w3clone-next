"use client";
import { useState } from "react";

interface ExampleBoxProps {
  title?: string;
  code?: string;
  tryCode?: string;
  children?: React.ReactNode;
}

export default function ExampleBox({ title, code, tryCode, children }: ExampleBoxProps) {
  const [showEditor, setShowEditor] = useState(false);
  const [editorCode, setEditorCode] = useState(tryCode || code || "");
  const [srcDoc, setSrcDoc] = useState("");

  function runCode() {
    setSrcDoc(editorCode);
  }

  return (
    <>
      <div className="example-box">
        <div className="example-box-header">{title || "Example"}</div>
        <div className="example-box-body">
          {children}
          {code && <div className="code-block">{code}</div>}
          {tryCode && (
            <button className="try-btn" onClick={() => { setShowEditor(true); setSrcDoc(""); }}>
              Try it Yourself »
            </button>
          )}
        </div>
      </div>

      {showEditor && (
        <div className="modal-overlay" onClick={() => setShowEditor(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-left">
                <span>Try it Yourself</span>
                <button className="modal-run-btn" onClick={runCode}>▶ Run</button>
              </div>
              <button className="modal-close" onClick={() => setShowEditor(false)}>✕</button>
            </div>
            <div className="editor-layout">
              <div className="editor-pane">
                <div className="pane-title">HTML</div>
                <textarea
                  className="code-editor-area"
                  value={editorCode}
                  onChange={e => setEditorCode(e.target.value)}
                  spellCheck={false}
                />
              </div>
              <div className="editor-pane">
                <div className="pane-title">Result</div>
                <iframe className="result-frame" srcDoc={srcDoc} title="result" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
