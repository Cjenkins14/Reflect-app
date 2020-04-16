import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'


class Nav extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

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
                <Link to="/home" className="active">Home</Link>
                <Link to="/add">New Entry</Link>
                <Link to="/habits">Task Tracker</Link>
                <Link to="/">About</Link>
                <button class="hamburger-button" onclick={this.myFunction()}>
                    <i class="fa fa-bars"></i>
                </button>
            </div>
        )
    }
}

export default Nav;