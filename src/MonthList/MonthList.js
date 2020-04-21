import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './MonthList.css';
import { Link } from 'react-router-dom';

const list = [
    {
        name: 'January',
        id: '01'
    },
    {
        name: 'February',
        id: '02'
    },
    {
        name: 'March',
        id: '03'
    },
    {
        name: 'April',
        id: '04'
    },
    {
        name: 'May',
        id: '05'
    },
    {
        name: 'June',
        id: '06'
    },
    {
        name: 'July',
        id: '07'
    },
    {
        name: 'August',
        id: '08'
    },
    {
        name: 'September',
        id: '09'
    },
    {
        name: 'October',
        id: '10'
    },
    {
        name: 'November',
        id: '11'
    },
    {
        name: 'December',
        id: '12'
    }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected, id, name }) => {

    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    ><Link to={`/${text}/${id}`} key={id}>{text}</Link></div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { name, id } = el;
        return <MenuItem className='month' id={id} text={name} key={id} selected={selected} />;
    });


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';

class MonthList extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.menuItems = Menu(list, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="App">
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    selected={selected}
                    onSelect={this.onSelect}
                />
            </div>
        );
    }
}

export default MonthList;