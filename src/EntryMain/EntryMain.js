import React, { Component } from 'react'
import './EntryMain.css'
import ReflectContext from '../ReflectContext'
import Nav from '../Nav/Nav'
import config from '../config'


class EntryMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            entry: []
        }
    };
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ReflectContext;


    // fetch entry byId
    componentDidMount() {
        let id = this.props.match.params.id
        fetch(`${config.API_ENDPOINT}/entry/${id}`)
            .then((entryRes) => {
                if (!entryRes.ok)
                    return entryRes.json().then(e => Promise.reject(e))
                return entryRes.json()
            })
            .then((entry) => {
                this.setState({
                    entry: entry
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const entry = this.state.entry
        const date = entry.date
        console.log(date)
        return (
            <div className='entry-main'>
                <Nav history={this.props.history} />
                <main role="main">
                    <header role="banner">
                        <h1>{entry.title}</h1>
                        <p>Date written: {date}</p>
                    </header>

                    <section>
                        Entry:
                        <p>{entry.content}</p>
                    </section>


                </main>
            </div>
        )
    };
};

export default EntryMain;