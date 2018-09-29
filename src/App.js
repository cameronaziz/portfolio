import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-static';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import client from './connectors/apollo';
import store from './connectors/redux';
import * as Containers from './containers';

import './assets/css/app.css';

export class App extends Component {
  state = { articleOpen: false }

  componentDidMount() {
    const { pathname } = window.location;
    if (pathname !== '/') {
      this.toggleArticle();
    }
  }

  toggleArticle = () => {
    const { articleOpen } = this.state;
    this.setState({
      articleOpen: !articleOpen,
    });
  }

  render() {
    const { articleOpen } = this.state;
    const mainStyle = articleOpen ? undefined : { display: 'none' };
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <div id="wrapper">
              <Header openArticle={this.toggleArticle} articleOpen={articleOpen} />
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
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);
