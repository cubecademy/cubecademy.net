import React from "react";
// components
import WIPBanner from "../components/WIPBanner";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const ColorText = styled.span`
  color: ${(props) => props.color};
`;

const MainWrapper = styled.section`
  text-align: center;
  margin-top: 0.5rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding-bottom: 1.3rem;
  padding-top: 1.3rem;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 1.3rem;
`;

const Home = () => {
  return (
    <>
      <WIPBanner />
      <NavBar />
      <MainWrapper>
        <h1 style={{ fontSize: "4rem" }}>
          <ColorText color="red">C</ColorText>
          <ColorText color="orange">u</ColorText>
          <ColorText color="green">b</ColorText>
          <ColorText color="blue">e</ColorText>
          <ColorText>c</ColorText>
          <ColorText color="purple">a</ColorText>
          <ColorText color="red">d</ColorText>
          <ColorText color="orange">e</ColorText>
          <ColorText color="green">m</ColorText>
          <ColorText color="blue">y</ColorText>
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            paddingLeft: "1rem",
            padddingRight: "1rem",
          }}
        >
          We create opportunities for curious minds to learn about Speedcubing.
        </p>
        <img
          src="/CoverPhoto.PNG"
          style={{ width: "50%", marginBottom: "2rem", height: "50%" }}
          alt="workshop one"
        />
        <Footer>&copy; Copyright Cubecademy 2022.</Footer>
      </MainWrapper>
    </>
  );
};

export default Home;
