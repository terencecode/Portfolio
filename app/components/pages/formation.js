/**
 * Created by william on 25/02/17.
 */

import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {Grid, Col, Row} from 'react-bootstrap';

import ArticleList from '../../containers/article-list';

class Formation extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row className="show-grid">
                    <Col md={7} mdOffset={3} xs={10} xsOffset={1}>
                        <PageHeader>Formation</PageHeader>
                        <ArticleList type="formation"/>
                    </Col>
                </Row>
            </Grid>
            );
    }
}

export default Formation;
