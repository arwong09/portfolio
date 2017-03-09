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
            <div className="modal__img" style={{backgroundImage: 'url('+this.props.imgPath+')'}}>
              <h1 className="modal__h1">{this.props.name}</h1>
            </div>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
