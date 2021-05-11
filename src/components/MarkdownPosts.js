import { useQuery } from "@apollo/client";

import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";

import { GET_ALL_POSTS } from "../graphql/queries";

export default function MarkdownPosts({ handlePostClick }) {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) {
    return <LoadingMessage text="Loading posts..." />;
  }

  if (error) {
    return <ErrorMessage text="Cannot fetch posts" />;
  }

  const renderPostButtons = () => (
    <>
      {data.allPosts.map(({ id, post, title }) => (
        <li key={`${id} ${title}`}>
          <button
            type="button"
            className="px-3 py-3 border-2 border-gray-500 rounded-md"
            onClick={() => handlePostClick({ id, post, title })}
          >
            {id} - {title}
          </button>
        </li>
      ))}
    </>
  );

  return (
    <ul className="list-outside list-disc flex flex-row flex-wrap justify-evenly">
      {renderPostButtons()}
      <li>
        <button
          type="button"
          className="px-3 py-3 border-2 border-green-500 rounded-md"
          onClick={() => handlePostClick(null)}
        >
          Add new post
        </button>
      </li>
    </ul>
  );
}
