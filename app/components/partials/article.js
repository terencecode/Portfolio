/**
 * Created by william on 25/02/17.
 */

import React from 'react';
import {Panel, Image, Grid, Row, Col} from 'react-bootstrap';

class Article extends React.Component {
    render() {
        return (

                <Panel header={this.props.title}>
                    <Grid>
                        <Row className="show-grid">
                            <Col md={4} sm={6} xs={12}>
                                <Image responsive src={this.props.img} rounded/>
                            </Col>
                            <Col md={8} sm={6} xs={12}>
                                {this.props.bodyText}
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
        );
    }
}

Article.propTypes = {
    title: React.PropTypes.string,
    img: React.PropTypes.string,
    bodyText: React.PropTypes.string
};

export default Article;
