import style from '../assets/css/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ITEMS } from './data/items.js'
import Feed from './components/Feed/Feed.jsx'
import Modal from './components/Modal/Modal.jsx'

class App extends Component {
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
      <div className="app">
        {this.state.modalContent &&
          <Modal
            name={this.state.modalContent.name}
            imgPath={this.state.modalContent.imgPath}
            description={this.state.modalContent.description} />
        }
        <Feed items={ITEMS} renderModal={this.renderModal} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
