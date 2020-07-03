import React, { Component } from 'react';
import Header from '../../../Component/Header';
import UncontrolledCollapse from 'reactstrap';
import Optional from './Optional';
import Basic from './Basic';
import myAxios from '../../../myAxios';
import { Redirect } from 'react-router-dom';

class NewExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            no: 'E-20200000026',
            category: 'OFFICE_STATIONARIES',
            date: '',
            amount: '',
            note: '',
            idCustomer: '',
            idInvoice: '',
            idBank: '',
            taxes: [
                {
                    id: '1'
                }
            ],
        }
    }

    basicCallBackHandle = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    changeCustomerCallBackHandle = (idCustomer) => {
        this.setState({
            idCustomer: idCustomer
        })
    }

    changeInvoiceCallBackHandle = (idInvoice) => {
        this.setState({
            idInvoice: idInvoice
        })
    }

    changeBankCallBackHandle = (idBank) => {
        this.setState({
            idBank: idBank
        });
    }

    changeTaxesCallBackHandle = (taxes) => {
        this.setState({ taxes: taxes })
    }

    btnSaveClick = () => {
        var expenses = {
            no : this.state.no,
            categoryExpenses : this.state.category,
            date: this.state.date,
            amount: this.state.amount,
            note: this.state.note,
            customer: {
                id: this.state.idCustomer
            },
            invoice: {
                id: this.state.idInvoice
            },
            taxes: this.state.taxes

        };
        myAxios.post('/expenses/create', expenses)
            .then(res => {
                alert("Create Success");
            })
            .catch(error => alert("Error"));
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <br />
                    <div className="container">
                        {/*        Search*/}
                        <div className="row pt-3">
                            <div className="col-md-3">
                                <legend className="font-weight-bold" style={{ color: 'green' }}>New Expenses</legend>
                            </div>
                            <div className="col-md-2 offset-sm-7">
                                <a href="/expenses" type="button" className="btn btn-secondary btn-sm">
                                    <i className="fa fa-arrow-left" aria-hidden="true" />
                                    Back
                                </a>
                            </div>
                        </div>
                        <hr />
                        <br />
                        <Basic no={this.state.no}
                            category={this.state.category}
                            date={this.state.date}
                            amount={this.state.amount}
                            note={this.state.note}
                            basicCallBack={this.basicCallBackHandle} />
                        <br />
                        <Optional
                            taxes={this.state.taxes}
                            idCustomer={this.state.idCustomer}
                            idInvoice={this.state.idInvoice}
                            idBank={this.state.idBank}
                            changeCustomerCallBack={this.changeCustomerCallBackHandle}
                            changeInvoiceCallBack={this.changeInvoiceCallBackHandle}
                            changeBankCallBack={this.changeBankCallBackHandle}
                            changeTaxesCallBack={this.changeTaxesCallBackHandle}
                        />
                        <br /><br />
                        <div className="row">
                            <div className="col-sm-2 offset-sm-3">
                                <button type="button" className="btn btn-outline-success btn-sm" onClick={this.btnSaveClick} style={{ width: '100%' }}>
                                    <i className="fa fa-check" arisa-hidden="true" />
                                    Save
                                </button>
                            </div>
                            <div className="col-sm-2">
                                <a href="/user/expenses" type="button" className="btn btn-outline-secondary btn-sm" style={{ width: '100%' }}>
                                    <i className="fa fa-arrow-left" aria-hidden="true" />
                                    Back
                                </a>
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>

            </div>
        );
    }
}

export default NewExpenses;