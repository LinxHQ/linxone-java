import React, { Component, useState } from 'react';
import { Button, Collapse, Card, CardBody, CardHeader } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import myAxios from '../../../myAxios';
import Taxes from './Taxes';

class Optional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            customers : [],
            invoices : [],
            taxes : this.props.taxes,
            idCustomer: this.props.idCustomer,
            idInvoice:this.props.idInvoice,
            idBank: this.props.idBank,        
        }
    }

    async componentDidMount(){
        myAxios.get('/customer/get')
        .then(res => {
            this.setState({
                customers : res.data
            });
        })
        .catch(error => alert("Error"));
    }


    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    renderListCustomer(){
        let item = this.state.customers.map((customer) => {
            return (
                <option value={customer.id}>{customer.name}</option>
            );
        });
        return item;
    }

    renderListInvoice(){
        let item = this.state.invoices.map((invoice) => {
            return (
            <option value={invoice.id}>I-{invoice.date}{invoice.id}</option>
            );
        });
        return item;
    }

    changeCustomer=(event)=>{
        const newIdCustomer = event.target.value;
        this.setState({
            idCustomer: newIdCustomer,
            idInvoice : ''
        });
        let url = '/invoice/getByIdCustomer/'+newIdCustomer;
        myAxios.get(url)
        .then(res => {
            this.setState({
                invoices : res.data
            });
        })
        .catch(error => alert("Error"));
        this.props.changeCustomerCallBack(newIdCustomer);
    }

    changeInvoice = (event)=>{
        this.setState({
            idInvoice:event.target.value
        });
        this.props.changeInvoiceCallBack(event.target.value);
    }

    deleteCallBackHandle =(i)=>{
        const newTaxes = this.state.taxes;
        newTaxes.splice(i,1);
        this.setState({
            taxes : newTaxes
        });
        this.props.changeTaxesCallBack(this.state.taxes);
    }

    changeCallBackHandle=(position, id)=>{
        const newTaxes = this.state.taxes;
        newTaxes[position].id = id;
        this.setState({
            taxes : newTaxes
        });
        console.log("Taxes");
        console.log(this.state.taxes);
        this.props.changeTaxesCallBack(this.state.taxes);
    }

    moreTaxCallBackHandle = () =>{
        const result = this.state.taxes;
        result.push({
            id: '1'
        });
        this.setState({
            taxes : result
        });
    }

    render() {

        return (
            <Card>
                <CardHeader onClick={this.toggle} style={{ backgroundColor: '#28a745' }}>
                    <FontAwesome
                        className="fa fa-info-circle"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' , fontSize:'lager', fontWeight:'bold'}}
                    >Optional Information</FontAwesome>

                </CardHeader>
                <Collapse isOpen={this.state.isOpen}>
                    <CardBody>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Customer/Vendor
                                        </label>
                            <div className="col-md-4">
                                <select name="idCustomer" className="form-control" required="required" onChange={this.changeCustomer}>
                                    {this.renderListCustomer()}
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Invoice
                                        </label>
                            <div className="col-md-4">
                                <select name="idInvoice" className="form-control" required="required" onChange={this.changeInvoice}>
                                    {
                                        this.renderListInvoice()
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Bank
                            Account
                                        </label>
                            <div className="col-md-4">
                                <select name="idBank" className="form-control" required="required" onChange={this.change}>
                                </select>
                            </div>
                        </div>
                        <Taxes taxesData = {this.state.taxes} moreTaxCallBack = {this.moreTaxCallBackHandle} deleteCallBack = {this.deleteCallBackHandle} changeCallBack={this.changeCallBackHandle}/>
                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}

export default Optional;