import React, { useState } from "react";
import styled from "styled-components";
import pix from "./Logo.jpg";
import "./sidebar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Header = () => {
  const [activate, setActivate] = useState(false);

  const handleClick = () => setActivate(!activate);
  //   const closemenu = () => setActivate(false);
  return (
    <Container>
      <Wrapper>
        <Logo src={pix} />
        <Navigator>
          <Span>Product</Span>
          <Span>Price</Span>
          <Span>Learn</Span>
          <Span>Support</Span>
        </Navigator>
        <Navigation>
          <Spaned>Sign In</Spaned>
          <Button
          // to="/signup"
          >
            Get Started
          </Button>
        </Navigation>

        <Togglehold onClick={handleClick}>
          {activate ? (
            <AiOutlineClose size="25px" />
          ) : (
            <AiOutlineMenu size="25px" />
          )}
        </Togglehold>

        <div className={`DropMenu ${activate ? "Show" : ""}`}>
          <Navhold>
            <Span>Product</Span>
            <Span>Price</Span>
            <Span>Learn</Span>
            <Span>Support</Span>
            <Spaned>Sign In</Spaned>
            <Button
            // to="/signup"
            >
              Get Started
            </Button>
          </Navhold>
        </div>
      </Wrapper>
    </Container>
  );
};
export default Header;

const Container = styled.div`
  width: 100%;

  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const Logo = styled.img``;

const Navigator = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    position: absolute;
    height: 80vh;
    width: 50%;
    top: 95px;
    justify-content: space-evenly;
    backdrop-filter: blur(10px);
    background: rgba(65, 89, 210, 0.4);
    color: white;
    border-radius: 0px 10px 10px 0px;
    transition: all 900ms;
    display: none;
    align-items: center;
  }
`;
const Navigation = styled.div`
  display: flex;
  width: 260px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Span = styled.div`
  font-size: 16px;
  /* font-family: poppins; */
`;
const Spaned = styled.div`
  font-size: 16px;
  /* font-family: poppins; */
  text-decoration: none;
  color: #2752e7;
`;
const Button = styled.div`
  width: 170px;
  /* text-decoration: none; */
  height: 50px;
  border: 2px solid #2752e7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  cursor: pointer;
  border-radius: 5px;
  color: #2752e7;

  transition: all 450ms;
  /* font-family: poppins; */
  :hover {
    background-color: #2752e7;
    color: white;
  }
`;
const Togglehold = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;

const Navhold = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 80%;
`;
