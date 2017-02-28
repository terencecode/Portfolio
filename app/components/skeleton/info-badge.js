/**
 * Created by wtrojano on 28/02/2017.
 */

import React from 'react';
import {Image} from 'react-bootstrap';
import styles from '../../styles/info-badge.css';
import {Row, Col, Panel} from 'react-bootstrap';

class InfoBadge extends React.Component {

    render() {
        return (
                <Col md={3} mdOffset={0} smHidden xsHidden className={styles.badge}>
                        <Row>
                            <Col md={8} mdOffset={2}>
                                <Image src={require('../../img/profile-pic.jpg')} thumbnail responsive/>
                                <Panel>
                                    <h5 className={styles.title}>Biographie:</h5>
                                </Panel>
                            </Col>
                        </Row>
                </Col>
        );
    }
}

export default InfoBadge;
