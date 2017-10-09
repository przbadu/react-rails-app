import axios from 'axios';
import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow';

class EmployeePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    axios
      .get('/employees.json')
      .then(response => this.setState({ employees: response.data }))
      .catch(error => console.log(error));
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
