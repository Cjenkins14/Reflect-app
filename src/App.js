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
      entries: [
        {
          title: 'entry1',
          id: 1,
          content: 'ipsum lorem',
          date: new Date()
        },
        {
          title: 'entry2',
          id: 2,
          content: 'ipsum lorem',
          date: new Date()
        },
        {
          title: 'entry3',
          id: 3,
          content: 'ipsum lorem',
          date: new Date()
        },
        {
          title: 'entry4',
          id: 4,
          content: 'ipsum lorem',
          date: new Date()
        },
        {
          title: 'entry5',
          id: 5,
          content: 'ipsum lorem',
          date: new Date()
        }],
      habits: [{ id: 1, habit: 'Walk' }, { id: 2, habit: 'Read' }, { id: 3, habit: 'Write' }, { id: 4, habit: 'Meditate' }]
    }
  };

  addHabit = (newHabit) => {

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
            exact path='/home/:id'
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
