import React, {Component} from 'react';

class Experience extends Component {
    render() {
        let experience = this.props.experience;
        return (
            <div>
                <li>
                    <span className="title">{experience.name}</span>
                    <span className="date">{experience.start_date}-{experience.end_date}</span>
                    <span className="text">{experience.description}</span>
                    <span className="text">{experience.address}</span>
                </li>
            </div>
        );
    }
}

export default Experience;
