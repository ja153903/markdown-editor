import { useState, useEffect } from "react";

export default function useMarkdownInput(post) {
  const [markdownInput, setMarkdownInput] = useState("");

  useEffect(() => {
    setMarkdownInput(post?.post ?? "");
  }, [post]);

  return [markdownInput, setMarkdownInput];
}
