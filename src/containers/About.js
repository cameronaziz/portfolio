import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import Close from '../components/Close';
import Article from '../components/Article';

class About extends Component {
  componentDidMount() {
    this.props.toggleArticle();
  }

  render() {
    const { history, toggleArticle } = this.props;
    return (
      <Article id="about" className="active" width="40rem" title="About Me">
        <span className="image main">
          <img src="/images/about.png" alt="" />
        </span>
        <p>
          I was born and raised in Los Angeles and I recently moved to New York.
          I enjoy exploring new restaurants and neighborhood stores. I am a huge
          sports fan, my aligences still are for LA teams, but enjoy going to games
          with friends and family, whomever may be playing.
        </p>
        <p>
          My passion for open source technologies has allowed me to take
          products and applications from conception to production. I am a
          trusted communicator between technical and non-technical staff which
          allows me to architect solutions that are both rapid to deploy and
          easily scalable. I am a senior frontend engineer specializing in
          Typescript, JavaScript, React and GraphQL. I have worked on devops,
          backend and frontend teams individually and I enjoy learning new web
          technologies in my free time.
          <br /><br />
          By the way, check out my <a href="/work">awesome work</a>.
        </p>
        <Close closeArticle={toggleArticle} history={history} />
      </Article>
    );
  }
}

About.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  toggleArticle: PropTypes.func.isRequired,
};

export default withSiteData(About);
