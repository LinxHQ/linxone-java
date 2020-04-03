import React, { Component } from 'react';
import { Container, Row, Col, Card, ButtonToggle, CardHeader, CardBody, UncontrolledCollapse, Label, Input } from 'reactstrap';
import "./NewCustomer.scss";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router';
import myAxios from '../myAxios';
class NewCustomer extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        idCustomer: '',
        idAddress: '',
        idCustomerContact: '',
        name: '',
        line1: '',
        line2: '',
        websiteUrl: '',
        city: '',
        province: '',
        country: '',
        postalCode: '',
        registration: '',
        type: '',
        firstName: '',
        lastName: '',
        email: '',
        officePhone: '',
        mobie: ''
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    handleChangeLine1 = (event) => {
        this.setState({ line1: event.target.value });
    }
    handleChangeLine2 = (event) => {
        this.setState({ line2: event.target.value });
    }
    handleChangeWebsiteUrl = (event) => {
        this.setState({ websiteUrl: event.target.value });
    }
    handleChangeCity = (event) => {
        this.setState({ city: event.target.value });
    }
    handleChangeProvince = (event) => {
        this.setState({ province: event.target.value });
    }
    handleChangeCountry = (event) => {
        this.setState({ country: event.target.value });
    }
    handleChangePostalCode = (event) => {
        this.setState({ postalCode: event.target.value });
    }
    handleChangeRegistration = (event) => {
        this.setState({ registration: event.target.value });
    }
    handleChangeType = (event) => {
        this.setState({ type: event.target.value });
    }
    handleChangeFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }
    handleChangeLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }
    handleChangeOfficePhone = (event) => {
        this.setState({ officePhone: event.target.value });
    }
    handleChangeMobie = (event) => {
        this.setState({ mobie: event.target.value });
    }

    btnBackClick(){
        this.props.history.push("/customer/");
    }

    handleSubmit = () => {
        var mes = "";
        var isEmpty = false;
        if (this.state.name === '') {
            isEmpty = true;
            mes += "name ";
        }
        if (this.state.line1 === '') {
            isEmpty = true;
            mes += "Address Line 1 ";
        }
        if (this.state.firstName === '') {
            isEmpty = true;
            mes += "First name ";
        }
        if (this.state.lastName === '') {
            isEmpty = true;
            mes += "Last name ";
        }
        if (isEmpty) {
            mes = "You cannot leave the field blank " + mes;
            alert(mes);
        }
        else {
            var customer = {
                name: this.state.name,
                registration: this.state.registration,
                type: this.state.type
            };
            myAxios.post('/customer/create', customer)
                        .then(res => {
                            this.setState({ idCustomer: res.data.id });
                            var address = {
                                id: this.state.idAddress,
                                customer : {
                                    id : this.state.idCustomer
                                },
                                line1: this.state.line1,
                                line2: this.state.line2,
                                websiteUrl: this.state.websiteUrl,
                                city: this.state.city,
                                province: this.state.province,
                                postalCode: this.state.postalCode,
                            }
                            myAxios.post('/address/create', address)
                            .then(res => {
                                var customerContact = {
                                    id: this.state.idCustomerContact,
                                    customer: {
                                        id: this.state.idCustomer
                                    },
                                    firstName: this.state.firstName,
                                    lastName: this.state.lastName,
                                    email: this.state.email,
                                    officePhone: this.state.officePhone,
                                    mobie: this.state.mobie
                                };
                                myAxios.post('/customerContact/create', customerContact)
                                    .then(res => {
                                        alert("Success");
                                    })
                                    .catch(error =>
                                        alert("Error")
                                    );        
                            })
                        .catch(error =>
                            alert("Error")
                        );
                })
                .catch(error =>
                    alert("Error")
                );
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="10">
                        <div className="titlePage">New Customer</div>
                    </Col>
                    <Col xs="2">
                        <ButtonToggle color="info" onClick={() => this.btnBackClick()}>Back</ButtonToggle>
                    </Col>
                </Row>
                <hr className="line"/>
                <br/><br/>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader className="cardHeader" id="togglerBasicInfor">Basic Information</CardHeader>
                            <UncontrolledCollapse toggler="#togglerBasicInfor">
                                <CardBody>
                                    <Row>
                                        <Col md={7}>
                                            <Label >Name*</Label>
                                            <Input type="text" value={this.state.name} onChange={this.handleChangeName} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={7}>
                                            <Label>Website</Label>
                                            <Input type="text" value={this.state.websiteUrl} onChange={this.handleChangeWebsiteUrl} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={5}>
                                            <Label>Registration</Label>
                                            <Input type="text" value={this.state.registration} onChange={this.handleChangeRegistration} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <Label>Customer Type</Label>
                                            <Input type="select" value={this.state.type} onChange={this.handleChangeType}>
                                                <option value="">--</option>
                                                <option value="Customer">Customer</option>
                                                <option value="Vendor">Vendor</option>
                                            </Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{ size: 'auto', offset: 1 }}>
                                            <Label check>
                                                <Input type="checkbox" /> Own Company
                                                </Label>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>

                        <Card>
                            <CardHeader className="cardHeader" id="togglerAddress">Address (Optional)</CardHeader>
                            <UncontrolledCollapse toggler="#togglerAddress">
                                <CardBody>
                                    <Row>
                                        <Col sm={{ size: 'auto', offset: 1 }}>
                                            <Label check>
                                                <Input type="checkbox" /> Billing Address
                                                </Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={7}>
                                            <Label>Address Line 1 *</Label>
                                            <Input type="text" value={this.state.line1} onChange={this.handleChangeLine1} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={7}>
                                            <Label>Address Line 2</Label>
                                            <Input type="text" value={this.state.line2} onChange={this.handleChangeLine2} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={5}>
                                            <Label>City</Label>
                                            <Input type="text" value={this.state.city} onChange={this.handleChangeCity} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={5}>
                                            <Label>State/Province</Label>
                                            <Input type="text" value={this.state.province} onChange={this.handleChangeProvince} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <Label for="exampleSelect">Country</Label>
                                            <Input type="select" value={this.state.country} onChange={this.handleChangeCountry}>
                                                <option value="">--</option>
                                                <option value="Viet Nam">Viet Nam</option>
                                                <option value="England">England</option>
                                                <option value="France">France</option>
                                                <option value="Japan">Japan</option>
                                            </Input>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <Label>Postal Code</Label>
                                            <Input type="text" value={this.state.postalCode} onChange={this.handleChangePostalCode} />
                                        </Col>
                                    </Row>

                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>

                        <Card>
                            <CardHeader className="cardHeader" id="togglerContact">Contact Persion (Optional)</CardHeader>
                            <UncontrolledCollapse toggler="#togglerContact">
                                <CardBody>
                                    <Row>
                                        <Col md={6}>
                                            <Label>Firt Name *</Label>
                                            <Input type="text" value={this.state.firstName} onChange={this.handleChangeFirstName} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Label>Last Name *</Label>
                                            <Input type="text" value={this.state.lastName} onChange={this.handleChangeLastName} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Label>Email</Label>
                                            <Input type="email" value={this.state.email} onChange={this.handleChangeEmail} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Label>Office Phone</Label>
                                            <Input type="text" value={this.state.officePhone} onChange={this.handleChangeOfficePhone} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Label>Mobile</Label>
                                            <Input type="text" value={this.state.mobie} onChange={this.handleChangeMobie} />
                                        </Col>
                                    </Row>
                                </CardBody>
                            </UncontrolledCollapse>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={{ size: 'auto', offset: 1 }}>
                        <ButtonToggle type="button" color="success" onClick={this.handleSubmit}>Save</ButtonToggle>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NewCustomer;