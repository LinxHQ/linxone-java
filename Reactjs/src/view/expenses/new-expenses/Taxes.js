import React, { Component } from 'react';
import TaxItem from './TaxItem';

class Taxes extends Component {
    constructor(props){
        super(props);
    }

    moreTaxClick = () => {
        this.props.moreTaxCallBack();
    }

    deleteCallBackHandle=(i)=>{
        this.props.deleteCallBack(i);
    }

    changeCallBackHandle=(position,id)=>{
        this.props.changeCallBack(position,id);
    }

    renderTaxes=()=>{
        const result = this.props.taxesData.map((tax,index) => {
            return <TaxItem id={tax.id}  position={index} deleteCallBack={this.deleteCallBackHandle} changeCallBack={this.changeCallBackHandle}/>
        });
        return result;
    }

    

    render() {
        return (
            <div>
                <div id="listTax">
                    <div className="form-group row" id="tax_1">
                        <label className="col-sm-2 col-form-label" style={{ textAlign: 'right' }}>Taxes</label>
                        <div className="col-md-6">
                            {this.renderTaxes()}
                        </div>
                        <div className="col-md-2">
                            <a href="#" onClick={this.moreTaxClick} ><i className="fa fa-plus-circle" aria-hidden="true" />More tax</a>
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Taxes;