import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, UncontrolledCollapse, Button } from 'reactstrap';
import { Table } from 'semantic-ui-react';
import "./EditContact.scss";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class EditContact extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        contacts: this.props.contacts
    }

    btnDeleteClick = () =>{
        confirmAlert({
            title: 'Confirm',
            message: 'Are you want to delete this address?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {alert('Click Yes')}
              }
            ]
          });
    }

    renderContacts = () => {
        return this.state.contacts.map((contact, index) => {
            return (
                <div>
                    <Row>
                        <Col xs="8">
                            <Card>
                                <CardHeader id={"togglerContact" + index} className="cardHeader">{contact.lastName}</CardHeader>
                                <UncontrolledCollapse toggler={"#togglerContact" + index}>
                                    <CardBody>
                                        <Table striped>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.HeaderCell>First name</Table.HeaderCell>
                                                    <Table.Cell>{contact.firstName}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Last name</Table.HeaderCell>
                                                    <Table.Cell>{contact.lastName}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Office phone</Table.HeaderCell>
                                                    <Table.Cell>{contact.officePhone}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Office fax</Table.HeaderCell>
                                                    <Table.Cell>{contact.officeFax}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Mobie</Table.HeaderCell>
                                                    <Table.Cell>{contact.postalCode}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Email 1</Table.HeaderCell>
                                                    <Table.Cell>{contact.email1}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Email 2</Table.HeaderCell>
                                                    <Table.Cell>{contact.email2}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Note</Table.HeaderCell>
                                                    <Table.Cell>{contact.note}</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                        </Col>
                        <Col xs="4"><Button color="danger" onClick={this.btnDeleteClick}>Delete</Button></Col>
                    </Row>
                    <br />
                </div>

            )
        })
    }


    render() {
        return (
            <div>
                {this.renderContacts()}
            </div>
        )
    }
}

export default EditContact;