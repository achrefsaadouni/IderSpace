import React, {Component} from 'react';
import ListSkills from "./listSkills";
import Education from "./education";
import Experience from "./experience";
import UploadImageModal from './uploadImageModal';
class About extends Component {


    render() {
        let listSkills;
        let listEducation;
        let listExperience;
        let skills;
        let languages;
        let hobbies;
        console.log(this.props.profile);

        listSkills = this.props.profile.Resume.Skills.map(skill =>
            <ListSkills key={skill._id} skillsuser={skill}/>
        );


        listEducation = this.props.profile.Resume.educations.map(education =>
            <Education key={education._id} education={education}/>
        );

        listExperience = this.props.profile.Resume.experiences.map(experience =>
        <Experience key={experience._id} experience={experience}/>
        )


        try {
            languages = this.props.profile.Resume.languages.map(item => item + ", ");
        } catch (err) {
            languages = "no languages";
        }

        try {
            hobbies = this.props.profile.Resume.hobbies.map(item => item + ", ");
        } catch (err) {
            hobbies = "no hobbies";
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">General Information</h6>
                                <a href="#" className="more">
                                    <svg className="olymp-three-dots-icon">
                                        <use xlinkHref="#olymp-three-dots-icon"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="ui-block-content">
                                <div className="row">
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">


                                        <ul className="widget w-personal-info item-block">
                                            <li>
                                                <span className="title">About me:</span>
                                                <span className="text">{this.props.profile.Resume.about}</span>
                                            </li>
                                            <li>
                                                <span className="title">Current class</span>
                                                <span className="text">{this.props.profile.class}</span>
                                            </li>
                                            <li>
                                                <span className="title">Email</span>
                                                <span className="text">{this.props.profile.email}</span>
                                            </li>
                                            <li>
                                                <span className="title">My best answers in forum</span>
                                                <span className="text">{this.props.profile.nbrBestAnswer}</span>
                                            </li>
                                        </ul>

                                    </div>
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">


                                        <ul className="widget w-personal-info item-block">
                                            <li>
                                                <span className="title">Speaken Languages</span>
                                                <span className="text">{languages}</span>
                                            </li>
                                            <li>
                                                <span className="title">My hobbies</span>
                                                <span className="text">{hobbies}</span>
                                            </li>
                                            <li>
                                                <span className="title">Favourite Writers:</span>
                                                <span className="text">Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth. </span>
                                            </li>
                                            <li>
                                                <span className="title">Other Interests:</span>
                                                <span className="text">Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">Education and Employement</h6>
                                <a href="#" className="more">
                                    <svg className="olymp-three-dots-icon">
                                        <use xlinkHref="#olymp-three-dots-icon"></use>
                                    </svg>
                                </a>
                            </div>
                            <div className="ui-block-content">
                                <div className="row">
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">

                                        <h6 className="title"> Education </h6>
                                        <ul className="widget w-personal-info item-block">

                                            {listEducation}


                                        </ul>


                                    </div>
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-12">

                                        <h6 className="title"> Experience </h6>
                                        <ul className="widget w-personal-info item-block">

                                            {listExperience}

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
                        <div className="ui-block">
                            <div className="ui-block-title">
                                <h6 className="title">My Skills</h6>

                            </div>
                            <div className="ui-block-content">


                                <div className="widget w-socials">
                                    <ul className="widget w-pool">
                                        {listSkills}


                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
