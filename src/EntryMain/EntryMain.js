import React, { Component } from 'react'
import './EntryMain.css'
import ReflectContext from '../ReflectContext'
import HabitTracker from '../HabitTracker/HabitTracker'
class EntryMain extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
    static contextType = ReflectContext;
    // fetch entry byId
    render() {
        const { entries, habits } = this.context
        console.log(entries, habits)
        return (
            <div className='entry-main'>
                <nav role="navigation">Nav</nav>
                <main role="main">
                    <header role="banner">
                        <h1>{entries.title}</h1>
                    </header>

                    <section>
                        Entry:
                        <p>{entries.content}</p>
                    </section>

                    <section>
                        {HabitTracker(habits)}
                    </section>
                </main>
            </div>
        )
    };
};

export default EntryMain;