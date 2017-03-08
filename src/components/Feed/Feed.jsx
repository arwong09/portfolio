import style from './feed.scss'
import React, { Component } from 'react'
import FeedItem from './components/FeedItem/FeedItem.jsx'
import LoadingItem from './components/LoadingItem/LoadingItem.jsx'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = { loadedItems: [] }
    this.onLoad = this.onLoad.bind(this)
  }

  onLoad(feedItem) {
    let updatedItems = this.state.loadedItems
    updatedItems.push({ name: feedItem.props.name, imgPath: feedItem.props.imgPath })
    this.setState({ loadedItems: updatedItems })
    this.loadingItem ? this.loadingItem.animate() : null
  }

  componentWillReceiveProps() {
    this.state = { loadedItems: [] }
  }

  render() {
    return (
      <div className="feed">
        <h1 className="app__h1">{this.props.name}</h1>
        {this.state.loadedItems.map((item, i) =>
          <FeedItem
            imgPath={item.imgPath}
            name={item.name}
            renderModal={this.props.renderModal}
            key={i} />
        )}
        {this.props.items.length > this.state.loadedItems.length &&
          <LoadingItem ref={(loadingItem) => this.loadingItem = loadingItem} />
        }
        <div className="feed__loading hidden">
          {this.props.items.map((item, i) =>
            <FeedItem
              imgPath={item.imgPath}
              name={item.name}
              onLoad={this.onLoad}
              key={i} />
          )}
        </div>
      </div>
    )
  }
}
