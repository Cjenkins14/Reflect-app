import React, { Component } from 'react'
import './EntryMain.css'

class EntryMain extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    render() {
        return (
            <div className='entry-main'>
                <nav role="navigation">Nav</nav>
                <main role="main">
                    <header role="banner">
                        <h1>Entry 1</h1>
                    </header>

                    <section>
                        Entry:
            <p>Some text for a journal entry</p>
                    </section>

                    <section>
                        Habit Tracker:
                <ul class="habit-list">
                            <li>Habit 1</li>
                            <li>Habit 2</li>
                            <li>Habit 3</li>
                        </ul>
                    </section>
                </main>
            </div>
        )
    };
};

export default EntryMain;