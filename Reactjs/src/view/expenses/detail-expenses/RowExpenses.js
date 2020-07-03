import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RowExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value:''
        }
        console.log("-------------state--------------");
        console.log(this.state);
    }

    handleClose = () => {
        this.setState({ show: false })
    }
    handleShow = () => {
        this.setState({ show: true })
    }

    change = (e) => {
        this.setState({
            value : e.target.value
        })
    }

    save = () =>{
        this.setState({
            show:false
        });
        this.props.changeCallBack(this.props.name, this.state.value);
    }

    render() {
        if (this.props.allowEdit === false) {
            return (
                <tr>
                    <th style={{ textAlign: 'left', width: '50%' }}>{this.props.label}</th>
                    <th style={{ textAlign: 'left', width: '50%' }}>{this.props.value}</th>
                </tr>
            );
        }
        if (this.props.type == 'select') {
            return (
                <tr>
                    <th style={{ textAlign: 'left', width: '50%' }}>{this.props.label}</th>
                    <td style={{ textAlign: 'left', width: '50%' }} onClick={this.handleShow}>
                        {this.props.value}
                        <Modal isOpen={this.state.show} >
                            <ModalHeader >Modal title</ModalHeader>
                            <ModalBody>
                                <select id="selectCategory" className="form-control" defaultValue={this.props.value} required="required" onChange={this.change}>
                                    <option value="OFFICE_STATIONARIES">Office Stationaries</option>
                                    <option value="BUSSINESS_TRAVELING">Bussiness traveling</option>
                                    <option value="CONVAYANCE">Convayance</option>
                                    <option value="HANIF_MUNSHI_SALARY">Hanif Munshi - Salary</option>  
                                    <option value="OFFICE_RENT">Office Rent</option>
                                </select>                            
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.save}>Save</Button>
                                <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </td>
                </tr>

            );
        }
        return (
            <tr>
                <th style={{ textAlign: 'left', width: '50%' }}>{this.props.label}</th>
                <td style={{ textAlign: 'left', width: '50%' }} onClick={this.handleShow}>
                    {this.props.value}
                    <Modal isOpen={this.state.show} >
                        <ModalHeader >Modal title</ModalHeader>
                        <ModalBody>
                            <input type={this.props.type} id="inputDate" className="form-control" defaultValue={this.props.value} required="required"  onChange={this.change}/>                    
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.save}>Save</Button>
                            <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </td>
            </tr>
        );
    }
}

export default RowExpenses;