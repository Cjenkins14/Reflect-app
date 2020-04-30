import React, { Component } from 'react';
import './HabitTracker.css';
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'
import config from '../config'




class HabitTracker extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()

    };
    static defaultProps = {
        onDeleteHabit: () => { },
        history: {
            push: () => { }
        }
    }
    static contextType = ReflectContext;

    handleSubmit = e => {
        e.preventDefault();
        const newHabit = {
            habit: e.target['new-habit'].value
        };
        e.target.reset();
        fetch(`${config.API_ENDPOINT}/habits`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newHabit)
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        }).then(habit => {
            this.context.addHabit(habit)
            this.props.history.push('/habits')
        })
            .catch(error => {
                console.error({
                    error
                })
            })
    }



    handleDelete = e => {
        e.preventDefault();
        const habitId = e.target.parentElement.getAttribute('newid');
        fetch(`${config.API_ENDPOINT}/habits/${habitId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(delRes => {
                if (!delRes.ok)
                    return delRes.json().then(e => Promise.reject(e))
                return delRes
            })
            .then(() => {
                this.context.deleteHabit(habitId)
            })
            .catch(error => {
                console.error({
                    error
                })
            })
    }



    render() {
        const habits = this.context.habits
        if (habits.length) {
            return (
                <div className='habit-tracker'>
                    <Nav history={this.props.history} />
                    <header>
                        <h1>Task Tracker</h1>
                    </header>
                    <div className='task-div'>
                        <ul className='task-list'>
                            {habits.map(habit => {
                                return (
                                    <li className='habit-list' id='habit-id' newid={habit.id} key={habit.id} ref={this.myRef}>
                                        <input type='checkbox' id='habit-check' />
                                        <label htmlFor='habit-check' className='strike'>{habit.habit}</label>
                                        <button onClick={this.handleDelete} className='task-delete'>&#10006;</button>
                                    </li>
                                )
                            })}
                        </ul>


                        <form ref={this.formRef} className='habit-entry' onSubmit={this.handleSubmit}>
                            <label htmlFor='new-habit'>Add a Task:</label> <br />
                            <input type='text' id='new-habit' placeholder='New goals?' /> <br />
                            <button className='add-button'>Add</button>
                        </form>
                    </div>
                </div >
            )
        } else {
            return (
                <div className='habit-tracker'>
                    <Nav history={this.props.history} />
                    <h1>Task Tracker</h1>
                    <p>No tasks to display</p>
                    <form className='habit-entry' onSubmit={this.handleSubmit}>
                        <label htmlFor='new-habit'>Add a Task:</label> <br />
                        <input type='text' id='new-habit' placeholder='New goals?' />
                        <button>Add</button>
                    </form>
                </div>
            )
        }
    }
}

export default HabitTracker;