import React, { Component } from 'react'

class AddEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    render() {
        return (
            <div className='add=page'>
                <nav role="navigation">Nav</nav>
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

                            <div className="form-section">
                                <p>Habit Tracker:</p>

                                <input type="checkbox" name="habits" value="false" className="habit-list" />
                                <label htmlFor="habit-type">
                                    <span>Habit 1</span>

                                </label>

                                <label htmlFor="new-habit">Add a habit</label> <br />
                                <input type="text" id="new-habit" />
                                <button>Add</button>
                            </div>



                            <button type="submit">Submit</button>
                            <button type="reset">Reset</button>
                        </form>
                    </section>
                </main>
            </div>
        )
    };
};

export default AddEntry;