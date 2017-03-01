/**
 * Created by wtrojano on 28/02/2017.
 */

import React from 'react';
import styles from '../../styles/info-badge.css';
import {Row, Col, Panel, Button, Image} from 'react-bootstrap';

class InfoBadge extends React.Component {

    render() {
        return (
                <Col md={3} smHidden xsHidden className={styles.badgeContainer}>
                        <Row>
                            <Col md={10} mdOffset={1}>
                                <Button bsStyle="primary" className={styles.circleBut}>
                                    <Image src={require('../../img/ic_person_white_48dp_2x.png')} responsive className={styles.icon} circle />
                                </Button>
                                <div className={styles.badge}>
                                    <Image src={require('../../img/profile-pic.jpg')} responsive/>
                                    <Panel>
                                        <h5 className={styles.title}>Biographie:</h5>
                                        <p>
                                            Je m'appelle William Trojanowski, j'ai 19 ans et je suis en deuxième année
                                            de DUT Informatique en alternance. Passionné d'informatique, je suis assez
                                            polyvalent autant en création de sites ou d'applications Web (Full Stack), qu'en
                                            développement de logiciels (en Java essentiellement).
                                        </p>
                                    </Panel>
                                </div>
                            </Col>
                        </Row>
                </Col>
        );
    }
}

export default InfoBadge;
