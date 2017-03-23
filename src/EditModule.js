import React, { PropTypes } from 'react'
import { find } from 'lodash'
import styled from 'styled-components'
import { connect } from 'react-firebase'
import { withRouter, Link } from 'react-router-dom'
import { compose, mapProps, branch } from 'recompose'

const Container = styled.div`
  width: 50%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, .1);
`

const CloseButton = styled(Link)`
  position: absolute;
  top: 1em;
  right: 1em;
`

const EditModule = ({ deleteModule, modules, match }) => {
  const module = find(modules, { id: match.params.moduleId })
  return (
    <Container>
      <CloseButton to="/">Close</CloseButton>
      <h1>Edit module: {module.id}</h1>
      <button type="button">Add module before</button>
      <button type="button">Move up</button>
      <button type="button">Move down</button>
      <button type="button">Add module after</button>
      <button type="button" onClick={() => deleteModule(module.id)}>Delete</button>
    </Container>
  )
}

EditModule.propTypes = {
  modules: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
}

export default compose(
  connect(( props, ref ) => ({
    modules: 'pages-demo/modules',
    deleteModule: id => {
      ref(`pages-demo/modules/${id}`).remove()
    },
  })),
  branch(
    props => !props.modules,
    () => () =>  <div>Laster</div>,
  ),
  mapProps(({ modules, deleteModule }) => ({
    modules,
    deleteModule,
  })),
  withRouter,
)(EditModule)
