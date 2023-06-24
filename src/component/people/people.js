import React from "react";
import styled from "styled-components";
import Card from "./card.js";

const People = () => {
  return (
    <Container>
      <H1>What people are saying</H1>
      <Wrap>
        <Card />
      </Wrap>
    </Container>
  );
};
export default People;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 50px;
  flex-direction: column;
`;
const Wrap = styled.div`
  margin-top: 15px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* cursor: pointer; */
  /* @media (max-width: 768px) {
    width: 90%;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: auto;
    justify-content: flex-start;
  } */
`;
const H1 = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  width: 80%;

  /* margin-top: 40px;
  margin-bottom: 20px; */
  @media (max-width: 400px) {
    font-size: 25px;
  }
  @media (max-width: 320px) {
    font-size: 25px;
  }
`;
