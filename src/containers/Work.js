import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import Close from '../components/Close';
import Card from '../components/Card';
import { projects } from '../data';
import Article from '../components/Article';
import { ArticleTitle } from './styled';

class Work extends Component {
  render() {
    console.log(this.props);
    const { history, closeArticle } = this.props;
    return (
      <Article id="work" className="active">
        <ArticleTitle>Work</ArticleTitle>
        {/* <span className="image main">
          <img src="/images/img_avatar.png" alt="" />
        </span> */}
        {projects.map(project => <Card card={project} />)}
        <Close closeArticle={closeArticle} history={history} />
      </Article>
    );
  }
}

Work.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  closeArticle: PropTypes.func.isRequired,
};

export default withSiteData(Work);
