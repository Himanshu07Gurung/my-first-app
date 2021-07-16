import React, { Component, Suspense, lazy } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import Header from './shared/Header';
import history from './history';

const Posts = lazy(() => import("./components/Posts/Posts"));
const Post = lazy(() => import("./components/Posts/Post"));
const NewPost = lazy(() => import("./components/Posts/New"));
const Users = lazy(() => import("./components/Users"));
const Sample = lazy(() => import("./components/Sample"));
const About = lazy(() => import("./components/About"));

class Routes extends Component {
  render() {
    return (
      <div className="w3-container">
        <Router history={history}>
          <Header />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/:id" component={Post} />
              <Route path="/new-post" component={NewPost} />
              <Route path="/edit-post/:id" component={NewPost} />
              <Route path="/users" component={Users} />
              <Route path="/sample" component={Sample} />
              <Route path="/about" component={About} />
            </Suspense>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Routes;