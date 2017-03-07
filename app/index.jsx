import style from '../assets/css/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { loadedItems: [] }
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad(feedItem) {
    let newState = this.state.loadedItems
    newState.push({ name: feedItem.props.name, imgPath: feedItem.props.imgPath })
    this.setState({ loadedItems: newState })
    this.loadingItem.animate()
  }

  render() {
    return (
      <div className="feed">
        {this.state.loadedItems.map((item, i) =>
          <FeedItem imgPath={item.imgPath} name={item.name} key={i} />
        )}
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem ref={(loadingItem) => this.loadingItem = loadingItem} />
        }
        <div className="feed__loading hidden">
          {this.props.items.map((item, i) =>
            <FeedItem imgPath={item.imgPath} name={item.name} onLoad={this.onLoad} key={i} />
          )}
        </div>
      </div>
    )
  }
}

class LoadingItem extends Component {
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
      transitionAppearTimeout={1000}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>
    <img ref={(img) => this.img = img} className="feed__item__loading" src='assets/images/item-loading.png' />
  </ReactCSSTransitionGroup>
  )
}
}

class FeedItem extends Component {
  constructor(props) {
    super(props)
    this.onLoad = this.props.onLoad ? this.props.onLoad.bind(null, this) : null
  }

  render() {
    return (
      <div className="feed__item">
        <ReactCSSTransitionGroup
        transitionName="item"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          <div className="feed__item__img" style={{backgroundImage: 'url(' + this.props.imgPath + ')'}}></div>
          <h2 className="feed__item__h2">{this.props.name}</h2>
        </ReactCSSTransitionGroup>
        <img className="hidden" src={this.props.imgPath} onLoad={this.onLoad} />
      </div>
    )
  }
}

const items = [{
  name: 'Parque Tayrona',
  imgPath: 'https://s3-us-west-1.amazonaws.com/nomadwong-photos/parque-tayrona-c.jpg'
}, {
  name: 'Santa Marta',
  imgPath: 'https://s3-us-west-1.amazonaws.com/nomadwong-photos/santa-marta-c.jpg'
}]

const App =
  <div className="app">
    <h1 className="app__h1">Panoramas</h1>
    <Feed items={items} />
  </div>

ReactDOM.render(App, document.getElementById('root'))
