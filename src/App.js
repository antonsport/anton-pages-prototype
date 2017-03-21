import React, { Component } from 'react'
import styled from 'styled-components'
import { Route, withRouter, Redirect } from 'react-router-dom'

import Grid from './Grid'
import AddModule from './AddModule'
import EditModule from './EditModule'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`

class App extends Component {
  render() {
    const { location } = this.props
    return (
      <Container>

        <Grid />

        <Route key="add" path="/add" component={() => <AddModule />} />
        <Route key={location.pathname} path="/edit/:moduleId" component={({ match }) => {
          // console.log(match)
          // const module = ''
          // TODO: if no module is found on match id just redirect
          if (!module) {
            return <Redirect path="/" />
          }
          return <EditModule />

        }} />
      </Container>
    )
  }
}

export default withRouter(App)
