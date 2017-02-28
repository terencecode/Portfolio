/**
 * Created by william on 26/02/17.
 */

import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';

class NotFound extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row className="show-grid">
                    <Col md={8} mdOffset={2} xs={10} xsOffset={1}>
                        <PageHeader>404 Not Found <small>This page doesn't exist</small></PageHeader>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default NotFound;
