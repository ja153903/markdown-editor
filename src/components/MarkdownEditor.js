import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import useMarkdownInput from "../hooks/useMarkdownInput";

import "katex/dist/katex.min.css";

const remarkPlugins = [remarkMath];
const rehypePlugins = [rehypeKatex];

// TODO: Call the new mutation here to update the post

export default function MarkdownEditor({ post }) {
  const [markdownInput, setMarkdownInput] = useMarkdownInput(post);

  const handleMarkdownChange = (e) => setMarkdownInput(e.target.value);

  return (
    <div className="markdown-editor flex flex-row space-x-4 max-h-screen py-4">
      <div className="w-1/2 h-screen border-2 border-gray-500 markdown-editor-input rounded-md">
        <textarea
          className="w-full h-full px-2 py-2 resize-none focus:outline-none"
          value={markdownInput}
          onChange={handleMarkdownChange}
        />
      </div>
      <div className="w-1/2 h-screen border-2 border-gray-500 markdown-editor-preview rounded-md">
        <ReactMarkdown
          skipHtml={false}
          className="px-2 py-2"
          children={markdownInput}
          remarkPlugins={remarkPlugins}
          rehypePlugins={rehypePlugins}
        />
      </div>
    </div>
  );
}
