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
              <meta name="theme-color" content="#ffffff"></meta>
            </Helmet>
            <Content />
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default hot(module)(App);
