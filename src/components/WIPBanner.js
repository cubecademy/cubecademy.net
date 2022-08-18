import React from "react";
import styled from "styled-components";
import Alert from "react-bootstrap/Alert";

const BannerWrapper = styled(Alert)`
  text-align: center;
`;
const WIPBanner = () => {
  return (
    <BannerWrapper>
      This website is a work in progress, check out the codebase{" "}
      <a href="https://github.com/cubecademy/cubecademy.net">here</a>.
    </BannerWrapper>
  );
};

export default WIPBanner;
