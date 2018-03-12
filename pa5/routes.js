import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ReviewsPage from './components/review/ReviewsPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import ManageReviewPage from './components/review/ManageReviewPage'; //eslint-disable-line import/no-named-as-default
import artworkResultsPage from './components/artworkResults/artworkResultsPage';
import artistResultsPage from './components/artistResults/artistResultsPage';
import loginPage from './components/login/loginPage';
import msgPage from './components/msg/msgPage';
import home2Page from './components/home2/home2Page';
import ArtistPage from './components/artist/ArtistPage';
import Cat1Page from './components/artist/Cat1Page';
import AnimalHitsPage from './components/artist/AnimalHitsPage';
import ArtistEditPage from './components/artist/ArtistEditPage';
import ArtistConfirmPage from './components/artist/ArtistConfirmPage';



export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="review" component={ReviewsPage} />
    <Route path="course" component={ManageReviewPage} />
    <Route path="course/:id" component={ManageReviewPage} />
    <Route path="artworkResults" component={artworkResultsPage} />
    <Route path="artistResults" component={artistResultsPage} />
    <Route path="login" component={loginPage} />
    <Route path="msg" component={msgPage} />
    <Route path="home2" component={home2Page} />
    <Route path="artist" component={ArtistPage} />
    <Route path="artistEdit" component={ArtistEditPage} />
    <Route path="artistConfirm" component={ArtistConfirmPage} />
    <Route path="animalHits" component={AnimalHitsPage} />
    <Route path="cat1" component={Cat1Page} />

  </Route>
);
