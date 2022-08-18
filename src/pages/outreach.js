import React from "react";
import WIPBanner from "../components/WIPBanner";
import NavBar from "../components/NavBar";
import styled from "styled-components";

const OutreachGridWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 2rem;
  text-align: center;
`;

const OutreachItem = styled.section``;

const Outreach = () => {
  return (
    <>
      <WIPBanner />
      <NavBar />
      <OutreachGridWrapper>
        <OutreachItem>
          <h1>L.B Nagar Teaching Session</h1>
          <p>Teaching the 2x2x2 cube to 9th grade students.</p>
        </OutreachItem>
        <OutreachItem>
          <h1>L.B Nagar Teaching Session</h1>
          <p>Teaching the 2x2x2 cube to 9th grade students.</p>
        </OutreachItem>
        <OutreachItem>
          <h1>L.B Nagar Teaching Session</h1>
          <p>Teaching the 2x2x2 cube to 9th grade students.</p>
        </OutreachItem>
      </OutreachGridWrapper>
    </>
  );
};

export default Outreach;
