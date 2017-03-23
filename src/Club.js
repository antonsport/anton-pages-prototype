import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url(https://antonclub-res.cloudinary.com/image/upload/q_auto,f_auto/backoffice/list-item-previews/antonclub);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80%;
`;

const Club = ({ item, type }) => (
  <Container data-type={type} />
)

export default Club
