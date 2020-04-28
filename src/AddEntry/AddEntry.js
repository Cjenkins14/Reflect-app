import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import config from '../config';
import ReflectContext from '../ReflectContext';
import './AddEntry.css'

class AddEntry extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    };
    static contextType = ReflectContext;

    handleSubmit = e => {
        e.preventDefault();
        const date = e.target['entry-date'].value
        const newEntry = {
            title: e.target['entry-title'].value,
            content: e.target['entry-text'].value,
            date: date,
            monthid: ((new Date(date).getMonth()) + 1)
        };
        console.log(newEntry)
        fetch(`${config.API_ENDPOINT}/entry`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newEntry)
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        }).then(entry => {
            this.context.addEntry(entry)
            this.props.history.push(`/entry/${entry.id}`)
        });
    };

    createDefaultDate() {
        var date = new Date();
        var min_date = date.toISOString().slice(0, 10)
        return min_date
    };

    render() {
        return (
            <div className='add=page'>
                <Nav history={this.props.history} />
                <main role="main">
                    <header>
                        <h1>New Entry</h1>
                    </header>
                    <section>
                        <form
                            onSubmit={this.handleSubmit}
                            id="record-entry"
                        >
                            <ul className='input-list'>
                                <li>
                                    <label htmlFor='entry-date' className='date'>Date:</label>
                                    <input type='date' id='entry-date' defaultValue={this.createDefaultDate()} required></input>
                                </li>
                                <li >
                                    <label htmlFor="entry-title" className='title'>Title:</label>
                                    <input type="text" id="entry-title" required />
                                </li>
                                <li >
                                    <label htmlFor="entry-text" className='entry'>Entry:</label>
                                    <textarea id="entry-text" rows="15" required></textarea>
                                </li>
                            </ul>

                            <button type="submit" className='submit-button'>Submit</button>
                            <button type="reset" className='reset-button'>Reset</button>
                            {/* add habitlist as a daily reminder */}
                        </form>
                    </section>
                </main>
            </div>
        )
    };
};

export default AddEntry;