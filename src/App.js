import { useState } from "react";

import MarkdownPosts from "./components/MarkdownPosts";
import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  const [currentPost, setCurrentPost] = useState(null);

  const updateCurrentPost = (post) => {
    setCurrentPost(post);
  };

  return (
    <div className="container py-5 mx-auto space-y-4">
      <MarkdownPosts handlePostClick={updateCurrentPost} />
      <MarkdownEditor post={currentPost} />
    </div>
  );
}

export default App;
