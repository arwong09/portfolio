import style from './feed.scss'
import React, { Component } from 'react'
import FeedItem from './components/FeedItem/FeedItem.jsx'
import LoadingItem from './components/LoadingItem/LoadingItem.jsx'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { loadedItems: [] }
  }

  onLoad(feedItem) {
    this.setState(({ loadedItems }) => {
      return { loadedItems: loadedItems.concat(feedItem) }
    })
  }

  render() {
    return (
      <div className="feed">
        <h1 className="feed__h1">{this.props.name}</h1>
        {this.state.loadedItems.map((item, i) =>
          <FeedItem
            imgPath={item.imgPath}
            name={item.name}
            renderModal={this.props.renderModal}
            key={i} />
        )}
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem />
        }
        <div className="hidden">
          {this.props.items.map((item, i) =>
            <img src={item.imgPath} onLoad={this.onLoad.bind(this, item)} key={i} />
          )}
        </div>
      </div>
    )
  }
}
