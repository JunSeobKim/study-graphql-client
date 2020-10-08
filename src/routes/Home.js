import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIES = gql`
  query {
    movies(limit: 5) {
      id
      title
      medium_cover_image
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return `<h1>${data.movies[0].title}</h1>`;
};
