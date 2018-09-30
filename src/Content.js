import React, { Component, createRef } from 'react';
import { Route, Switch, withRouter } from 'react-static';
import Header from './components/Header';
import Footer from './components/Footer';
import * as Containers from './containers';

class Content extends Component {
  constructor(props) {
    super(props);
    if (this.props.articleOpen) {
      this.createEscapeListener();
    }
    this.container = createRef();
    this.state = { articleOpen: false, introTitle: '' };
  }

  componentDidMount() {
    const { pathname } = window.location;
    if (pathname !== '/') {
      this.toggleArticle();
    }
    this.changer = setTimeout(() => {
      const logoTitle = "Hi. I'm Cameron Aziz.";
      let randomTitle = '';
      const possible = '-+*/|aspMPM123-9AD}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
      for (let i = 0; i < logoTitle.length + 1; i += 1) {
        randomTitle = logoTitle.substr(0, i);
        for (let j = i; j < logoTitle.length; j += 1) {
          randomTitle += possible.charAt(
            Math.floor(Math.random() * possible.length),
          );
        }
        this.setRandomTitle(i, randomTitle);
        randomTitle = '';
      }
    }, 500);
  }

  componentWillUnmount = () => {
    clearTimeout(this.changer);
    clearTimeout(this.generator);
  };

  setRandomTitle = (i, introTitle) => {
    this.generator = setTimeout(() => {
      this.setState({
        introTitle,
      });
    }, i * 130);
  }

  createEscapeListener = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  destoryEscapeListener = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  toggleArticle = (contactName) => {
    if (typeof(contactName) === 'string') {
      this.setNewTitle(contactName);
    }
    const { articleOpen } = this.state;
    this.setState({
      articleOpen: !articleOpen,
    });
    if (articleOpen) {
      this.props.history.push('/');
      this.destoryEscapeListener();
    } else {
      this.createEscapeListener();
    }
  }

  setNewTitle = (contactName) => {
    this.setState({
      introTitle: `Well hello, ${contactName}. I'll be in touch.`,
    });
  }


  handleKeyDown = (event) => {
    if (event.keyCode === 27 && this.state.articleOpen) {
      this.toggleArticle();
    }
  }

  handleOutsideClick = (event) => {
    if (event.target === this.container.current && this.state.articleOpen) {
      this.toggleArticle();
    }
  }

  render() {
    const { articleOpen, introTitle } = this.state;
    const mainStyle = articleOpen ? undefined : { display: 'none' };
    return (
      <div
        ref={this.container}
        role="button"
        tabIndex={-1}
        onClick={this.handleOutsideClick}
        onKeyDown={this.handleOutsideClick}
        id="wrapper"
      >
        <Header introTitle={introTitle} openArticle={this.toggleArticle} articleOpen={articleOpen} />
        <div id="main" style={mainStyle}>
          <Switch>
            <Route exact path="/" />
            <Route path="/about" render={(props) => <Containers.About {...props} closeArticle={this.toggleArticle} />} />
            <Route path="/contact" render={(props) => <Containers.Contact {...props} closeArticle={this.toggleArticle} />} />
            <Route path="/work" render={(props) => <Containers.Work {...props} closeArticle={this.toggleArticle} />} />
            <Route render={(props) => <Containers.FourOhFour {...props} />} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Content);
