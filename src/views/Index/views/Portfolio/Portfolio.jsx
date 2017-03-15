import style from './portfolio.scss'
import React, { Component } from 'react'
import { PORTFOLIO } from 'data/items.js'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Index/components/Nav/Nav.jsx'
import PortfolioItem from './components/PortfolioItem.jsx'

export default class Portfolio extends Component {
  render() {
    return(
      <div className="portfolio">
        <h1 className="portfolio__h1">Past Clients</h1>

        <div className="portfolio__row">
          <div className="col-md-3">
            <PortfolioItem href="http://bleacherreport.com" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/bleacherreport.png" />
          </div>
          <div className="col-md-3">
            <PortfolioItem href="http://startupchile.org" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/startupchile.png" />
          </div>
          <div className="col-md-3">
            <PortfolioItem href="http://zaetae.com" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/zaetae.png" />
          </div>
          <div className="col-md-3">
            <PortfolioItem href="http://sohumblee.com" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/humblee.png" />
          </div>
        </div>

        <h1 className="portfolio__h1">Services</h1>
        <div className="portfolio__row">
          <div className="col-md-4">
            <div className="portfolio__service">
              <div className="portfolio__service__img" style={{backgroundImage: 'url(assets/images/single-page-app.jpg'}}></div>
              <h1 className="portfolio__service__h1">Single Page & Fullstack Applications</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio__service">
              <div className="portfolio__service__img" style={{backgroundImage: 'url(assets/images/performance-optimization.jpg'}}></div>
              <h1 className="portfolio__service__h1">Performance & Optimzation</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio__service">
              <div className="portfolio__service__img" style={{backgroundImage: 'url(assets/images/scalable-architecture.jpg'}}></div>
              <h1 className="portfolio__service__h1">Scalable & Maintainable Architecture</h1>
            </div>
          </div>
        </div>
        <div className="portfolio__expertise">
          <div className="portfolio__expertise__img-container">
            <img className="portfolio__expertise__img" src="assets/images/react.png" />
          </div>
          <div className="portfolio__expertise__img-container">
            <img className="portfolio__expertise__img" src="assets/images/ruby-on-rails.png" />
          </div>
          <div className="portfolio__expertise__img-container">
            <img className="portfolio__expertise__img" src="assets/images/aws.png" />
          </div>
          <div className="portfolio__expertise__img-container">
            <img className="portfolio__expertise__img" src="assets/images/heroku.png" />
          </div>
          <div className="portfolio__expertise__img-container">
            <img className="portfolio__expertise__img" src="assets/images/postgresql.png" />
          </div>
        </div>

        <h1 className="portfolio__h1">More Clients</h1>
        <div className="portfolio__row">
          <div className="col-md-3">
            <PortfolioItem href="http://llnl.gov/" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/llnl.png" />
          </div>
          <div className="col-md-3">
            <PortfolioItem href="http://wolorewards.com" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/wolo.png" />
          </div>
          <div className="col-md-3">
            <PortfolioItem href="http://wintick.com" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/ablesys.png" />
          </div>
          <div className="col-md-3">
            <PortfolioItem href="http://stayawhile.com" imgPath="https://s3-us-west-1.amazonaws.com/nomadwong-photos/stayawhile.png" />
          </div>
        </div>

        <h1 className="portfolio__h1">Recommendations</h1>
        <div className="portfolio__recommendation">
          <img className="portfolio__recommendation__img" src="assets/images/doug.jpg" />
          <div className="portfolio__recommendation__body">
            <p className="portfolio__recommendation__p">"Andrew is a skilled JavaScript developer with a keen eye for aesthetics and clearly-written, performant code. He is passionate about working on big ideas and technology that has a strong social impact." -Douglas Mill</p>
          </div>
        </div>
      </div>
    )
  }
}
