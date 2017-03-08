import style from './modal-style.scss'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.renderModal(null)
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="modal"
        transitionAppear={true}
        transitionAppearTimeout={200}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        <div className="modal" onClick={this.handleClick}>
          <div className="modal__container">
            <h1 className="modal__h1">{this.props.name}</h1>
            <div className="modal__img" style={{backgroundImage: 'url('+this.props.imgPath+')'}}></div>
            <div className="modal__body">
              <p>Lorem Khaled Ipsum is a major key to success. Look at the sunset, life is amazing, life is beautiful, life is what you make it. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. They will try to close the door on you, just open it. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. To succeed you must believe. When you believe, you will succeed. Look at the sunset, life is amazing, life is beautiful, life is what you make it.</p>
              <p>The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. To succeed you must believe. When you believe, you will succeed. How’s business? Boomin. It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. The key to more success is to have a lot of pillows. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing.</p>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
