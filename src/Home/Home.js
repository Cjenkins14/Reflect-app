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
        const id = this.props.month.id
        fetch(`${config.API_ENDPOINT}/home/${id}`)
            .then((entryRes) => {
                if (!entryRes.ok)
                    return entryRes.json().then(e => Promise.reject(e))
                return entryRes.json()
            })
            .then((entries) => {
                this.setState({
                    entries: entries
                }, () => { console.log() })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const id = this.props.month.id;
        const entries = this.state.entries;
        return (
            <div className='home-page' >
                <Nav history={this.props.history} />
                <header role="banner">
                    <h1>Reflect</h1>
                </header>

                {/* fetch with month id when clicked */}
                <section className='month-list'>
                    <MonthList />
                </section >

                <section className='flex-list'>
                    <EntryList id={id} />

                    <Link to='/add'>
                        <button className='entry-button'>New Entry</button>
                    </Link>
                </section>
            </div >
        );
    };
}

export default Home;
