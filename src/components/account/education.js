import React, {Component} from 'react';

class Education extends Component {
    render() {
        let education = this.props.education
        return (
                <li>
                    <span className="title">{education.ecole}</span>
                    <span className="date">{education.date1} - {education.date2}</span>
                    <span className="text">{education.degree}</span>
                </li>

        );
    }
}

export default Education;
