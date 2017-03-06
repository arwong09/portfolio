import style from '../assets/css/main.scss'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.items = [
      {
        name: "Santa Marta",
        imgPath: "assets/images/santa-marta-c.jpg"
      }, {
        name: "Parque Tayrona",
        imgPath: "assets/images/parque-tayrona-c.jpg"
      }
    ]
  }

  render() {
    return (
      <div className="feed">
        {this.items.map((item, i) =>
          <FeedItem imgPath={item.imgPath} name={item.name} key={i} />
        )}
      </div>
    )
  }
}

class FeedItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="feed__item">
        <div className="feed__item__border">
          <div className="feed__item__img-container" style={{backgroundImage: 'url(' + this.props.imgPath + ')'}}>
            <div className="feed__item__overlay"></div>
          </div>
        </div>
        <h2 className="feed__item__h2">{this.props.name}</h2>
      </div>
    )
  }
}


const App =
  <div className="app">
    <h1 className="app__h1">Panoramas</h1>
    <Feed />
  </div>

ReactDOM.render(App, document.getElementById('root'))
