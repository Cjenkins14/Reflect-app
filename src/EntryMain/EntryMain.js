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
        deleteEntry: () => { },
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

    handleDelete = e => {
        e.preventDefault();
        const entryId = this.props.match.params.id;
        fetch(`${config.API_ENDPOINT}/entry/${entryId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res
            })
            .then(() => {
                this.context.deleteEntry(entryId)
                this.props.deleteEntry(entryId)
                this.props.history.goBack()
            })
            .catch(error => {
                console.error({
                    error
                })
            })
    }


    render() {
        const entry = this.state.entry
        const date = entry.date
        return (
            <div className='entry-main'>
                <Nav history={this.props.history} />
                <main role="main">
                    <header role="banner">
                        <h1>{entry.title}</h1>
                        <p>Date written: {new Date(date).toDateString()}</p>
                    </header>

                    <section>
                        Entry:
                        <p>{entry.content}</p>
                    </section>
                    <button onClick={this.handleDelete} className='del-button'>Delete</button>

                </main>
            </div>
        )
    };
};

export default EntryMain;