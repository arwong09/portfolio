// import style from '../assets/css/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PHOTOS, PORTFOLIO } from 'data/items.js'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Index/components/Nav/Nav.jsx'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = { modalContent: null, view: 'photos' }
    this.renderModal = this.renderModal.bind(this)
    this.viewPortfolio = this.viewPortfolio.bind(this)
  }

  viewPortfolio() {
    let currentState = this.state
    currentState.view = 'portfolio'
    this.setState(currentState)
  }

  renderModal(modalContent) {
    this.setState({ modalContent: modalContent })
  }

  render() {
    return(
      <div className="app">
        <Nav viewPortfolio={this.viewPortfolio} />
        {this.state.modalContent &&
          <Modal
            name={this.state.modalContent.name}
            imgPath={this.state.modalContent.imgPath}
            description={this.state.modalContent.description}
            renderModal={this.renderModal} />
        }
        {this.state.view == 'portfolio' ? (
          <Feed items={PORTFOLIO} name="Portfolio" renderModal={this.renderModal} />
        ) : (
          <Feed items={PHOTOS} name="Photos" renderModal={this.renderModal} />
        )}
      </div>
    )
  }
}
