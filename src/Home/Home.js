import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import MonthList from '../MonthList/MonthList'
import EntryList from '../EntryList/EntryList'
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'
import config from '../config'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: []
        };
    };
    static defaultProps = {
        match: {
            params: {}
        }
    };
    static contextType = ReflectContext;

    // filterMonth = (entries, id) => {
    // console.log(entries)
    // let filteredEntries = entries.filter(entry => entry.monthid === Number(id))
    // console.log(filteredEntries)
    // return filteredEntries
    // }

    componentDidMount() {
        // const id = this.props.match.params.id
        // fetch(`${config.API_ENDPOINT}/home/${id}`)
        // .then((entryRes) => {
        // if (!entryRes.ok)
        // return entryRes.json().then(e => Promise.reject(e))
        // return entryRes.json()
        // })
        // .then((entries) => {
        // this.setState({
        // entries: entries
        // }, () => { console.log(this.state.entries) })
        // })
        // .catch(error => {
        // console.log(error)
        // })
    }


    render() {
        const id = this.props.match.params.id;
        const entries = this.state.entries;
        console.log(entries === true)
        return (
            <div className='home-page' >
                <Nav history={this.props.history} />
                <header role="banner">
                    <h1>Reflect</h1>
                </header>

                {/* fetch with month id when clicked */}
                <section>
                    <MonthList />
                </section >

                <section>
                    <ul className="entry-list">
                        {(entries
                            ? <EntryList entries={entries} id={id} />
                            : <li>Please select</li>)}
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
