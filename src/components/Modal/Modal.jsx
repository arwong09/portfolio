import style from './modal-style.scss'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="modal"
        transitionAppear={true}
        transitionAppearTimeout={200}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        <div className="modal">
          <h1 className="modal__h1">{this.props.name}</h1>
          <img className="modal__img" src={this.props.imgPath} />
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}
