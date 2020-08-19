import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

import AddAddressComponent from './components/AddAddressComponent';
import car from './images/laptop.jpg';

function App() {
  return (
    <div className="container">
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch> 
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
            <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>

            {/* <Route path="/add-address/:id" component={AddAddressComponent}></Route> */}


          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>

  );
}

export default App;
