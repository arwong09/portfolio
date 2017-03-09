import style from './nav2.scss'
import React, { Component } from 'react'

export default class Nav2 extends Component {
  render() {
    return (
      <nav className="nav2">
        <div className="nav2__block">
          <img className="nav2__avatar" src="assets/images/andrew-wong.jpg" />
          <div className="nav2__text">
            Andrew Wong
          </div>
        </div>

        <div className="nav2__block2">
          <div className="nav2__text">
            Software Engineering Consultant - React / Ruby on Rails
          </div>
        </div>

        <div className="nav2__socials">
          <a className="nav2__social" href="https://medium.com/@andrewwong" target="_blank">
            <span className="fa fa-medium"></span>
          </a>
          <a className="nav2__social" href="https://linkedin.com/in/arwong09" target="_blank">
            <span className="fa fa-linkedin"></span>
          </a>
          <a className="nav2__social" href="https://github.com/arwong09" target="_blank">
            <span className="fa fa-github"></span>
          </a>
          <a className="nav2__social" href="mailto:arwong09@gmail.com">
            <span className="fa fa-envelope"></span>
          </a>
        </div>
      </nav>
    )
  }
}
