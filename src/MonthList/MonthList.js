import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './MonthList.css';
import { Link } from 'react-router-dom';
import list from '../Months'

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected, id }) => {

    return <div
        className={`menu-item ${selected ? 'active' : ''}`}
    ><Link to={`/${text}`} key={id}>{text}</Link></div>;
};

// All items component
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
        this.menuItems = Menu(list, selected);
        this.state = {
            selected,
            list: []
        };
    }

    componentDidMount() {

    }


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