import React from "react";

import styled from "styled-components";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";

const Started = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>Get Started in Minutes</H1>
          <H2>
            Has a variety of features that will make it the best place to start
            your trade
          </H2>
        </Top>
        <Wrap>
          <Card>
            <Cardwrap>
              <img src={one} alt="" />
              <P>Sign Up</P>
              <P1>
                Buy Bitcoin or Enthereum, the security stores it in your wallet
                or send it on easy to friends
              </P1>
            </Cardwrap>
          </Card>
          <Card>
            <Cardwrap>
              <img src={two} alt="" />
              <P>Fund</P>
              <P1>
                Choose your prefered payment method such as bank transfer or
                credit card to top up your wallet
              </P1>
            </Cardwrap>
          </Card>
          <Card>
            <Cardwrap>
              <img src={three} alt="" />
              <P>Buy Crypto</P>
              <P1>
                Sign up for free wallet on web, ios or Android and follow our
                easy process to set up your profile
              </P1>
            </Cardwrap>
          </Card>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Started;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 90%;
`;
const Top = styled.div`
  width: 100%;

  display: flex;

  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.div`
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
const H2 = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

const Wrap = styled.div`
  margin-top: 15px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;
const Card = styled.div`
  width: 300px;

  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  margin: 10px;
  @media (max-width: 825px) {
  }
`;
const Cardwrap = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 150px;
    width: 200px;
  }
`;
const P = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;
const P1 = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
