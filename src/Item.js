import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 25%;
  height: 0;
  padding-top: 25%;
`;

const Item = ({ children, layouts }) => (
  <Container>
    {children}
  </Container>
)

export default Item
