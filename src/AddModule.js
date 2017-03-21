import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { connect } from 'react-firebase'
import { withRouter, Link } from 'react-router-dom'

const Container = styled.div`
  width: 50%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 255, 0, .05);
`

const CloseButton = styled(Link)`
  position: absolute;
  top: 1em;
  right: 1em;
`

const AddModule = ({ addModule, match }) =>
  <Container>
    <CloseButton to="/">Cancel</CloseButton>
    <h1>Add module</h1>
    <button type="button" onClick={() => addModule('banner')}>Banner</button>
    <button type="button" onClick={() => addModule('products')}>Produkter</button>
    <button type="button" onClick={() => addModule('club')}>Anton club</button>
  </Container>

AddModule.propTypes = {
  match: PropTypes.object.isRequired,
  addModule: PropTypes.func.isRequired,
}

export default connect((props, ref) => ({
  modules: 'pages-demo',
  addModule: type => {
    const key = ref().push().key
    ref('pages-demo/modules').update({
      [key]: {
        'type': type,
        'id': key,
        'products': {
          [ref().push().key]: true,
          [ref().push().key]: true,
          [ref().push().key]: true,
          [ref().push().key]: true,
          [ref().push().key]: true,
        }
      }
    })
  },
}))(withRouter(AddModule))
