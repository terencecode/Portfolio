/**
 * Created by william on 25/02/17.
 */

import {connect} from 'react-redux';

import Navigation from '../components/partials/navigation';

function mapStateToProps() {
    return {
        navItems: [
            {
                text: 'Formation',
                path: 'formation'
            },
            {
                text: 'Compétences',
                path: 'competences'
            },
            {
                text: 'Projets',
                path: 'projets'
            },
            {
                text: 'CV',
                path: 'cv'
            },
            {
                text: 'Contact',
                path: 'contact'
            }
        ]
    };
}

export default connect(mapStateToProps)(Navigation);
