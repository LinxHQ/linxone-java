import React, { Component } from 'react';
import myAxios from '../../../myAxios';
import FontAwesome from 'react-fontawesome';

class TaxItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            taxes : [],
            id : this.props.id,
        }
        
    }

    async componentDidMount(){
        myAxios.get('/tax/get')
        .then(res => {
            this.setState({
                taxes : res.data
            });
        })
        .catch(error => alert("Error"));
    }

    renderListTax(){
        let item = this.state.taxes.map((tax) => {
            return (
            <option value={tax.id}>{tax.value}</option>
            );
        });
        return item;
    }

    change = (e) =>{
        const {name, value} = e.target;
        this.setState({
            [name] : value
        });
        this.props.changeCallBack(this.props.position, e.target.value);
    }

    deleteClick = () =>{
        this.props.deleteCallBack(this.props.position);
    }

    render() {
        return (
            <div className="form-group row">
                <div className="col-md-1 btn btn-light" onClick={this.deleteClick}>
                   <FontAwesome
                        className="fa fa-trash"
                        style={{marginBottom:"90%"}}
                    />
                </div>
                <div className="col-md-4">
                    <select name="id" id="selectInvoice" className="form-control" required="required" onChange={this.change} defaultValue={this.state.id}>
                        {
                            this.renderListTax()
                        }
                    </select>
                </div>
                <div className="col-md-6">
                    <input name="note" type="text" className="form-control" />
                </div>
            </div>
        );
    }
}

export default TaxItem;