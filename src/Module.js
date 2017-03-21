import React, { Component } from 'react'
import styled from 'styled-components'
import { withRouter, Link } from 'react-router-dom'
import map from 'lodash/map'

import Product from './Product'

const Container = styled.div`
  ${''/* position: relative;
  display: flex;

  &[data-type="banner"] { background-color: tomato;}
  &[data-type="club"] { background-color: lightpink;}
  &[data-type="products"] { background-color: lightblue;} */}
`

const Buttons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  a {
    margin-right: 1rem;
  }
`

class Module extends Component {
  // static.propTypes = {}

  state = {
    mouseOver: false,
  }

  onMouseOver = () => {
    this.setState({ mouseOver: true })
  }

  onMouseOut = () => {
    this.setState({ mouseOver: false })
  }

  render() {
    const { module } = this.props
    const { mouseOver } = this.state

    return (
      <Container
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        data-type={module.type}
      >

        {map(module.products, (product, key) => <Product key={key} mouseOver={mouseOver} /> )}

        <Buttons>
          <Link to="/add">Add one before</Link>
          <Link to="/add">Add one after</Link>
          <Link key={module.id} to={`/edit/${module.id}`}>Edit</Link>
        </Buttons>

      </Container>
    )
  }
}

export default withRouter(Module)
