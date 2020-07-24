import React, { Component } from 'react';
import Headers from '../../Component/Header';
import TblExpenses from './TblExpenses';
import myAxios from '../../myAxios';
import { Skeleton } from 'antd';
import { SkeletonTheme } from 'react-loading-skeleton';

class Expenses extends Component {
    constructor(props) {
        super(props);
    }



    btnPrintClick() {

    }

    render() {
        return (
            <div>
                <Headers />
                <div className="container">
                    {/*        Search*/}
                    <div className="row pt-3 pb-0">
                        <div className="col-md-2">
                            <legend className="font-weight-bold" style={{ color: 'green' }}>Expenses</legend>
                        </div>
                        <div className="col-md-2 offset-md-8" style={{ fontSize: 'larger' }}>
                            <a href="/expenses/new" className="secondary">
                                <i className="fa fa-plus" aria-hidden="true" />
                            </a>
                            <a href="#" className="secondary ml-3">
                                <i className="fa fa-print" aria-hidden="true" onClick={this.btnPrintClick()} />
                            </a>
                        </div>
                    </div>
                </div>
                <TblExpenses />
            </div>
        );
    }
}

export default Expenses;