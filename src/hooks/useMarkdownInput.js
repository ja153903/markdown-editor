import { useState, useEffect } from "react";

export default function useMarkdownInput(post) {
  const [markdownInput, setMarkdownInput] = useState("");

  useEffect(() => {
    if (post) {
      setMarkdownInput(post?.post ?? "");
    }
  }, [post]);

  return [markdownInput, setMarkdownInput];
}
