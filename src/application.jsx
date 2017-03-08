import style from '../assets/css/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Portfolio from 'views/Page/views/Portfolio/Portfolio.jsx'
import Photos from 'views/Page/views/Photos/Photos.jsx'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Photos} />
    <Route path="portfolio" component={Portfolio} />
  </Router>, document.getElementById('root'))
