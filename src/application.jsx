import style from '../assets/css/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router'
import Index from 'views/Index/Index.jsx'
import Portfolio from 'views/Index/views/Portfolio/Portfolio.jsx'
import Photos from 'views/Index/views/Photos/Photos.jsx'

render(
  <Router history={browserHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Photos} />
      <Route path="portfolio" component={Portfolio} />
    </Route>
  </Router>
, document.getElementById('root'))
