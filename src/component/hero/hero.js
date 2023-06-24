import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <span>One platform</span>
          <br />
          all things crypto
        </Top>
        <P>
          Open a free account in minutes right from your phone and make
          <br /> your money go further
        </P>
        <Hold>
          <input placeholder="Email address" />
          <Button
          // to="/signup"
          >
            Get Started
          </Button>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding-top: 20px;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  font-size: 50px;
  font-weight: bold;

  align-items: center;
  span {
    color: #2752e7;
    margin-left: 25px;
  }
  @media (max-width: 320px) {
    font-size: 35px;
  }
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;

const P = styled.div`
  font-size: 16px;
  text-align: center;
  color: #626262;
  margin-top: 5px;
  @media (max-width: 900px) {
    font-size: 15px;
    margin-top: 12px;
  }
  @media (max-width: 768px) {
    margin-top: 12px;
  }
  @media (max-width: 400px) {
    font-size: 11px;
  }
  @media (max-width: 320px) {
    font-size: 9px;
  }
`;
const Hold = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
  }
  @media (max-width: 900px) {
    margin-top: 12px;
  }
  input {
    width: 300px;
    border-radius: 5px;
    outline: none;
    border: solid 2px black;
    padding-left: 10px;

    height: 49px;
    @media (max-width: 768px) {
      margin-top: 13px;
    }
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;
const Button = styled.div`
  width: 170px;
  margin-left: 10px;
  height: 50px;
  border: 2px solid #2752e7;
  display: flex;
  /* text-decoration: none; */
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 5px;
  color: white;
  transition: all 450ms;
  background-color: #2752e7;
  :hover {
    background-color: white;
    color: #2752e7;
  }
  @media (max-width: 768px) {
    width: 320px;
    margin-top: 13px;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
