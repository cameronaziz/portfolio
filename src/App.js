import React, { Component } from 'react';
import { Router } from 'react-static';
import { hot } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import client from './connectors/apollo';
import store from './connectors/redux';
import Content from './Content';
import './assets/css/app.css';
import { Helmet } from "react-helmet";

export class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <Helmet>
              <meta charSet="utf-8" />
              <title>Cameron Aziz - Javascript Engineer</title>
              <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Content />
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);
