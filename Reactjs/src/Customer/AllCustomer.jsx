import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'reactstrap';
import { Table, Tag, Spin } from 'antd';
import {EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined} from '@ant-design/icons';
import "./AllCustomer.scss";
import myAxios from '../myAxios';
import { Link } from 'react-router-dom';
import ViewCustomer from './ViewCustomer';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
  
class AllCustomer extends Component {

    viewDetail(customer){

      this.setState({
        customerEdit : customer,
        isEditing : true
      });
    }

    edit(customer){

      this.setState({
        customerEdit : customer,
        isEditing : true
      });
    }

    state = {
        isEditing : false,
        customerEdit : {},
        isLoading : true,
        customers : [],
        columns : [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Registration',
            dataIndex: 'registration',
            key: 'registration',
          },
          {
            title: 'Customer Type',
            key: 'type',
            dataIndex: 'type',
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                  <div onClick = {() => this.edit(record)} className="action"><EditOutlined title = "Edit"/></div>
                  <div onClick = {this.btnDeleteClick} className="action"><DeleteOutlined title = "Delete"/></div>
              </span>
            ),
          },
        ]
    }

    btnDeleteClick = () =>{
      confirmAlert({
          title: 'Confirm',
          message: 'Are you want to delete this Customer?',
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

    async componentDidMount() {
        myAxios.get('/customer/')
        .then(res => {
            const data = res.data;
            this.setState({isLoading :false, customers : data });
        })
        .catch(
            error => console.log(error)
            );
    }

    render() {

        if (this.state.isLoading) {
          return <p><Spin />Loading...</p>;
        }
        else if(this.state.isEditing){
          return <ViewCustomer customer = {this.state.customerEdit}></ViewCustomer>
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="titlePage">Customer</div>
                        <hr className="line"/>
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col md="4">
                        <Link to={"/customer/new"} className="link"><PlusOutlined/>New Customer</Link>
                    </Col>
                </Row>
                <br/>
                <Row>   
                    <Col md="12">
                        <Table 
                            columns={this.state.columns} 
                            dataSource={this.state.customers}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AllCustomer;