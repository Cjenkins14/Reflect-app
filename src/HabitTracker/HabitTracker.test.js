import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import HabitTracker from './HabitTracker';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <HabitTracker />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})