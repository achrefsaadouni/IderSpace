import React, {Component} from 'react';

class ListSkills extends Component {
    render() {
        let skill = this.props.skillsuser;
        let pourcentskill = (skill.level*20)+'%';
        return (
            <div>
                <li>
                    <div className="skills-item">
                        <div className="skills-item-info"> {skill.name} </div>
                        <div className="skills-item-meter">
                            <span className="skills-item-meter-active bg-primary skills-animate" style={{width:pourcentskill, opacity:'1'}}/>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default ListSkills;
