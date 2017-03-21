import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  ${''/* display: inline-block; */}

`

const withModule = WrappedComponent =>
  class extends Component {
    state = {}

    render() {
      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }

export default withModule
