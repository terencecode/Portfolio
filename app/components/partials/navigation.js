import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';

class Navigation extends React.Component {
    createNavItems() {
        return this.props.navItems.map((element, index) => {
            return (
                <LinkContainer key={index} to={{pathname: element.path}}>
                    <NavItem eventKey={index} key={index} active>
                        {element.text}
                    </NavItem>
                </LinkContainer>);
        });
    }
    render() {
        return (
            <div>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">William</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {this.createNavItems()}
                        </Nav>
                        <Navbar.Text pullRight>Created by: William Trojanowski
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}

Navigation.propTypes = {
    navItems: React.PropTypes.array,
    children: React.PropTypes.element
};

export default Navigation;
