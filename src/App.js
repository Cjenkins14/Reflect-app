import React, { Component } from 'react';
// import './App.css';
import { Route } from 'react-router';
import Landing from './Landing/Landing';
import Home from './Home/Home'
import AddEntry from './AddEntry/AddEntry';
import EntryMain from './EntryMain/EntryMain'
import ReflectContext from './ReflectContext'
import HabitTracker from './HabitTracker/HabitTracker'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [],
      habits: []
    }
  };

  addHabit = (newHabit) => {
    this.setState({
      habits: [
        ...this.state.habits,
        newHabit
      ]
    })
  }
  addEntry = (newEntry) => {
    this.setState({
      entries: [
        ...this.state.entries,
        newEntry
      ]
    })
  }
  deleteEntry = (entry) => {

  }
  handleEntryUpdate = (update) => {

  }



  render() {
    const value = {
      entries: this.state.entries,
      habits: this.state.habits,
      addHabit: this.addHabit,
      deleteHabit: this.deleteHabit,
      addEntry: this.addEntry,
      deleteEntry: this.deleteEntry,
      handleEntryUpdate: this.handleEntryUpdate
    }
    return (
      <ReflectContext.Provider value={value}>
        <div className="app">
          <Route
            exact path='/'
            component={Landing} />
          <Route
            exact path='/Jan/:id'
            component={Home} />
          <Route
            exact path='/Feb/:id'
            component={Home} />
          <Route
            exact path='/Mar/:id'
            component={Home} />
          <Route
            exact path='/Apr/:id'
            component={Home} />
          <Route
            exact path='/May/:id'
            component={Home} />
          <Route
            exact path='/Jun/:id'
            component={Home} />
          <Route
            exact path='/Jul/:id'
            component={Home} />
          <Route
            exact path='/Aug/:id'
            component={Home} />
          <Route
            exact path='/Sep/:id'
            component={Home} />
          <Route
            exact path='/Oct/:id'
            component={Home} />
          <Route
            exact path='/Nov/:id'
            component={Home} />
          <Route
            exact path='/Nov/:id'
            component={Home} />
          <Route
            exact path='/Dec/:id'
            component={Home} />
          <Route
            path='/add'
            component={AddEntry} />
          <Route
            path='/entry/:id'
            component={EntryMain} />
          <Route
            path='/habits'
            component={HabitTracker} />
        </div>
      </ReflectContext.Provider>
    );
  }

};

export default App;
