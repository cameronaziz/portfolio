import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import Close from '../components/Close';
import Card from '../components/Card';
import { projects } from '../data';
import Article from '../components/Article';

class Work extends Component {
  render() {
    const { history, closeArticle } = this.props;
    return (
      <Article id="work" className="active" title="My Work">
        {projects.map(project => <Card key={project.key} card={project} />)}
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
