import React from "react";
import styled from "styled-components";
import data from "./data.json";
import pic from "./joe.jpg";

const Card = (props) => {
  return (
    <>
      {data?.map((props) => {
        return (
          <Box key={props.id}>
            <Hold>
              <img src={pic} alt="" />
              <Right>
                <Name>John Doe</Name>
                <Title>ceo motion design agency</Title>
              </Right>
            </Hold>
            <Content>{props.content} </Content>
          </Box>
        );
      })}
    </>
  );
};
export default Card;

const Box = styled.div`
  width: 200px;
  margin: 10px;
  border-radius: 5px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  padding: 15px 35px;
  height: auto;
  min-height: 250px;
`;
const Hold = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  img {
    height: 45px;
    width: 45px;
    border-radius: 100%;
    background-color: aliceblue;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 30px;
  margin-left: 10px;
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const Title = styled.div`
  font-size: 10px;
`;
const Content = styled.div`
  font-size: 10px;
  line-height: 150%;
  margin-top: 10px;

  color: #626262;
  @media (max-width: 320px) {
    margin-top: 10px;
  }
`;
