import React, { Component } from 'react'
import './Landing.css'
import { Link } from 'react-router-dom';


class Landing extends Component {


    render() {
        return (
            <body>
                <nav role="navigation">Nav</nav>
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
                        Track your progress
            <p>With the progress section, you can view how many entries you have made for the month, and how many of your habits you maintained </p>
                    </section>
                    {/* button to home page  */}
                    <Link to='/home'>
                        <button>Demo</button>
                    </Link>

                </main>

            </body>
        )
    }
}

export default Landing;