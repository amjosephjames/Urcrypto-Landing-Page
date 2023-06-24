import React from "react";
import styled from "styled-components";
import binance from "../description/assets/binance.png";
import coinbase from "../description/assets/coinbasel.png";
import bitcoin from "../description/assets/bitcoin.png";
import tether from "../description/assets/tether.png";
import bixmex from "../description/assets/bitmex.png";
import safari from "../description/assets/safari.png";
const Description = () => {
  return (
    <Container>
      <Wrapper>
        <img src={safari} alt="" />
        <Hold>
          <Logohold>
            <img src={binance} alt="" />
            <img src={coinbase} alt="" />
            <img src={bitcoin} alt="" />
            <img src={tether} alt="" />
            <img src={bixmex} alt="" />
          </Logohold>
          <Count>
            <Ninetynine>
              <Number>99k</Number>
              <Text>People have joined</Text>
            </Ninetynine>
            <Line></Line>
            <Fifty>
              <Number>50k</Number>
              <Text>VVIP users have joined</Text>
            </Fifty>
            <Line></Line>
            <Hundred>
              <Number>100+</Number>
              <Text>Big companies have joined</Text>
            </Hundred>
          </Count>
        </Hold>
      </Wrapper>
    </Container>
  );
};
export default Description;

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    358.26deg,
    #f8f8fc 62.42%,
    rgba(248, 248, 252, 0) 98.75%
  );
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 80%;
  img {
    height: 600px;
    width: 80%;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    /* margin-top: -90px; */
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const Hold = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 70px;
`;
const Logohold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    justify-content: space-around;
  }
  img {
    margin-top: 15px;
    height: 20px;
    width: 100px;
    @media (max-width: 400px) {
      width: 80px;
      height: 20px;
    }
    @media (max-width: 320px) {
      width: 70px;
      height: 17px;
    }
  }
`;

const Count = styled.div`
  display: flex;
  border-radius: 10px;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;

  display: flex;
  border-radius: 10px;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
const Ninetynine = styled.div`
  width: 32%;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;

    height: 150px;
  }
`;
const Number = styled.div`
  font-size: 40px;
  line-height: 125%;
  font-weight: bold;
`;
const Text = styled.div`
  font-size: 16px;
  line-height: 145%;
  color: #626262;
`;

const Fifty = styled.div`
  width: 32%;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;

    height: 150px;
  }
`;

const Hundred = styled.div`
  width: 32%;
  height: 90px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;

    height: 150px;
  }
`;
const Line = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 200px;
    border: 1px solid rgb(228, 223, 223);
    display: block;
  }
`;
