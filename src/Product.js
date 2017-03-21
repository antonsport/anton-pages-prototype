import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 0, 0, .25);
`;

const Product = ({ item, type }) => (
  <Container data-type={type} />
)

export default Product
