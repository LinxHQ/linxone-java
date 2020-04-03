import React from 'react';
import ReactDOM from 'react-dom';
import NewCustomer from './Customer/NewCustomer';
import AllCustomer from './Customer/AllCustomer';
import Header from './Component/Header';
import Footer from './Component/Footer';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import ViewCustomer from './Customer/ViewCustomer';

ReactDOM.render(
  (<BrowserRouter>
    <div>
      <Route exact path="/customer/new" component={NewCustomer}/>
      <Route exact path="/customer/" component={AllCustomer}/>
      <Route exact path="/customer/view" component={ViewCustomer}/>
    </div>
  </BrowserRouter>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
