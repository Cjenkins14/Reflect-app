import React, { Component } from 'react'
import Nav from '../Nav/Nav'


class AddEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
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
                        <form id="record-entry">
                            <div className="form-section">
                                <label htmlFor="entry-title">Title:</label>
                                <input type="text" name="entry-title" defaultValue="new date" required />
                            </div>
                            <div className="htmlForm-section">
                                <label htmlFor="entry-text">Entry:</label>
                                <textarea name="entry-summary" rows="15" required></textarea>
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