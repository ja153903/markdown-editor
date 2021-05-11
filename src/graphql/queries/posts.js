import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    allPosts {
      id
      title
      post
    }
  }
`;

export const CREATE_NEW_POST = gql`
  mutation CreateNewPost($title: String, $post: String) {
    createPost(title: $title, post: $post) {
      id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID, $post: String) {
    updatePost(id: $id, post: $post) {
      id
    }
  }
`;
