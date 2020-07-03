import React, { Component } from 'react';
import Header from '../../../Component/Header';
import myAxios from '../../../myAxios';
import RowExpenses from './RowExpenses';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table, Card, CardHeader, CardBody, CardTitle, Input, Container, Row, Col } from 'reactstrap';
import { Tabs } from 'antd';
import Icon from '@ant-design/icons';

const { TabPane } = Tabs;
class DetailExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            value: '',
            openModal: false,
            expenses: {}
        }
    }

    async componentDidMount() {
        myAxios.get('/expenses/' + this.props.match.params.id)
            .then(res => {
                const expenses = res.data;
                this.setState({
                    expenses: expenses
                });
            })
            .catch(error => alert("Error"));
    }

    changeCallBackHandle = (name, value) => {
        const newExpenses = this.state.expenses;
        newExpenses[name] = value;
        this.setState(prevState => ({
            expenses: {
                ...prevState.expenses,
                [name]: value
            }

        }));
        const url = '/expenses/update';
        myAxios.post(url, newExpenses)
            .then(res => {
                alert("Update Success");
            })
            .catch(error => alert("Error"));
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {/*        Search*/}
                    <div className="row pt-3 pb-0">
                        <div className="col-md-2">
                            <legend className="font-weight-bold" style={{ color: 'green' }}>Expenses</legend>
                        </div>
                        <div className="col-md-3 offset-md-7">
                            <a href="/expenses" type="button" className="btn btn-secondary btn-sm">
                                <i className="fa fa-arrow-left" aria-hidden="true" />
                                Back
                            </a>
                            <a href="/expenses/new" type="button" className="btn btn-secondary btn-sm ml-2">
                                <i className="fa fa-plus" aria-hidden="true" />
                                New
                            </a>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <legend>{this.state.no}</legend>
                    <Table bordered striped size="sm">
                        <tbody>
                            <RowExpenses
                                changeCallBack={this.changeCallBackHandle}
                                value={this.state.expenses.no}
                                allowEdit={false}
                                type=''
                                label='Expenses No'
                            />
                            <RowExpenses
                                onClick={this.showModal}
                                changeCallBack={this.changeCallBackHandle}
                                allowEdit={true}
                                type='select'
                                name='categoryExpenses'
                                label='Category'
                                value={this.state.expenses.categoryExpenses}
                            />
                            <RowExpenses
                                changeCallBack={this.changeCallBackHandle}
                                allowEdit={true}
                                type='date'
                                name='date'
                                label='Date'
                                value={this.state.expenses.date}
                            />
                            <RowExpenses
                                changeCallBack={this.changeCallBackHandle}
                                allowEdit={true}
                                type='number'
                                name='amount'
                                label='Amount (incl. Tax)'
                                value={this.state.expenses.amount}
                            />
                            <RowExpenses
                                changeCallBack={this.changeCallBackHandle}
                                allowEdit={true}
                                type='text'
                                name='note'
                                label='Note'
                                value={this.state.expenses.note}
                            />
                            <RowExpenses
                                changeCallBack={this.changeCallBackHandle}
                                allowEdit={true}
                                type='text'
                                name='recurring'
                                label='Recurring'
                                value={this.state.expenses.recurring}
                            />
                        </tbody>
                    </Table>
                    <br />

                    <Card>
                        <CardHeader style={{ backgroundColor: "green", fontWeight: "bold", color: "white" }}>Header</CardHeader>
                        <CardBody>
                            <Input type="file" name="file" id="exampleFile" />
                        </CardBody>
                    </Card>
                    <br />
                    <Container>
                        <Row>
                            <Col>
                                <div className="card-container">
                                    <Tabs type="card">
                                        <TabPane key="1" tab={<Icon disabled name='arrow circle right' />}></TabPane>
                                        <TabPane tab="Customer" key="2">
                                            <Button style={{ backgroundColor: "green"}}>New Customer</Button>
                                            <Button style={{ backgroundColor: "green",marginLeft:"2%"}}>Assign Customer</Button>
                                        </TabPane>
                                        <TabPane tab="Invoice" key="3">
                                            <Button style={{ backgroundColor: "green"}}>New Invoice</Button>
                                            <Button style={{ backgroundColor: "green",marginLeft:"2%"}}>Assign Invoice</Button>
                                        </TabPane>
                                        <TabPane tab="Taxes" key="4">

                                        </TabPane>
                                    </Tabs>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        );
    }
}

export default DetailExpenses;