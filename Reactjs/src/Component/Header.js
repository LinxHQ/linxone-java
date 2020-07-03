import React, { Component } from 'react';
import {
  Collapse, Navbar,
  NavbarBrand, Nav, NavItem, NavLink, NavbarText
} from 'reactstrap';
import { HomeFilled } from '@ant-design/icons';
import "./Header.scss";

class Header extends Component {

  render() {
    return (
      // <div>
      //   <Navbar color="light" light expand="md">
      //     <NavbarBrand href="/"><div className="iconAntDesign"><HomeFilled/></div></NavbarBrand>
      //     <Collapse navbar>
      //       <Nav className="mr-auto" navbar>
      //         <NavItem>
      //           <NavLink href="/invoice/">Invoice</NavLink>
      //         </NavItem>
      //         <NavItem>
      //           <NavLink href="/customer/">Customer</NavLink>
      //         </NavItem>
      //       </Nav>
      //       <NavbarText>
      //           alo
      //       </NavbarText>
      //     </Collapse>
      //   </Navbar>
      //   <br/><br/>
      // </div>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={{ height: '2.5em' }}>
          <a className="navbar-brand pl-5" href="#">
            <i className="fa fa-home" aria-hidden="true" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a className="nav-link" href="/user/invoice/">Invoices <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/user/expenses">Expenses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contracts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Quotations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/report">Report</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/customer/">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user/payment">Payments</a>
              </li>
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">...</a>
            </ul>
            <div className="form-inline my-2 my-lg-0 pr-5">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-suitcase" aria-hidden="true" />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="..." alt="..." class="rounded-circle">
              </a> */}
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>


    );
  }
}

export default Header;