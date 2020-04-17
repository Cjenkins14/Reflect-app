import React, { Component } from 'react';
import './HabitTracker.css';
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'

// render with check or X for completed boolean
// add delete option in list

class HabitTracker extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            habits: []
        }
    };
    static contextType = ReflectContext;


    render() {
        const { habits } = this.context
        return (
            <div className='habit-tracker'>
                <Nav history={this.props.history} />
                <h1>Task Tracker</h1>
                <ul>
                    {habits.map(habit => {
                        return (
                            <li className='habit-list' key={habit.id}>
                                <input type='checkbox' id='habit-check' />
                                <label htmlFor='habit-check' className='strike'>{habit.habit}</label>
                            </li>
                        )
                    })}
                </ul>


                <section className='habit-entry'>
                    <label htmlFor='new-habit'>Add a Task:</label> <br />
                    <input type='text' id='new-habit' placeholder='New goals?' />
                    <button>Add</button>
                </section>
            </div >
        )

    }
}

export default HabitTracker;