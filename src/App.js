import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/post/:id' component={PostDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
