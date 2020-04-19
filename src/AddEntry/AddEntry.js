import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import config from '../config';
import ReflectContext from '../ReflectContext';

class AddEntry extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    };
    static contextType = ReflectContext;

    handleSubmit = e => {
        e.preventDefault();
        const newEntry = {
            title: e.target['entry-title'].value,
            content: e.target['entry-text'].value,
            monthid: ((new Date().getMonth()) + 1)
        };
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
                            id="record-entry">
                            <div className="form-section">
                                <label htmlFor="entry-title">Title:</label>
                                <input type="text" id="entry-title" defaultValue="new date" required />
                            </div>
                            <div className="htmlForm-section">
                                <label htmlFor="entry-text">Entry:</label>
                                <textarea id="entry-text" rows="15" required></textarea>
                            </div>

                            <button type="submit">Submit</button>
                            <button type="reset">Reset</button>
                            {/* add habitlist as a daily reminder */}
                        </form>
                    </section>
                </main>
            </div>
        )
    };
};

export default AddEntry;