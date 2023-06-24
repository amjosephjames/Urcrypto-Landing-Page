import React from "react";
import styled from "styled-components";
import Header from "../header/header";
import Hero from "../hero/hero";
import Description from "../description/description";
import Create from "../create/create";
import Lightning from "../lighting/lightning";
import Security from "../security/security";
import Started from "../started/started";
import People from "../people/people";
import Join from "../join/join";
import Footer from "../footer/footer";
const Homescreen = () => {
  return (
    <Container>
      <Header />
      <Hero />
      <Description />
      <Create />
      <Lightning />
      <Security />
      <Started />
      <People />
      <Join />
      <Footer />
    </Container>
  );
};
export default Homescreen;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
