import axios from 'axios';
import React, { Component } from 'react';
import dotenv from 'dotenv';

dotenv.config();

export default {
  getSiteData: () => ({
    env: process.env,
    title: 'Cameron Aziz - Javascript Engineer - Los Angeles, CA',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return [
      {
        path: '/',
      },
      {
        path: '/about',
      },
      {
        path: '/contact',
      },
      {
        path: '/work',
        component: 'src/containers/Work',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      // {
      //   is404: true,
      //   component: 'src/containers/404',
      // },
    ];
  },
  Document: class CustomHtml extends Component {
    render() {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props;
      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
            <link rel="stylesheet" href="/assets/css/main.css" />
            <noscript><link rel="stylesheet" href="/assets/css/noscript.css" /></noscript>
          </Head>
          <Body className="is-preload">
            {children}
            <canvas className="background" />
            {/* <canvas id="fog" /> */}
            <div id="bg" />
            <script src="/assets/js/jquery.min.js" />
            <script src="/assets/js/browser.min.js" />
            <script src="/assets/js/breakpoints.min.js" />
            <script src="/assets/js/util.js" />
            <script src="/assets/js/main.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" />
            {/* <script src="/assets/js/fog.js" /> */}
            <script src="/assets/js/particles.js" />
            </Body>
        </Html>
      );
    }
  },
  // webpack: (config, { defaultLoaders }) => {
  //   config.module.rules = [
  //     {
  //       oneOf: [
  //         {
  //           test: /\.json$/,
  //           use: [{ loader: 'json-loader' }],
  //         },
  //         defaultLoaders.jsLoader,
  //         defaultLoaders.cssLoader,
  //         defaultLoaders.fileLoader,
  //       ],
  //     },
  //   ]
  //   return config
  // },
};
