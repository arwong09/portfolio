import style from './feed-item.scss'
import React, { Component } from 'react'
import store from 'redux/store'
import { renderModal } from 'redux/actions'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class FeedItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    store.dispatch(renderModal({
      name: this.props.name,
      imgPath: this.props.imgPath
    }))
  }

  render() {
    return (
      <div className="feed__item" onClick={this.handleClick}>
        <ReactCSSTransitionGroup
        transitionName="item"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          <div className="feed__item__img" style={{backgroundImage: 'url(' + this.props.imgPath + ')'}}></div>
          <h2 className="feed__item__h2">{this.props.name}</h2>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
