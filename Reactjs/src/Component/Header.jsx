import React, { Component } from 'react';
import {
  Collapse, Navbar,
  NavbarBrand, Nav, NavItem, NavLink, NavbarText
} from 'reactstrap';
import {HomeFilled} from '@ant-design/icons';
import "./Header.scss";

class Header extends Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><div className="iconAntDesign"><HomeFilled/></div></NavbarBrand>
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/invoice/">Invoice</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/customer/">Customer</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
                alo
            </NavbarText>
          </Collapse>
        </Navbar>
        <br/><br/>
      </div>
    );
  }
}

export default Header;