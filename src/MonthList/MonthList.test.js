import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import MonthList from './MonthList';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <MonthList />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})