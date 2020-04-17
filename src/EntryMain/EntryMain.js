import React, { Component } from 'react'
import './EntryMain.css'
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'
class EntryMain extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };
    static contextType = ReflectContext;
    // fetch entry byId
    habitList = (habits) => {
        return (
            <ul className='habit-list'>
                {habits.map(habit => {
                    return <li>
                        {habit}
                    </li>
                })}
            </ul>
        )
    }
    render() {
        const { entries } = this.context
        console.log(this.props.match.params.id)
        const thisEntry = entries.find(entry => entry.id === Number(this.props.match.params.id))
        return (
            <div className='entry-main'>
                <Nav history={this.props.history} />
                <main role="main">
                    <header role="banner">
                        <h1>{thisEntry.title}</h1>
                    </header>

                    <section>
                        Entry:
                        <p>{thisEntry.content}</p>
                    </section>


                </main>
            </div>
        )
    };
};

export default EntryMain;