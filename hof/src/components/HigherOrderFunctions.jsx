import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entrepreneur', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        };
    }

    renderItemsByUserType = (userType) => {
        const filteredData = this.state.userData.filter(item => item.user_type === userType);
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    filterItemsByLetterJ = () => {
        const filteredData = this.state.userData.filter(item => item.name.startsWith('J'));
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    filterItemsByAge = () => {
        const filteredData = this.state.userData.filter(item => item.age > 28 && item.age <= 50);
        const mapRows = filteredData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    findTotalExperienceOfDesigners = () => {
        const designerData = this.state.userData.filter(item => item.user_type === 'Designer');
        const totalExperience = designerData.reduce((total, item) => total + item.years, 0);
        return totalExperience;
    };

    render() {
        return (
            <div>
                <h1>Display all items based on User Type</h1>
                <div className="display-box">
                    <h2>Developers</h2>
                    <ul>{this.renderItemsByUserType('Developer')}</ul>
                    <h2>Designers</h2>
                    <ul>{this.renderItemsByUserType('Designer')}</ul>
                    <h2>Teachers</h2>
                    <ul>{this.renderItemsByUserType('Teacher')}</ul>
                    <h2>Entrepreneurs</h2>
                    <ul>{this.renderItemsByUserType('Entrepreneur')}</ul>
                </div>

                <h1>Display all items starting with the letter 'J'</h1>
                <div className="display-box">
                    <ul>{this.filterItemsByLetterJ()}</ul>
                </div>

                <h1>Display all items with age between 29 and 50</h1>
                <div className="display-box">
                    <ul>{this.filterItemsByAge()}</ul>
                </div>

                <h1>Total Experience of Designers</h1>
                <div className="display-box">
                    <p>Total Years of Experience: {this.findTotalExperienceOfDesigners()}</p>
                </div>
            </div>
        );
    }
}

export default HigherOrderComponent;





