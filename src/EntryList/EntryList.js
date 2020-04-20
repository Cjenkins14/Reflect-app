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

    render() {
        console.log(this.state.entries)
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
    };
};

export default EntryList;