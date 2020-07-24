import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import myAxios from '../../myAxios';
import FontAwesome from 'react-fontawesome';
import { confirmAlert } from 'react-confirm-alert';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Skeleton } from 'antd';
import { Spinner } from 'reactstrap';

const limit = 5;
class TblExpenses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            expenses: [],
            page: 1,
            category: 'x',
            startDate: '',
            endDate: ''
        };
    }

    async componentDidMount() {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            myAxios.get('/expenses')
                .then(res => {
                    this.setState({
                        expenses: res.data,
                        loading: false
                    });
                })
                .catch(error => alert("Error"));
        }, 1000);

    }


    btnNextClick = () => {
        if (this.state.expenses.length > this.state.page * limit) {
            this.setState({
                page: this.state.page + 1
            })
        }
    }
    btnPrevClick = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
        }
    }

    btnSearchClick = () => {
        if (this.state.category === 'x') {
            let url = '/expenses/search/from/' + this.state.startDate + '/to/' + this.state.endDate;
            myAxios.get(url)
                .then(res => {
                    this.setState({
                        expenses: res.data,
                        page: 1
                    });
                })
                .catch(error => alert("Error"));
        }
        else {
            this.setState({
                loading: true
            })
            setTimeout(() => {
                const url = '/expenses/search/category/' + this.state.category + '/from/' + this.state.startDate + '/to/' + this.state.endDate;
                myAxios.get(url)
                    .then(res => {
                        this.setState({
                            expenses: res.data,
                            page: 1,
                            loading:false,
                        });
                    })
                    .catch(error => alert("Error"));
            }, 500)

        }
    }

    deleteHandle = (i) => {
        const url = '/expenses/delete/' + this.state.expenses[i].id;
        myAxios.delete(url)
            .then(res => {
                const newList = this.state.expenses;
                newList.splice(i, 1);
                this.setState({
                    expenses: newList,
                    page: 1
                })
            })
            .catch(error => alert("Error"));
    }

    deleteExpenses = (i) => {
        confirmAlert({
            title: 'Confirm',
            message: 'Are you want to delete this Expenses?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => this.deleteHandle(i)
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        });

    }

    renderTbl() {
        const start = (this.state.page - 1) * limit;
        const end = start + limit;
        let tblContent = this.state.expenses.map((expense, i) => {
            if (i >= start && i <= end) {
                return (
                    <tr key={i} >
                        <td scope="row">{expense.date}</td>
                        <td>
                            {/* <a href={'/expenses/detail/' + expense.id}>{expense.no}</a> */}
                            <Link to={'/expenses/detail/' + expense.id}>{expense.no}</Link>
                        </td>
                        <td>{expense.categoryExpenses}</td>
                        <td>{expense.note}</td>
                        <td>{expense.amount} R</td>
                        <td >
                            <FontAwesome
                                className="fa fa-times-circle"
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: 'orangered' }}
                                onClick={() => this.deleteExpenses(i)}
                            />
                        </td>
                    </tr>
                )
            }
        });
        return tblContent;
    }

    renderStatus() {
        var total = this.state.expenses.length;
        if (total % limit > 0) {
            return (<div> Page {this.state.page} / {Math.floor(total / limit) + 1} </div>);
        }
        return (<div> Page {this.state.page} /  {Math.floor(total / limit)} </div>);
    }

    change = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        if (this.state.loading == true) {
            return (
                <div className="container mt-4">
                    <div className="row justify-content-center" style={{paddingTop:"20%"}}>
                        <Spinner color="success">Loading...</Spinner>
                    </div>
                </div>
            );
        }
        else return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <table className="table">
                        <tbody><tr>
                            <th style={{ textAlign: 'right' }}>Category: </th>
                            <td>
                                <select value={this.state.category} name="category" className="form-control" required="required" style={{ borderRadius: '20px' }} onChange={this.change}>
                                    <option value="x">All</option>
                                    <option value="OFFICE_STATIONARIS">Office Stationaries</option>
                                    <option value="BUSSINESS_TRAVELING">Bussiness traveling</option>
                                    <option value="CONVAYANCE">Convayance</option>
                                    <option value="HANIF_MUNSHI_SALARY">Hanif Munshi - Salary</option>
                                    <option value="OFFICE_RENT">Office Rent</option>
                                </select>
                            </td>
                            <th style={{ textAlign: 'right' }}>From: </th>
                            <td>
                                <input type="date" name="startDate" value={this.state.start} className="form-control" style={{ borderRadius: '20px' }} onChange={this.change} />
                            </td>
                            <th style={{ textAlign: 'right' }}>To: </th>
                            <td>
                                <input type="date" name="endDate" value={this.state.end} className="form-control" style={{ borderRadius: '20px' }} onChange={this.change} />
                            </td>
                            <td>
                                <button type="button" className="btn btn-secondary" style={{ borderRadius: '20px' }} onClick={this.btnSearchClick}>Search</button>
                            </td>
                        </tr>
                        </tbody></table>
                    <table className="table mt-2" id="tblEx">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Expenses No</th>
                                <th scope="col">Category</th>
                                <th scope="col">Note</th>
                                <th scope="col">Total</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderTbl()
                            }
                        </tbody>
                    </table>
                    <br />
                    <div className="col-md-5 offset-md-7" id="pagination">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <i className="fa fa-backward" aria-hidden="true" onClick={this.btnPrevClick} />
                                </li>
                                <li className="page-item ml-2">
                                    {this.renderStatus()}
                                </li>
                                <li className="page-item ml-2">
                                    <i className="fa fa-forward" aria-hidden="true" onClick={this.btnNextClick} />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default TblExpenses;