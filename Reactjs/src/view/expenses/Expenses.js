import React, { Component } from 'react';
import Headers from '../../Component/Header';
import TblExpenses from './TblExpenses';
import myAxios from '../../myAxios';

class Expenses extends Component {
    constructor(props) {
        super(props);
    }



    btnPrintClick() {

    }

    render() {
        return (
            <div>
                <Headers />
                <div className="container">
                    {/*        Search*/}
                    <div className="row pt-3 pb-0">
                        <div className="col-md-2">
                            <legend className="font-weight-bold" style={{ color: 'green' }}>Expenses</legend>
                        </div>
                        <div className="col-md-2 offset-md-8" style={{ fontSize: 'larger' }}>
                            <a href="/expenses/new" className="secondary">
                                <i className="fa fa-plus" aria-hidden="true" />
                            </a>
                            <a href="#" className="secondary ml-3">
                                <i className="fa fa-print" aria-hidden="true" onClick={this.btnPrintClick()} />
                            </a>
                        </div>
                    </div>
                </div>
                <TblExpenses />
                <br />
                {/* <Nav tabs>
                    <NavItem>
                        <NavLink href="#" active>Link</NavLink>
                    </NavItem>
                    <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle nav caret>
                            Dropdown
                    </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Another Link</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink disabled href="#">Disabled Link</NavLink>
                    </NavItem>
                </Nav> */}
            </div>
        );
    }
}

export default Expenses;