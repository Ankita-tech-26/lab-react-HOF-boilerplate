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

    findTotalExperienceOfDesigners = () => {
        const designerData = this.state.userData.filter(item => item.user_type === 'Designer');
        const totalExperience = designerData.reduce((total, item) => total + item.years, 0);
        return totalExperience;
    };

    render() {
        return (
            <React.Fragment>
                <h1>Total Experience of Designers</h1>
                <div className="display-box">
                    <p>Total Years of Experience: {this.findTotalExperienceOfDesigners()}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default HigherOrderComponent;




