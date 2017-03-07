import style from './loading-item.scss'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
let img = 'dist/' + require('./loading-item.png');

export default class LoadingItem extends Component {
  animate() {
    this.img.style.transform = 'translateY(30px)'
    this.img.style.opacity = '0.01'
    this.img.classList = this.img.classList + " loadingItem-animate"
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="loadingItem"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <img ref={(img) => this.img = img} className="feed__loading-item" src={img} />
      </ReactCSSTransitionGroup>
    )
  }
}
