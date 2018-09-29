import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import Logo from './Logo';

class Header extends Component {
  render() {
    const { introTitle, articleOpen } = this.props;
    if (articleOpen) {
      return null;
    }
    const hi = introTitle.substring(0, 3);
    const name = introTitle.substring(4, introTitle.length - 1);
    return (
      <header id="header">
        <Logo />
        <div className="content">
          <div className="inner">
            <h1><span className="title-hi">{hi}</span> {name}</h1>
            {/* <h1>Hi. I&apos;m Cameron Aziz.</h1> */}
            <p>
              I&apos;m a web engineer specializing in full stack Javascript
              applications. Like this one.
            </p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/work" onClick={this.props.openArticle}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={this.props.openArticle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={this.props.openArticle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  articleOpen: PropTypes.bool.isRequired,
};

export default Header;
