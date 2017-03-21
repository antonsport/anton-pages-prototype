import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 255, 0, .25);
`;

const Club = ({ item, type }) => (
  <Container data-type={type} />
)

export default Club
