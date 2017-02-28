/**
 * Created by william on 26/02/17.
 */

import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class NotFound extends React.Component {
    render() {
        return (
                <Col md={7} mdOffset={3} xs={10} xsOffset={1}>
                    <PageHeader>404 Not Found <small>This page doesn't exist</small></PageHeader>
                </Col>
        );
    }
}

export default NotFound;
