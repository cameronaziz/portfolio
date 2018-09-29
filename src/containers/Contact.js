import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import Close from '../components/Close';
import Article from '../components/Article';
import { ArticleTitle } from './styled';

class Contact extends Component {
  render() {
    const { history, closeArticle } = this.props;
    return (
      <Article id="contact" className="active">
        <ArticleTitle>Contact</ArticleTitle>
        <form method="post" action="#">
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="primary" /></li>
            <li><input type="reset" value="Reset" /></li>
            <li>
              <ul className="icons">
                <li><a href="#" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
              </ul>
            </li>
          </ul>
        </form>

        <Close closeArticle={closeArticle} history={history} />
      </Article>
    );
  }
}

Contact.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  closeArticle: PropTypes.func.isRequired,
};

export default withSiteData(Contact);
