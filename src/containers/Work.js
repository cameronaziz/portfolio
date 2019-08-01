import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import Close from '../components/Close';
import Card from '../components/Card';
import { projects } from '../data';
import Article from '../components/Article';

class Work extends Component {
  componentDidMount() {
    this.props.toggleArticle();
  }

  render() {
    const { history, toggleArticle } = this.props;
    return (
      <Article id="work" className="active" title="My Work">
        {projects.map(project => <Card key={project.key} card={project} />)}
        <Close closeArticle={toggleArticle} history={history} />
      </Article>
    );
  }
}

Work.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  toggleArticle: PropTypes.func.isRequired,
};

export default withSiteData(Work);
