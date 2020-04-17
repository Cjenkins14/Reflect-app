import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import MonthList from '../MonthList/MonthList'
import EntryList from '../EntryList/EntryList'
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: this.props.entries
        };
    };
    static contextType = ReflectContext;

    render() {
        const entries = this.context.entries
        return (
            <div className='home-page'>
                <Nav history={this.props.history} />
                <header role="banner">
                    <h1>Reflect</h1>
                </header>

                {/* fetch with month id when clicked */}
                <section>
                    <MonthList />
                </section>

                <section>
                    <ul className="entry-list">
                        <EntryList entries={entries} />
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
