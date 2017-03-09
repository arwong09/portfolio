import style from './portfolio.scss'
import React, { Component } from 'react'
import { PORTFOLIO } from 'data/items.js'
import Feed from 'components/Feed/Feed.jsx'
import Modal from 'components/Modal/Modal.jsx'
import Nav from 'views/Index/components/Nav/Nav.jsx'

export default class Portfolio extends Component {
  render() {
    return(
      <div className="portfolio">
        <h1 className="portfolio__h1">Past Clients</h1>

        <div className="portfolio__row">
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/bleacherreport.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/startupchile.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/zaetae.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/humblee.png" />
            </div>
          </div>
        </div>

        <h1 className="portfolio__h1">Expertise</h1>
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
        <div className="portfolio__row">
          <div className="col-md-4">
            <div className="portfolio__service">
              <div className="portfolio__service__img" style={{backgroundImage: 'url(assets/images/bleacherreport.png'}}></div>
              <h1 className="portfolio__service__h1">Single Page Applications</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio__service">
              <div className="portfolio__service__img" style={{backgroundImage: 'url(assets/images/bleacherreport.png'}}></div>
              <h1 className="portfolio__service__h1">Client Side Performance</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="portfolio__service">
              <div className="portfolio__service__img" style={{backgroundImage: 'url(assets/images/bleacherreport.png'}}></div>
              <h1 className="portfolio__service__h1">Scalable Databases & API</h1>
            </div>
          </div>
        </div>


        <h1 className="portfolio__h1">More Clients</h1>
        <div className="portfolio__row">
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/bleacherreport.png" />
            </div>
            <h1 className="portfolio__client__h1">Bleacher Report</h1>
          </div>
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/bleacherreport.png" />
            </div>
            <h1 className="portfolio__client__h1">Bleacher Report</h1>
          </div>
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/bleacherreport.png" />
            </div>
            <h1 className="portfolio__client__h1">Bleacher Report</h1>
          </div>
          <div className="col-md-3">
            <div className="portfolio__client">
              <img className="portfolio__client__img" src="assets/images/bleacherreport.png" />
            </div>
            <h1 className="portfolio__client__h1">Bleacher Report</h1>
          </div>
        </div>

        <h1 className="portfolio__h1">Recommendations</h1>
        <div className="portfolio__recommendation">
          <img className="portfolio__recommendation__img" src="assets/images/doug.jpg" />
          <div className="portfolio__recommendation__body">
            <p className="portfolio__recommendation__p">"Andrew is a skilled JavaScript developer with a keen eye for aesthetics and clearly-written, performant code. He is passionate about working on big ideas and technology that has a strong social impact."</p>
            <h2 className="portfolio__recommendation__h2">-Douglas Mill</h2>
          </div>
        </div>
      </div>
    )
  }
}
