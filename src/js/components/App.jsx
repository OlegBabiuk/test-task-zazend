import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Catalog from './Catalog';
import Footer from './Footer';
import PostViewer from './Post-viewer';

const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/" component={Catalog} />
      <Route path="/posts/:id?" component={PostViewer} />
      <Route path="/contact" render={() => (<p>contact</p>)} />
      <Route path="/about" render={() => (<p>about</p>)} />
    </Switch>
    <Footer />
  </div>
);

export default App;
