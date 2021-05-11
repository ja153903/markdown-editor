import { useState, useEffect } from "react";

export default function usePostId(post) {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(post?.id ?? null);
  }, [post]);

  return id;
}
