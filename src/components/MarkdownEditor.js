import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { useMutation } from "@apollo/client";

import useMarkdownInput from "../hooks/useMarkdownInput";
import useTitle from "../hooks/useTitle";
import usePostId from "../hooks/usePostId";

import { CREATE_NEW_POST, UPDATE_POST } from "../graphql/queries";

import "katex/dist/katex.min.css";

const remarkPlugins = [remarkMath];
const rehypePlugins = [rehypeKatex];

export default function MarkdownEditor({ post }) {
  const [markdownInput, setMarkdownInput] = useMarkdownInput(post);
  const [title, setTitle] = useTitle(post);
  const id = usePostId(post);

  const [createPost] = useMutation(CREATE_NEW_POST);
  const [updatePost] = useMutation(UPDATE_POST);

  const handleMarkdownChange = (e) => setMarkdownInput(e.target.value);

  const handleTitleChange = (e) => setTitle(e.target.value);

  const handleCreatePost = () => {
    if (title.length === 0 || markdownInput.length === 0) {
      return;
    }

    if (id) {
      updatePost({
        variables: {
          id: Number(id),
          post: markdownInput,
        },
      });
    } else {
      createPost({
        variables: {
          title,
          post: markdownInput,
        },
      });
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="w-full h-20 py-4 border-2 border-red-500">
        <button
          className="rounded-md px-3 py-3 text-red-500 text-center"
          type="submit"
          onClick={handleCreatePost}
        >
          Create Post
        </button>
      </div>
      <div className="w-full h-20 py-4 border-2 border-gray-500">
        <input
          className="w-full h-full px-2 text-xl focus:outline-none"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-row max-h-screen py-4 markdown-editor space-x-4">
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
    </div>
  );
}
