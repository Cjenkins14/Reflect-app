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
import months from './Months'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [],
      habits: [],
      months: months
    }
  };

  deleteHabit = habitId => {
    this.setState({
      habits: this.state.habits.filter(habit => habit.id !== Number(habitId))
    })
  }

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
    console.log('app mount')
    fetch(`${config.API_ENDPOINT}/habits`)
      .then((habitRes) => {
        if (!habitRes.ok)
          return habitRes.json().then(e => Promise.reject(e))
        return habitRes.json()
      })
      .then(habits => {
        console.log(habits)
        this.setState({
          habits: habits
        }, () => { console.log(this.state.habits) })
      })
      .catch(error => {
        console.log(error)
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
      months: this.state.months
    }
    return (
      <ReflectContext.Provider value={value}>
        <div className="app">
          {this.state.months.map(month => {
            return <Route
              exact path={`/${month.name}`}
              render={(routeProps) => <Home month={month} {...routeProps} />} />
          })}
          <Route
            exact path='/'
            component={Landing} />
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
