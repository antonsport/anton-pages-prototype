import React from "react";
import cssEase from "css-ease"
import styled from "styled-components";
import { Link } from "react-router-dom"
import ismobile from 'ismobilejs'

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
`

const EditOverlay = styled.div`
  border-top: 1px solid rgba(0, 0, 0, .35);
  background: #fff;
  position: absolute;
  width: 80%;
  height: 50px;
  bottom: 0;
  left: 10%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 150ms ${cssEase["ease-in-out-quad"]};
  opacity: ${props => props.focused ? 1 : 0};
  transform: translateY(${props => props.focused ? '0' : '51px'});
`

// const Button = styled.div`
//   position: absolute;
//   width: 100px;
//   height: 100px;
//   background: white;
//   top: 50%;
//   margin-top: -50px;
//   z-index: 1;
// `

const TagColor = styled.div`
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  background-color: rgba(255, 0, 0, .25);
`

const ModuleName = styled.div`
`

const Edit = styled(Link)`
  width: 20px;
  height: 20px;
`

// const AddButtonLeft = styled(Button)`
//   left: 0;
// `
//
// const AddButtonRight = styled(Button)`
//   right: 0;
// `

const ItemEditor = ({
  onMouseOverModule,
  onMouseOutModule,
  focused,
  moduleId,
  position,
}) => (
  <Container
    onMouseOut={() => onMouseOutModule()}
    onMouseOver={() => onMouseOverModule(moduleId)}
  >

    <EditOverlay focused={focused || ismobile.any}>
      <TagColor />
      <ModuleName>Navn på modul</ModuleName>
      <Edit to={`/edit/${moduleId}`}>
        <svg viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#333" fill="none" fillRule="evenodd">
            <path d="M11.74 1L14 3.263l-9.24 9.254-2.83 1.117c-.514.202-.765-.055-.56-.573L2.49 10.2 11.74 1z"></path>
            <path d="M1.5 13.67s2.042 1.137 7.14.08c5.096-1.055 7.86-.295 7.86-.147" strokeLinecap="round" opacity=".31"></path>
          </g>
        </svg>
      </Edit>

    </EditOverlay>
    {/* {position.first &&
      <AddButtonLeft>Add before</AddButtonLeft>} */}

    {/* {position.last &&
      <AddButtonRight>Add after</AddButtonRight>} */}
  </Container>
)

export default ItemEditor
