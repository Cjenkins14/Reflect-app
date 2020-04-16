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

    render() {
        return (
            this.state.entries.map(entry => {
                return <li className='entry-list' key={entry.id}>
                    <Link to={`/entry/${entry.id}`}>
                        <button className='school-button'>
                            {entry.title}
                        </button>
                    </Link>
                </li>
            })
        )
    };
};

export default EntryList;