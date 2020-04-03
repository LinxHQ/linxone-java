import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, UncontrolledCollapse, Button  } from 'reactstrap';
import { Table } from 'semantic-ui-react';
import "./EditAddress.scss";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class EditAddress extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        addresses : this.props.addresses
    }

    btnDeleteClick = () =>{
        confirmAlert({
            title: 'Confirm',
            message: 'Are you want to delete this address?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('Click Yes')
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          });
    }

    renderAddresses = () => {
        return this.state.addresses.map((address, index) => {
            return (
                <div>
                    <Row>
                        <Col xs="8">
                            <Card>
                                <CardHeader id={"togglerAddress"+index} className="cardHeader">{address.line1}</CardHeader>
                                <UncontrolledCollapse toggler={"#togglerAddress"+index}>
                                    <CardBody>
                                        <Table striped>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.HeaderCell>Line 1</Table.HeaderCell>
                                                    <Table.Cell>{address.line1}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Line 2</Table.HeaderCell>
                                                    <Table.Cell>{address.line2}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>City</Table.HeaderCell>
                                                    <Table.Cell>{address.city}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Province</Table.HeaderCell>
                                                    <Table.Cell>{address.province}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>PostalCode</Table.HeaderCell>
                                                    <Table.Cell>{address.postalCode}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Website Url</Table.HeaderCell>
                                                    <Table.Cell>{address.websiteUrl}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Phone 1</Table.HeaderCell>
                                                    <Table.Cell>{address.phone1}</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.HeaderCell>Phone 2</Table.HeaderCell>
                                                    <Table.Cell>{address.phone2}</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
                                    </CardBody>
                                </UncontrolledCollapse>
                            </Card>
                        </Col>
                        <Col xs="4"><Button color="danger" onClick={this.btnDeleteClick}>Delete</Button></Col>
                    </Row>
                    <br/>
                </div>
            )   
        });
    }

    render() {
        return (
            <div>
                {this.renderAddresses()}
            </div>
        )
    }
}

export default EditAddress;