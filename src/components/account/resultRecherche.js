import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ResultRecherche extends Component {
    render() {
        console.log('wsel lel bar')
        return (
            <div>
                <svg className="olymp-three-dots-icon">
                    <use
                        xlinkHref="/svg-icons/sprites/icons.svg#olymp-three-dots-icon"/>
                </svg>
                <ul className="more-dropdown more-with-triangle">
                    <li>
                        <Link to="/">Report Profile</Link>
                    </li>
                    <li>
                        <Link to="/">Block Profile</Link>
                    </li>
                </ul>
            </div>

        );
    }
}

export default ResultRecherche;
