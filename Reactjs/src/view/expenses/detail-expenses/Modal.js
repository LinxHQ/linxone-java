import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modal extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        if (this.props.type == 'select') {
            return (
                <Modal isOpen={this.props.show} >
                    <ModalHeader >{this.props.title}</ModalHeader>
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

            );
        }
        return (
            <Modal isOpen={this.props.show} >
                <ModalHeader >{this.props.title}</ModalHeader>
                <ModalBody>
                    <input type={this.props.type} id="inputDate" className="form-control" value={this.props.value} required="required" onClick={this.props.onClick} onChange={this.change} />                    </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.save}>Save</Button>
                    <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default Modal;