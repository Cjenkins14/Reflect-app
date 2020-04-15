import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Landing from './Landing/Landing';
import Home from './Home/Home'
import AddEntry from './AddEntry/AddEntry';
import EntryMain from './EntryMain/EntryMain'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: []
    }
  }
  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          component={Landing} />
        <Route
          exact path='/home'
          component={Home} />
        <Route
          path='/add'
          component={AddEntry} />
        <Route
          path='/entry'
          component={EntryMain} />
      </div>
    )
  }

};

export default App;
