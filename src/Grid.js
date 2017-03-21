import React, { Component, PropTypes } from "react"
import { map, flatMap } from "lodash"
import cssEase from "css-ease"
import styled from "styled-components"
import { connect } from "react-firebase"
import { compose, mapProps, branch } from "recompose"
import { Link, withRouter } from "react-router-dom"

import Item from './Item'
import Club from './Club'
import Banner from './Banner'
import Product from './Product'

import ItemEditor from './ItemEditor'

const Container = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  transition: all 250ms ${cssEase["ease-in-out-quad"]};
  transform: ${props => props.isExact ? "translateX(50%)" : "translateX(0%)"};
`

// Både Storefront og Backoffice
const ItemContent = ({ item, type }) => {
  switch (type) {
    case 'products':
      return <Product type={type} item={item} />
    case 'club':
      return <Club type={type} item={item} />
    case 'banner':
      return <Banner type={type} item={item} />
    default:
      return null
  }
}

const Grid = ({ items, children, match }) => {
  const layouts = []

  return (
    <Container isExact={match.isExact} layouts={layouts}>
      {items.map((item, index) => children({ layouts, item, index }))}
    </Container>
  )
}

// Bare Backoffice
const EditorGrid = ({
  match,
  items,
  onMouseOverModule,
  onMouseOutModule,
  activeModule,
}) => (
  <Grid match={match} items={items}>
    {({ item, layouts, index }) => {
      return (
        <Item key={item.id} layouts={layouts} index={index}>
          <ItemContent item={item} type={item.type} />
          <ItemEditor
            moduleIndex={'last'}
            moduleId={item.moduleId}
            onMouseOutModule={onMouseOutModule}
            onMouseOverModule={onMouseOverModule}
            isActive={activeModule === item.moduleId}
          />
        </Item>
    )}}
  </Grid>
)

class ModulesEditor extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  state = {
    activeModuleId: null,
  }

  onMouseOverModule = moduleId => {
    this.setState(() => ({ activeModuleId: moduleId }))
  }

  onMouseOutModule = () => {
    this.setState(() => ({ activeModuleId: null }))
  }

  render() {
    const { items, match } = this.props

    return (
      <div>
        <EditorGrid
          activeModule={this.state.activeModuleId}
          onMouseOverModule={this.onMouseOverModule}
          onMouseOutModule={this.onMouseOutModule}
          items={items}
          match={match}
        />
        <Link to="/add">Add new module</Link>
      </div>
    )
  }
}

export default compose(
  connect({
    pages: "pages-demo"
  }),
  branch(props => !props.pages, () => () => <div>Laster</div>),
  mapProps(({ pages }) => ({
    items: flatMap(
      map(pages.modules, module =>
        map(module.products, (value, id) => {
          // TODO: add position to item - first/last
          return {
            moduleId: module.id,
            type: module.type,
            module,
            id
          }
        }))
    )
  })),
  withRouter
)(ModulesEditor)
