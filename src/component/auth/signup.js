import React from "react";
import styled from "styled-components";
// import {Link} from "react-router-dom"
import pic from "./assets/crypto.jpg";

const Signup = () => {
  return (
    <Container>
      <Card>
        <Wrapper>
          <Pic src={pic} alt="" />
          <Mid>
            <H1>Join Us</H1>
            <H2>fill in your details to create a free crypto account</H2>
          </Mid>
          <Form>
            <Holder>
              <P>Name</P>
              <Input>
                <input placeholder="" />
              </Input>
            </Holder>
            <Holder>
              <P>Email</P>
              <Input>
                <input placeholder="" />
              </Input>
            </Holder>
            <Holder>
              <P>Password</P>
              <Input>
                <input placeholder="" />
              </Input>
            </Holder>
            <Button>Sign Up</Button>
            <Down>
              Already have an account? <Link>Sign In</Link>
            </Down>
          </Form>
        </Wrapper>
      </Card>
    </Container>
  );
};
export default Signup;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  width: 400px;
  height: 600px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 90%;
`;
const Pic = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 70px 70px;
  object-fit: cover;
  resize: none;
`;
const Mid = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const H2 = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 100%;
`;
const Holder = styled.div`
  width: 100%;
`;
const P = styled.div`
  font-size: 16px;
  position: absolute;
  margin-left: 10px;
`;
const Input = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #2752e7;
  border-radius: 5px;
  input {
    width: 90%;
    outline: none;
    border: none;
    height: 100%;
    :focus {
      border: solid 1px #05185c;
    }
  }
`;
const Button = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #2752e7;
  color: white;
  font-size: 16px;
`;
const Down = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  font-size: 16px;
`;
const Link = styled.div`
  font-size: 16px;
`;
