import React, { Component } from 'react';

const limit = 5;
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [],
            page: 1,
        }
    }

    async componentDidMount(){
        myAxios.get('/expenses')
        .then(res => {
            this.setState({
                expenses : res.data
            });
        })
        .catch(error => alert("Error"));
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
        
    }

    deleteExpenses = () => {

    }

    renderTbl() {
        var start = (this.state.page - 1) * limit + 1;
        var end = start + limit - 1;
        let tblContent = this.state.expenses.map((expense, i) => {
            if (i >= start && i <= end) {
                return (
                    <tr key={i} >
                        <td scope="row">{expense.date}</td>
                        <td><a href="/user/expenses/">{expense.no}</a></td>
                        <td>{expense.categoryExpenses}</td>
                        <td>{expense.note}</td>
                        <td>{expense.amount} R</td>
                        <td><i classname="fa fa-times-circle" aria-hidden="true" style={{ color: 'orangered' }} onClick={this.deleteExpenses(expense.id)} /></td>
                    </tr>
                )
            }
        });
        return tblContent;
    }

    renderStatus() {
        var total = this.state.expenses.length;
        if (total % limit > 0) {
            return (<div> Page {this.state.page} / {Math.floor(total/limit) + 1} </div>);
        }
        return (<div> Page {this.state.page} /  {Math.floor(total/limit)} </div>);
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <table className="table">
                        <tbody><tr>
                            <th style={{ textAlign: 'right' }}>Category: </th>
                            <td>
                                <select id="selectCategory" className="form-control" required="required" style={{ borderRadius: '20px' }}>
                                    <option value={-1}>All</option>
                                    <option value="OFFICE_STATIONARIS">Office Stationaries</option>
                                    <option value="BUSSINESS_TRAVELING">Bussiness traveling</option>
                                    <option value="CONVAYANCE">Convayance</option>
                                    <option value="HANIF_MUNSHI_SALARY">Hanif Munshi - Salary</option>
                                    <option value="OFFICE_RENT">Office Rent</option>
                                </select>
                            </td>
                            <th style={{ textAlign: 'right' }}>From: </th>
                            <td>
                                <input type="date" id="inputFrom" className="form-control" style={{ borderRadius: '20px' }} />
                            </td>
                            <th style={{ textAlign: 'right' }}>To: </th>
                            <td>
                                <input type="date" id="inputTo" className="form-control" style={{ borderRadius: '20px' }} />
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

export default Content;