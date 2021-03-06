import React, { Component } from 'react';
import './EntryList.css';
import { Link } from 'react-router-dom';
import config from '../config'

class EntryList extends Component {
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

    componentDidMount() {
        const id = this.props.id
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
            });
    };

    renderEntries = () => {
        return (
            this.state.entries.map(entry => {
                return <li className='entry-item' key={entry.id}>
                    <Link to={`/entry/${entry.id}`}>
                        <button className='entry-button'>
                            {entry.title}
                        </button>
                    </Link>
                </li>
            })
        );
    };

    render() {
        const entries = this.state.entries;

        if (entries.length) {
            return <ul className='entry-list'>{this.renderEntries()}</ul>

        } else {
            return (
                <div className='no-entry'>
                    <p>No entries found</p>
                </div>
            )
        }

    };
};

export default EntryList;