/**
 * Created by wtrojano on 28/02/2017.
 */

import React from 'react';
import styles from '../../styles/info-badge.css';
import {Row, Col, Panel, Button, Image} from 'react-bootstrap';

class InfoBadge extends React.Component {
    changeVisibility() {
        document.getElementsByClassName('myBadge')[0].style.visibility === 'hidden' ?
            document.getElementsByClassName('myBadge')[0].style.visibility  = 'visible' :
            document.getElementsByClassName('myBadge')[0].style.visibility  = 'hidden';
    }
    render() {
        let styling = {
            visibility: 'hidden'
        };
        return (
                <Col md={3} smHidden xsHidden className={styles.badgeContainer}>
                        <Row>
                            <Col md={10} mdOffset={1}>
                                <Button href="#" bsStyle="primary" className="circleButton" onClick={() => {this.changeVisibility();}}>
                                    <Image src={require('../../img/ic_person_white_48dp_2x.png')} responsive className={styles.icon} circle />
                                </Button>
                                <div className="myBadge" style={styling}>
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
