import React, {Component} from 'react';

class ListSkills extends Component {

    onChange =  e => {
    this.props.onChange(e);
    }

    render() {

        console.log('dkhal')
        const skill = this.props.skill;
        return (
            <div className="col col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="ui-block">
                    <div className="available-widget">

                        <div className="checkbox">
                            <label>
                                <input name="optionsCheckboxes" value={skill} onChange={this.onChange.bind(this)} type="checkbox"/><span
                                className="checkbox-material"><span className="check"></span></span>
                                {skill}
                            </label>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ListSkills;