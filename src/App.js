import React, { Component } from 'react';
// import './App.css';
import { Route } from 'react-router';
import Landing from './Landing/Landing';
import Home from './Home/Home'
import AddEntry from './AddEntry/AddEntry';
import EntryMain from './EntryMain/EntryMain'
import ReflectContext from './ReflectContext'
import HabitTracker from './HabitTracker/HabitTracker'
import config from './config'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [],
      habits: [],
      months: []
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
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/home`)
      .then((homeRes) => {
        if (!homeRes.ok)
          return homeRes.json().then(e => Promise.reject(e))
        return homeRes.json()
      })
      .then((months) => {
        this.setState({
          months: months
        }, () => { console.log(this.state.months) })
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderMonthRoutes() {
    this.state.months.map(month => {
      return (
        <Route
          exact path={`/${month.name}/:id`}
          component={Home} />
      )
    })
  }



  render() {
    const value = {
      entries: this.state.entries,
      habits: this.state.habits,
      addHabit: this.addHabit,
      deleteHabit: this.deleteHabit,
      addEntry: this.addEntry,
      deleteEntry: this.deleteEntry,
    }
    return (
      <ReflectContext.Provider value={value}>
        <div className="app">
          <Route
            exact path='/'
            component={Landing} />
          <Route
            exact path='/January/:id'
            component={Home} />
          <Route
            exact path='/February/:id'
            component={Home} />
          <Route
            exact path='/March/:id'
            component={Home} />
          <Route
            exact path='/April/:id'
            component={Home} />
          <Route
            exact path='/May/:id'
            component={Home} />
          <Route
            exact path='/June/:id'
            component={Home} />
          <Route
            exact path='/July/:id'
            component={Home} />
          <Route
            exact path='/August/:id'
            component={Home} />
          <Route
            exact path='/September/:id'
            component={Home} />
          <Route
            exact path='/October/:id'
            component={Home} />
          <Route
            exact path='/November/:id'
            component={Home} />
          <Route
            exact path='/December/:id'
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
