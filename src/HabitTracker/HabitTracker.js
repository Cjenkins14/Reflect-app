import React, { Component } from 'react';
import './HabitTracker.css';
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'

// render with check or X for completed boolean
// add delete option in list

class HabitTracker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            habits: []
        }
    };
    static contextType = ReflectContext;

    render() {
        const { habits } = this.context
        return (
            <div className='habit-tracker'>
                <Nav />
                <h1>Habit Tracker</h1>
                <ul className='habit-list'>
                    {habits.map(habit => {
                        return <li>
                            {habit}
                        </li>
                    })}
                </ul>

                <section className='habit-entry'>
                    <label htmlFor='new-habit'>Add a habit:</label> <br />
                    <input type='text' id='new-habit' placeholder='New goals?' />
                    <button>Add</button>
                </section>
            </div >
        )

    }
}

export default HabitTracker;