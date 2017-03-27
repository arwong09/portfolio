import style from './feed.scss'
import React, { Component } from 'react'
import store from 'redux/store.js'
import { itemLoaded } from 'redux/actions'
import FeedItem from './components/FeedItem/FeedItem.jsx'
import LoadingItem from './components/LoadingItem/LoadingItem.jsx'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().loadedItems
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().loadedItems)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onLoad(feedItem) {
    store.dispatch(itemLoaded(feedItem))
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
