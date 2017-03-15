import style from './portfolio-item.scss'
import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const img = 'dist/' + require('components/Feed/components/LoadingItem/loading-item.png');

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad() {
    this.setState({ loaded: true })
  }

  render() {
    if(this.state.loaded) {
      return (
        <div className="portfolio__client">
          <ReactCSSTransitionGroup
            transitionName="item"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
              <img className="portfolio__client__img" src={this.props.imgPath} />
          </ReactCSSTransitionGroup>
        </div>
      )
    } else {
      return (
        <ReactCSSTransitionGroup
          transitionName="loadingItem"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            <div className="fa fa-image portfolio__client__placeholder">
              <img className="hidden" src={this.props.imgPath} onLoad={this.onLoad} />
            </div>
          </ReactCSSTransitionGroup>
      )
    }
  }
}
