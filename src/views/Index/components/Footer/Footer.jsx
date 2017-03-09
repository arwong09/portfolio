import style from './footer.scss'
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer align-center">
        <svg width="60px" height="60px" viewBox="40 20 60 60" version="1.1">
          <g id="Logo" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(40.000000, 20.000000)">
            <rect id="Rectangle-2" fill="#4990E2" x="0" y="0" width="60" height="60"></rect>
            <rect id="Rectangle-3" fill="#FFFFFF" x="4.5" y="4.5" width="51" height="51"></rect>
            <text id="AW" fontFamily="Garamond" fontSize="32" fontWeight="normal" letterSpacing="-5" fill="#4990E2">
                <tspan x="6.72265625" y="41">A</tspan>
                <tspan x="23.0664062" y="41">W</tspan>
            </text>
          </g>
        </svg>
        <h1 className="footer__h1">React / Ruby on Rails Consultant</h1>
        <div className="footer__phone"><span className="fa fa-phone footer__icon"></span> +1 (415) 993-8793</div>
      </footer>
    )
  }
}
