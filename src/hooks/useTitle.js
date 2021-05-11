import { useState, useEffect } from "react";

export default function useTitle(post) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(post?.title ?? "");
  }, [post]);

  return [title, setTitle];
}
