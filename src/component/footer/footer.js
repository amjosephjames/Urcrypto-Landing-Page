import React from "react";
import styled from "styled-components";
import { ImFacebook } from "react-icons/im";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import pic from "./assets/Logo.jpg";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Pic src={pic} alt="" />
          <Text>Take your crypto to the next level</Text>
          <Iconify>
            <ImFacebook size={22} color="darkgray" />
            <FaTwitter size={22} color="darkgray" />
            <AiFillInstagram size={22} color="darkgray" />
            <FaLinkedin size={22} color="darkgray" />
            <AiFillYoutube size={22} color="darkgray" />
          </Iconify>
        </Left>

        <Details>
          <Navigator>
            <Nav>Company</Nav>
            <Span>About Us</Span>
            <Span>Blog</Span>
            <Span>Careers</Span>
            <Span>Student</Span>
            <Span>Security</Span>
            <Span>Trust and safety</Span>
            <Span>Newsroom</Span>
            <Span>Videos</Span>
          </Navigator>
          <Navigator>
            <Nav>Learn</Nav>
            <Span>What`s Trending</Span>
            <Span>Product news</Span>
            <Span>Events</Span>
            <Span>University</Span>
            <Span>Research</Span>
            <Span>Market Updates</Span>
          </Navigator>

          <Navigator>
            <Nav>Product</Nav>
            <Span>Stock & Funds</Span>
            <Span>Cash Card</Span>
            <Span>Crypto</Span>
            <Span>Options</Span>
            <Span>Gold</Span>
            <Span>Learn Snacks</Span>
          </Navigator>

          <Navigator>
            <Nav>Support</Nav>
            <Span>Support Center</Span>
            <Span>Contact Us</Span>
            <Span>System Status</Span>
            <Span>Areas of Avaibility</Span>
          </Navigator>
          <Navigator>
            <Nav>Resources</Nav>
            <Span>Prices</Span>
            <Span>Site Widgets</Span>
            <Span>Tax</Span>
            <Span>Support</Span>
          </Navigator>
        </Details>
      </Wrapper>
    </Container>
  );
};
export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 50px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding-bottom: 20px;
  }
`;
const Pic = styled.img`
  height: 30px;
  width: 130px;
`;
const Text = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
const Iconify = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Navigator = styled.div`
  /* width: 180px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Nav = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #2c3131;
  margin-top: 3px;
`;
const Span = styled.div`
  font-size: 15px;
  color: #2c3131;
  margin-top: 9px;
`;
