import style from './index.scss'
import React, { Component, cloneElement } from 'react'
import { PORTFOLIO } from 'data/items.js'
import store from 'redux/store'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Index/components/Nav/Nav.jsx'
import Nav2 from 'views/Index/components/Nav2/Nav2.jsx'
import Footer from 'views/Index/components/Footer/Footer.jsx'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().modalContent
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().modalContent)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return(
      <div className="index">
        <Nav />
        <Nav2 />
        {this.state.modalContent &&
          <Modal
            name={this.state.modalContent.name}
            imgPath={this.state.modalContent.imgPath}
            description={this.state.modalContent.description}
            renderModal={this.renderModal} />
        }
        {cloneElement(this.props.children, { renderModal: this.renderModal })}
        <Footer />
      </div>
    )
  }
}
