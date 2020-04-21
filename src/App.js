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
      months: [
        {
          name: 'January',
          id: '01'
        },
        {
          name: 'February',
          id: '02'
        },
        {
          name: 'March',
          id: '03'
        },
        {
          name: 'April',
          id: '04'
        },
        {
          name: 'May',
          id: '05'
        },
        {
          name: 'June',
          id: '06'
        },
        {
          name: 'July',
          id: '07'
        },
        {
          name: 'August',
          id: '08'
        },
        {
          name: 'September',
          id: '09'
        },
        {
          name: 'October',
          id: '10'
        },
        {
          name: 'November',
          id: '11'
        },
        {
          name: 'December',
          id: '12'
        }
      ]
    }
  };

  deleteHabit = habitId => {
    this.setState({
      habits: this.state.habits.filter(habit => habit.id !== habitId)
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
              exact path={`/${month.name}/:id`}
              component={Home} />
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
