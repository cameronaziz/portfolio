import React, { Component } from 'react';
import { ArticleTitle } from './Styled';
import './css/articleTitle.css';

class ArticleTitleComponent extends Component {
  render() {
    return (
      <div className="svg-wrapper">
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="320" />
        </svg>
        <div className="text">{this.props.children}</div>
      </div>
    );
  }
}

export default ArticleTitleComponent;
