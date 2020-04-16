import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import MonthList from '../MonthList/MonthList'
import EntryList from '../EntryList/EntryList'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: ['one', 'two', 'three', 'four']
        };
    };

    render() {
        return (
            <div className='home-page'>
                <nav role="navigation">Nav</nav>
                <header role="banner">
                    <h1>Reflect</h1>
                </header>

                {/* fetch with month id when clicked */}
                <section>
                    <MonthList />
                </section>
                {/* use entryList component */}
                <section>
                    <ul className="entry-list">
                        <EntryList entries={this.state.entries} />
                    </ul>
                </section>
                <Link to='/add'>
                    <button>New Entry</button>
                </Link>
            </div >
        );
    };
}

export default Home;
