import React, { Component } from 'react'
import { PORTFOLIO } from 'data/items.js'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Page/components/Nav/Nav.jsx'

export default class Portfolio extends Component {
  render() {
    return(
      <Feed items={PORTFOLIO} name="Portfolio" renderModal={this.renderModal} />
    )
  }
}
