import React from "react";
import styled from "styled-components";
// import { IoSend } from "react-icons/io5";
// import { AiOutlineAppstoreAdd } from "react-icons/ai";
import pic from "./assets/Left.png";
const Create = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={pic} />
        <Hold>
          <Today>Create portfolio today</Today>
          <Buy>
            Buy and sell popular digital currencies,keep track of them in the
            one place.has a variety of features that make it the place to start
            trading
          </Buy>
        </Hold>
      </Wrapper>
    </Container>
  );
};
export default Create;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  @media (max-width: 1024px) {
    height: 40vh;
  }
  @media (max-width: 900px) {
    height: 40vh;
  }
  @media (max-width: 768px) {
    height: 40vh;
  }
`;
const Wrapper = styled.div`
  width: 75%;
  height: 90%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  @media (max-width: 768px) {
    width: 90%;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 900px) {
    width: 90%;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1024px) {
    width: 90%;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1204px) {
    width: 90%;
    width: 90%;
    justify-content: center;
    align-items: center;
  }
`;
const Image = styled.img`
  width: 500px;
  height: 500px;

  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-size: contain;
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 400px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: none;
  }
`;
const Hold = styled.div`
  /* width: 300px; */
  width: 360px;
  display: flex;
  /* height: 140px; */
  /* justify-content: space-between; */
  flex-direction: column;
  /* margin-left: 30px; */
  @media (max-width: 900px) {
    width: 90%;

    height: 100px;
  }
  @media (max-width: 1024px) {
    width: 70%;

    height: 100px;
  }
  @media (max-width: 768px) {
    width: 90%;

    height: 100px;
  }
`;
const Today = styled.div`
  background-color: white;

  font-size: 30px;
  font-weight: bold;
  line-height: 105%;
  @media (max-width: 400px) {
    font-size: 25px;
  }
  @media (max-width: 320px) {
    font-size: 23px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
  }
`;
const Buy = styled.div`
  font-size: 16px;

  margin-bottom: 22px;
  margin-top: 10px;
`;
