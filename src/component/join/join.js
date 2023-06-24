import React from "react";
import styled from "styled-components";
import btc from "./assets/btc.png";
import eth from "./assets/eth.png";
import lun from "./assets/luna.png";

const Join = () => {
  return (
    <Container>
      <Card>
        <Text>
          <H1>Join a new generation of investors</H1>
          <Button>Get Started</Button>
        </Text>
        <Logo>
          <Btc src={btc} alt="" />
          <Eth src={eth} alt="" />
          <Lun src={lun} alt="" />
        </Logo>
      </Card>
    </Container>
  );
};
export default Join;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Card = styled.div`
  width: 80%;
  height: 280px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #2752e7;
  height: 240px;
  border-radius: 20px;
  @media (max-width: 430px) {
    height: auto;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.div`
  width: 50%;

  display: flex;
  /* height: 110px; */
  justify-content: space-between;
  flex-direction: column;
  margin-left: 30px;
  height: 75%;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 566px) {
    width: 80%;
  }
`;
const H1 = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 120%;

  color: #ffffff;
  margin-top: 10px;
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 1052px) {
    font-size: 30px;
  }
`;

const Button = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  font-size: 16px;
`;
const Logo = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1052px) {
    /* font-size: 30px; */
    margin-right: 30px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
const Btc = styled.img`
  height: 140px;
  width: 140px;
  object-fit: contain;
  margin-top: -70px;
  margin-left: -30px;
`;
const Eth = styled.img`
  height: 110px;
  width: 110px;
  object-fit: contain;
  margin-right: -220px;
  margin-top: -40px;
`;
const Lun = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
  margin-right: 70px;
  margin-bottom: 20px;
  /* margin-bottom: 200px; */
`;
