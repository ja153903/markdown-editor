import { useQuery, gql } from "@apollo/client";

import ErrorMessage from "./ErrorMessage";
import LoadingMessage from "./LoadingMessage";

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    allPosts {
      id
      title
      post
    }
  }
`;

export default function MarkdownPosts({ handlePostClick }) {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) {
    return <LoadingMessage text="Loading posts..." />;
  }

  if (error) {
    return <ErrorMessage text="Cannot fetch posts" />;
  }

  return (
    <ul className="list-outside list-disc flex flex-row flex-wrap justify-evenly">
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
    </ul>
  );
}
