import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './MonthList.css';
import { Link } from 'react-router-dom';

const list = [
    {
        name: 'Jan',
        id: '01'
    },
    {
        name: 'Feb',
        id: '02'
    },
    {
        name: 'Mar',
        id: '03'
    },
    {
        name: 'Apr',
        id: '04'
    },
    {
        name: 'May',
        id: '05'
    },
    {
        name: 'Jun',
        id: '06'
    },
    {
        name: 'Jul',
        id: '07'
    },
    {
        name: 'Aug',
        id: '08'
    },
    {
        name: 'Sep',
        id: '09'
    },
    {
        name: 'Oct',
        id: '10'
    },
    {
        name: 'Nov',
        id: '11'
    },
    {
        name: 'Dec',
        id: '12'
    }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected, id, name }) => {

    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    ><Link to={`/${name}/${id}`} key={id}>{text}</Link></div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
    list.map(el => {
        const { name, id } = el;
        console.log(name)
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