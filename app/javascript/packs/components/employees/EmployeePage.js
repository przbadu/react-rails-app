import axios from 'axios';
import React, { Component } from 'react';

import EmployeeRow from './EmployeeRow';
import AddEmployee from './AddEmployee';

class EmployeePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      manager: false,
      employees: [],
    };

    this.onChange = this.onChange.bind(this);
    this.createEmployee = this.createEmployee.bind(this);
  }

  componentDidMount() {
    axios
      .get('/employees.json')
      .then(response => this.setState({ employees: response.data }))
      .catch(error => console.log(error));
  }

  onChange(e) {
    var value = e.target.value;

    if (e.target.name === 'manager') {
      value = !this.state.manager;
    }

    this.setState({ [e.target.name]: value });
  }

  createEmployee() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="employee-page">
        <h1>Employees</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Manager?</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <AddEmployee
              employee={this.state.employee}
              onChange={this.onChange}
              onClick={this.createEmployee}
            />
            {this.state.employees.map(employee => (
              <EmployeeRow key={employee.id} employee={employee} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeePage;
