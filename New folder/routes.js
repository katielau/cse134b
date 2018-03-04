import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import artworkResultsPage from './components/artworkResults/artworkResultsPage';
import artistResultsPage from './components/artistResults/artistResultsPage';
import loginPage from './components/login/loginPage';
import msgPage from './components/msg/msgPage';
import artistPage from './components/artist/artistPage';
import home2Page from './components/home2/home2Page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="artworkResults" component={artworkResultsPage} />
    <Route path="artistResults" component={artistResultsPage} />
    <Route path="login" component={loginPage} />
    <Route path="msg" component={msgPage} />
    <Route path="artist" component={artistPage} />
    <Route path="home2" component={home2Page} />
  </Route>
);
