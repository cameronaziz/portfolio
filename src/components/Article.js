import React, { Component } from 'react';
import { Article } from './styled';

class ArticleContainer extends Component {
  render() {
    return (
      <Article width={this.props.width}>
        {this.props.children}
      </Article>
    );
  }
}

export default ArticleContainer;
