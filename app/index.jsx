import style from '../assets/css/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [{
      name: 'Parque Tayrona',
      imgPath: 'https://s3-us-west-1.amazonaws.com/nomadwong-photos/parque-tayrona-c.jpg'
    }, {
      name: 'Santa Marta',
      imgPath: 'https://s3-us-west-1.amazonaws.com/nomadwong-photos/santa-marta-c.jpg'
    }]}
  }

  render() {
    return (
      <div className="feed">
        {this.state.items.map((item, i) =>
          <FeedItem imgPath={item.imgPath} name={item.name} key={i} />
        )}
      </div>
    )
  }
}

const LoadedItem = ({ name, imgPath }) =>
  <ReactCSSTransitionGroup
      transitionName="fadeIn"
      transitionAppear={true}
      transitionAppearTimeout={1000}>
    <div className="feed__item__img" style={{backgroundImage: 'url(' + imgPath + ')'}}></div>
    <h2 className="feed__item__h2">{name}</h2>
  </ReactCSSTransitionGroup>

const LoadingItem = () =>
  <ReactCSSTransitionGroup
      transitionName="fadeInUp"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionLeaveTimeout={300}>
    <img className="feed__item__loading" src='assets/images/item-loading.png' />
  </ReactCSSTransitionGroup>

class FeedItem extends Component {
  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  imageLoaded() {
    this.setState({ loaded: true })
  }

  render() {
    return (
      <div className="feed__item">
        <img className="hidden" src={this.props.imgPath} onLoad={this.imageLoaded.bind(this)} />
          {this.state.loaded ? (
            <LoadedItem name={this.props.name} imgPath={this.props.imgPath} />
          ) : (
            <LoadingItem />
          )}
      </div>
    )
  }
}


const App =
  <div className="app">
    <h1 className="app__h1">Panoramas</h1>
    <Feed initialItem={{ name: "Parque Tayrona", imgPath: "https://s3-us-west-1.amazonaws.com/nomadwong-photos/parque-tayrona-c.jpg"}} />
  </div>

ReactDOM.render(App, document.getElementById('root'))
