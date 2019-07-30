import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withSiteData } from 'react-static';
import Close from '../components/Close';
import Article from '../components/Article';
import { inputContact } from '../connectors/pounchdb'

const defaultState = { name: '', email: '', message: '' };

class Contact extends Component {
  state = defaultState;

  updateField = (field, { value }) => {
    this.setState((prevState) => {
      prevState[field] = value;
      return prevState;
    });
  }

  submitForm = () => {
    const { closeArticle, history, env } = this.props;
    closeArticle(this.state.name);
    inputContact(this.state, env);
    this.setState(defaultState);
    history.push('/');
  }

  render() {
    const { name, email, message } = this.state;
    const { history, closeArticle } = this.props;
    return (
      <Article id="contact" className="active" width="40rem" title="Say Hello">
        {/* <form>
          <div className="fields">
            <div className="field half">
              <label htmlFor="name">Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => this.updateField('name', event.target)}
                />
              </label>
            </div>
            <div className="field half">
              <label htmlFor="email">Email
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => this.updateField('email', event.target)}
                />
              </label>
            </div>
            <div className="field">
              <label htmlFor="message">Message
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(event) => this.updateField('message', event.target)}
                />
              </label>
            </div>
          </div> */}
          {/* <ul>
            <li><input type="button" value="Send Message" className="primary button" onClick={this.submitForm} /></li>
            <li> */}
          <div className="icons">
            <div>
              <a href="mailto:cameronaziz@me.com" className="icon fa-at"><span className="label">Email</span></a>
            </div>
            <div>
              <a href="https://github.com/cameronaziz" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a>
            </div>
          </div>
            {/* </li>
          </ul> */}
        {/* </form> */}
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
