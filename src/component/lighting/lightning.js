import React from "react";
import styled from "styled-components";
// import { IoSend } from "react-icons/io5";
// import { AiOutlineAppstoreAdd } from "react-icons/ai";
import pic from "./assets/iphone2.png";
const Lightning = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Today>Lightning-Fast crypto Trading</Today>
          <Buy>
            The exchange supports USD,EUR and GBP.invest in cryptocurrency
            slowly and over time by scheduling buys weekly or monthly
          </Buy>
        </Hold>
        <Image src={pic} />
      </Wrapper>
    </Container>
  );
};
export default Lightning;

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
  align-items: center;
  @media (max-width: 768px) {
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
  /* margin-left: 30px; */
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
  margin-top: 10px;
`;
