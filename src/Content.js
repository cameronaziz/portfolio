import React, { Component, createRef } from 'react';
import { Route, Switch, withRouter } from 'react-static';
import { Helmet } from 'react-helmet';
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
        <Helmet>
          <meta charSet="utf-8" />
          <title>Cameron Aziz - Javascript Engineer</title>
          <link rel="apple-touch-icon" sizes="57x57" href="/images/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/images/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/images/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/images/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/images/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/images/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/images/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="manifest" href="/images/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        </Helmet>
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
