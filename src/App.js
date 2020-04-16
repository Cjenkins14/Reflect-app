import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import Landing from './Landing/Landing';
import Home from './Home/Home'
import AddEntry from './AddEntry/AddEntry';
import EntryMain from './EntryMain/EntryMain'
import ReflectContext from './ReflectContext'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [
        {
          title: 'entry1',
          id: 1,
          content: 'ipsum lorem'
        },
        {
          title: 'entry2',
          id: 2,
          content: 'ipsum lorem'
        },
        {
          title: 'entry3',
          id: 3,
          content: 'ipsum lorem'
        },
        {
          title: 'entry4',
          id: 4,
          content: 'ipsum lorem'
        },
        {
          title: 'entry5',
          id: 5,
          content: 'ipsum lorem'
        }],
      habits: ['Walk', 'Read', 'Write', 'Meditate']
    }
  };

  addHabit = (newHabit) => {

  }
  addEntry = (newEntry) => {

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
            exact path='/home'
            component={Home} />
          <Route
            path='/add'
            component={AddEntry} />
          <Route
            path='/entry/:id'
            component={EntryMain} />
        </div>
      </ReflectContext.Provider>
    );
  }

};

export default App;
