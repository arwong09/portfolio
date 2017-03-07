import style from './assets/css/main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { ITEMS } from './data/items.js'
import Feed from './components/Feed/Feed.jsx'

const App =
  <div className="app">
    <h1 className="app__h1">Panoramas</h1>
    <Feed items={ITEMS} />
  </div>

ReactDOM.render(App, document.getElementById('root'))
