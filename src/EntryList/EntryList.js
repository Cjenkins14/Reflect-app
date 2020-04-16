import React, { Component } from 'react'
import './EntryList.css'

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
                return <li>{entry}</li>
            })
        )
    };
};

export default EntryList;