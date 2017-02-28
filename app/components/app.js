/**
 * Created by William on 28/02/2017.
 */

import  React from 'react';
import {Grid, Row} from 'react-bootstrap';

import Navigation from '../containers/skeleton/navigation';
import InfoBadge from './skeleton/info-badge';

class App extends React.Component {
    static propTypes = {
        children: React.PropTypes.element
    };
    render() {
        return (
            <Grid fluid>
                <Row className="show-grid">
                    <InfoBadge />
                    <Navigation />
                    {this.props.children}
                </Row>
            </Grid>
        );
    }
}

export default App;
