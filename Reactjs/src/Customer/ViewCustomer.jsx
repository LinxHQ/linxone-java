import React, { Component } from 'react';
import { Tabs, Button, Dropdown, Menu } from 'antd';
import {DownOutlined, UserOutlined, EditFilled} from '@ant-design/icons';
import { Icon, Label, Table } from 'semantic-ui-react'
import myAxios from '../myAxios';
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import EditAddress from './EditAddress';
import Header from './../Component/Header';
import EditContact from './EditContact';
import "./ViewCustomer.scss";
const { TabPane } = Tabs;
const menuAdd = (
    <Menu >
      <Menu.Item key="1">
        <UserOutlined />
        New Address
      </Menu.Item>
      <Menu.Item key="2">
        <UserOutlined />
        New Contact
      </Menu.Item>
      <Menu.Item key="3">
        <UserOutlined />
        New Invoice
      </Menu.Item>
    </Menu>
  );

class ViewCustomer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        customer: this.props.customer,
        addresses: [],
        contacts: [],
    }

    async componentDidMount() {
        myAxios.get('/address/getByIDCustomer/' + this.state.customer.id)
        .then(res => {
            this.setState({ addresses: res.data });
        })
        .catch(
            error => console.log(error)
        );    
        myAxios.get('/customerContact/getByIDCustomer/' + this.state.customer.id)
            .then(res => {
                this.setState({ contacts: res.data });
            })
            .catch(
                error => console.log(error)
            );
    }

    updateStateCustomer(newCustomer)
    {
        this.setState({customer: newCustomer});
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="10">
                            <div className="titlePage">Customer Detail</div>
                        </Col>
                        <Col xs="2">
                            {/* <Button type="primary" onClick={() => this.btnBackClick()}>Back</Button> */}
                            <Dropdown overlay={menuAdd}>
                                <Button>
                                    New <DownOutlined />
                                </Button>
                            </Dropdown>
                        </Col>
                    </Row>
                    <hr className="line"/>
                    <br/><br/>
                    <Row>
                        <Col>
                            <Table striped>
                                <Table.Body>
                                    <Table.Row>
                                        <Table.HeaderCell>Name</Table.HeaderCell>
                                        <Table.Cell>{this.state.customer.name}</Table.Cell>
                                        <Table.Cell><EditFilled/></Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.HeaderCell>Registration</Table.HeaderCell>
                                        <Table.Cell>{this.state.customer.registration}</Table.Cell>
                                        <Table.Cell><EditFilled /></Table.Cell>
                                    </Table.Row>
                                    {/* <Table.Row>
                                        <Table.HeaderCell>Tax code</Table.HeaderCell>
                                        <Table.Cell>{this.state.customer.tax.name}</Table.Cell>
                                        <Table.Cell><EditFilled /></Table.Cell>
                                    </Table.Row> */}
                                    {/* <Table.Row>
                                        <Table.HeaderCell>Website</Table.HeaderCell>
                                        <Table.Cell>{this.state.customer.website}</Table.Cell>
                                        <Table.Cell><EditFilled /></Table.Cell>
                                    </Table.Row> */}
                                    <Table.Row>
                                        <Table.HeaderCell>Customer Type</Table.HeaderCell>
                                        <Table.Cell>{this.state.customer.type}</Table.Cell>
                                        <Table.Cell><EditFilled /></Table.Cell>
                                    </Table.Row>
                                    {/* <Table.Row>
                                        <Table.HeaderCell>Own Company</Table.HeaderCell>
                                        <Table.Cell>{this.state.customer.name}</Table.Cell>
                                        <Table.Cell><EditFilled /></Table.Cell>
                                    </Table.Row> */}
                                </Table.Body>
                            </Table>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row>
                        <Col>
                        <div className="card-container">
                            <Tabs type="card">
                                <TabPane key="1" tab={<Icon disabled name='arrow circle right' />}></TabPane>
                                <TabPane tab="Addresses" key="2">
                                    <EditAddress addresses = {this.state.addresses}></EditAddress>
                                </TabPane>
                                <TabPane tab="Contacts" key="3">
                                    <EditContact contacts = {this.state.contacts}></EditContact>
                                </TabPane>
                                <TabPane tab="Invoices" key="4">
                                </TabPane>
                                <TabPane tab="Quotations" key="5">
                                </TabPane>
                            </Tabs>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ViewCustomer;
