import style from './index.scss'
import React, { Component } from 'react'
import { PORTFOLIO } from 'data/items.js'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Index/components/Nav/Nav.jsx'
import Footer from 'views/Index/components/Footer/Footer.jsx'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { modalContent: null }
    this.renderModal = this.renderModal.bind(this)
  }

  renderModal(modalContent) {
    this.setState({ modalContent: modalContent })
  }

  render() {
    return(
      <div className="index">
        <Nav />
        {this.state.modalContent &&
          <Modal
            name={this.state.modalContent.name}
            imgPath={this.state.modalContent.imgPath}
            description={this.state.modalContent.description}
            renderModal={this.renderModal} />
        }
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
