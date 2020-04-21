import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import EntryMain from './EntryMain';

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <BrowserRouter>
            <EntryMain />
        </BrowserRouter>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})