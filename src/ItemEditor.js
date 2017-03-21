import React from "react";
import cssEase from "css-ease"
import styled from "styled-components";
import { Link } from "react-router-dom"

const Container = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.25);

  transition: opacity 50ms ${cssEase["ease-in-out-quad"]};
  opacity: ${props => props.isActive ? 1 : 0};
`;

const ItemEditor = ({
  onMouseOverModule,
  onMouseOutModule,
  isActive,
  moduleId,
}) => (
  <Container
    to={`/edit/${moduleId}`}
    isActive={isActive}
    onMouseOut={() => onMouseOutModule()}
    onMouseOver={() => onMouseOverModule(moduleId)}
  >
    <button type="button">Add one before</button>
    <button type="button">Add one after</button>
  </Container>
)

export default ItemEditor
