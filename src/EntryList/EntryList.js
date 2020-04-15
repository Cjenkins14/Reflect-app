import React, { Component } from 'react'
import './EntryList.css'

class EntryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entries: ['one', 'two', 'three', 'four', 'five']
        };
    };

    render() {
        return (
            this.state.entries.map(entry => {
                return <li>{entry}</li>
            })
        )
    };
};

export default EntryList;