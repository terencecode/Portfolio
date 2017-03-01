/**
 * Created by william on 25/02/17.
 */

import React from 'react';
import {PageHeader} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

import ArticleList from '../../containers/article-list';

class Formation extends React.Component {
    render() {
        return (
                <Col md={7} mdOffset={3} sm={10} smOffset={1}>
                    <PageHeader>Formation</PageHeader>
                    <ArticleList type="formation"/>
                </Col>
            );
    }
}

export default Formation;
