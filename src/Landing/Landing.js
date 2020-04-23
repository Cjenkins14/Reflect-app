import React, { Component } from 'react'
import './Landing.css'
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav'

class Landing extends Component {


    render() {
        return (
            <div className='landing'>
                <Nav history={this.props.history} />
                <main role="main">
                    <header role="banner">
                        <h1>Reflect</h1>
                    </header>

                    <section>
                        Organize your thoughts
            <p>With Reflect, you can now utilize those small pieces of your day to clear your mind, and maintain your productivity by something as simple as journaling.</p>
                    </section>

                    <section>
                        Maintain your habits
            <p>Reflect also supports personal progress with the habit tracker, helping accomlish those daily goals that sometimes skip our minds</p>
                    </section>

                    <section>
                        View your progress
            <p>As opposed to typical journaling, Reflect makes it easier to find old entries, and view how many entries you have made for the month</p>
                    </section>
                    <section>
                        <Link to='/january'>
                            <button className='demo-button'>Demo</button>
                        </Link>
                    </section>
                </main>

            </div>
        )
    }
}

export default Landing;