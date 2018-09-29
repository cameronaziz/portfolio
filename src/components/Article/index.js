import React, { Component } from 'react';
import { Article } from './Styled';
import ArticleTitle from './ArticleTitle';

class ArticleComponent extends Component {
  render() {
    const { width, children, title } = this.props;
    return (
      <Article className="article-container" width={this.props.width}>
        <ArticleTitle>{title}</ArticleTitle>
        {this.props.children}
      </Article>
    );
  }
}

export default ArticleComponent;
