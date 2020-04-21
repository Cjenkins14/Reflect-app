import React, { Component } from 'react';
import './EntryList.css';
import { Link } from 'react-router-dom';


class EntryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: this.props.entries
        };
    };
    static defaultProps = {
        match: {
            params: {}
        }
    }

    componentDidMount() {

    }
    renderEntries = () => {
        return (
            this.state.entries.map(entry => {
                console.log(entry)
                return <li className='entry-list' key={entry.id}>
                    <Link to={`/entry/${entry.id}`}>
                        <button className='school-button'>
                            {entry.title}
                        </button>
                    </Link>
                </li>
            })
        )
    }

    render() {
        console.log(this.state.entries)
        const entries = this.state.entries
        console.log(entries === true)
        if (entries) {
            return this.state.entries.map(entry => {
                console.log(entry)
                return <li className='entry-list' key={entry.id}>
                    <Link to={`/entry/${entry.id}`}>
                        <button className='school-button'>
                            {entry.title}
                        </button>
                    </Link>
                </li>
            })
        } else {
            return <li>Please select a month</li>
        }

    };
};

export default EntryList;