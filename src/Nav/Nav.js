import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'


class Nav extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    goBack = () => {
        this.props.history.goBack()
    };


    myFunction = () => {
        let x = this.myRef.current;
        console.log(x)
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
        return (
            <div className="topnav" id="myTopnav" ref={this.myRef}>
                <Link to="/january/01" >Entries</Link>
                <Link to="/add">New Entry</Link>
                <Link to="/habits">Task Tracker</Link>
                <Link to="/">Home</Link>
                <button className="hamburger-button" onClick={this.myFunction}>
                    <i className="fa fa-bars"></i>
                </button>
            </div>
        )
    }
}

export default Nav;