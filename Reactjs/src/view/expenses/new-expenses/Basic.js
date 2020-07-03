import React, { Component, useState } from 'react';
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import { FontSizeOutlined } from '@ant-design/icons';

class Basic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            no : this.props.no,
            category : this.props.category,
            date : this.props.date,
            amount : this.props.amount,
            note : this.props.note,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    change = (event) => {
        this.props.basicCallBack(event);
    }

    render() {

        return (
            <Card>
                <CardHeader onClick={this.toggle} style={{ backgroundColor: '#28a745' }}>
                    <FontAwesome
                        className="fa fa-info-circle"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', fontSize:'lager', fontWeight:'bold' }}
                    >Basic Information</FontAwesome>

                </CardHeader>
                <Collapse isOpen={this.state.isOpen}>
                    <CardBody>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Expenses No
                            *
                                        </label>
                            <div className="col-md-4">
                                <input name ="no" type="text" className="form-control" id="inputNo" defaultValue="E-20200000026" onChange={this.change}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Category *
                                        </label>
                            <div className="col-md-4">
                                <select name="category" id="selectCategory" className="form-control" required="required" onChange={this.change}>
                                    <option value={0}>Office Stationaries</option>
                                    <option value={1}>Bussiness traveling</option>
                                    <option value={2}>Convayance</option>
                                    <option value={3}>Hanif Munshi - Salary</option>
                                    <option value={4}>Office Rent</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Date
                                        *</label>
                            <div className="col-md-4">
                                <input name="date" type="date" className="form-control" id="inputDate" onChange={this.change}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Amount
                            (incl. Tax) *
                                        </label>
                            <div className="col-md-4">
                                <input name="amount" type="number" className="form-control" id="inputAmount" onChange={this.change} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Note</label>
                            <div className="col-md-4">
                                <textarea name="note" type="text" className="form-control" id="inputNote" style={{ height: '120%' }} defaultValue={""} onChange={this.change} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Attachments</label>
                            <div className="col-md-4">
                                <input type="file" id="inputAttachments" onChange={this.change} />
                            </div>
                        </div>
                    </CardBody>
                </Collapse>
            </Card>
        );
    }
}

export default Basic;