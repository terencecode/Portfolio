/**
 * Created by william on 25/02/17.
 */

import React from 'react';
import {Image, Row, Col, Panel} from 'react-bootstrap';
import styles from '../../styles/article.css';

class Article extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        img: React.PropTypes.string,
        bodyText: React.PropTypes.string
    };

    render() {
        return (
                <div className={styles.article}>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <Image responsive src={this.props.img} className={styles.articleImage}/>
                            </Col>
                            <Col lg={12} className={styles.articlePanel}>
                                <Panel>
                                    <h5 className={styles.title}>{this.props.title}</h5>
                                    {this.props.bodyText}
                                </Panel>
                            </Col>
                        </Row>
                </div>
        );
    }
}

export default Article;
