import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  query {
    movies(limit: 20) {
      id
      title
      medium_cover_image
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
`;
const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(6, minmax(200px, 1fr));
  gap: 20px;
  width: 70%;
`;

const Movies = styled.div`
  width: 100%;
`;

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES); // useQuery : 쿼리 request에 따른 reponse 데이터 가져옴

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>Apollo</Title>
        <Subtitle>GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Section>
        {!loading &&
          data.movies &&
          data.movies.map((movie) => (
            <Movies>
              <Movie
                key={movie.id}
                id={movie.id}
                background={movie.medium_cover_image}
              />
            </Movies>
          ))}
      </Section>
    </Container>
  );
};
