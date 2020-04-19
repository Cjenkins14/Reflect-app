import React, { Component } from 'react';
import './HabitTracker.css';
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'
import config from '../config'

// render with check or X for completed boolean
// add delete option in list

class HabitTracker extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.formRef = React.createRef()
        this.state = {
            habits: []
        }
    };
    static defaultProps = {
        history: {
            push: () => { }
        }
    }
    static contextType = ReflectContext;

    clearForm = () => {
        this.formRef.reset();
    }

    handleSubmit = e => {
        e.preventDefault();
        const newHabit = {
            habit: e.target['new-habit'].value
        };
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
    }

    handleDelete = e => {
        console.log(this.myRef['key'].value)
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
        const habits = this.state.habits
        return (
            <div className='habit-tracker'>
                <Nav history={this.props.history} />
                <h1>Task Tracker</h1>
                <ul>
                    {habits.map(habit => {
                        return (
                            <li className='habit-list' id='haibt-id' key={habit.id} ref={this.myRef}>
                                <input type='checkbox' id='habit-check' />
                                <label htmlFor='habit-check' className='strike'>{habit.habit}</label>
                                <button onClick={this.handleDelete}>X</button>
                            </li>
                        )
                    })}
                </ul>


                <form ref={this.formRef} className='habit-entry' onSubmit={this.handleSubmit}>
                    <label htmlFor='new-habit'>Add a Task:</label> <br />
                    <input type='text' id='new-habit' placeholder='New goals?' />
                    <button>Add</button>
                </form>
            </div >
        )

    }
}

export default HabitTracker;