import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import "katex/dist/katex.min.css";

const remarkPlugins = [gfm, remarkMath];
const rehypePlugins = [rehypeKatex];

function CodeEditorSyntaxHighlighter({ language, value }) {
  return (
    <SyntaxHighlighter style={dark} language={language}>
      {value}
    </SyntaxHighlighter>
  );
}

// TODO: Add styling for this
export default function MarkdownEditor() {
  const [markdownInput, setMarkdownInput] = useState("");

  const handleMarkdownChange = (e) => setMarkdownInput(e.target.value);

  const renderers = {
    code: CodeEditorSyntaxHighlighter,
  };

  return (
    <div className="markdown-editor">
      <h1 className="markdown-editor-title">Edit some markdown here</h1>
      <div className="markdown-editor-input">
        <textarea value={markdownInput} onChange={handleMarkdownChange} />
      </div>
      <div className="markdown-editor-preview">
        <ReactMarkdown
          children={markdownInput}
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
          renderers={renderers}
        />
      </div>
    </div>
  );
}
