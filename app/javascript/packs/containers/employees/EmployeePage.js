import axios from 'axios';
import React, { Component } from 'react';

import EmployeeRow from '../../components/employees/EmployeeRow';
import AddEmployee from '../../components/employees/AddEmployee';

class EmployeePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      manager: false,
      employees: [],
      errors: [],
    };

    this.onChange = this.onChange.bind(this);
    this.createEmployee = this.createEmployee.bind(this);
  }

  componentDidMount() {
    axios
      .get('/api/v1/employees')
      .then(response => this.setState({ employees: response.data }))
      .catch(errors => this.setState({ errors: errors.response.data }));
  }

  onChange(e) {
    var value = e.target.value;

    if (e.target.name === 'manager') {
      value = !this.state.manager;
    }

    this.setState({ [e.target.name]: value });
  }

  createEmployee() {
    const { name, email, manager } = this.state;

    axios
      .post('/api/v1/employees', {
        employee: {
          name,
          email,
          manager,
        },
      })
      .then(response => {
        this.setState({
          employees: [...this.state.employees, response.data],
          name: '',
          email: '',
          manager: '',
        });
      })
      .catch(errors => {
        if (errors.response && errors.response.data) {
          this.setState({ errors: errors.response.data });
        } else {
          this.setState({ errors: errors.message });
        }
      });
  }

  removeEmployee() {
    console.log('remove employee');
  }

  render() {
    const { employees, name, email, manager, errors } = this.state;
    return (
      <div className="employee-page">
        <h1>Employees</h1>

        <table className="table table-striped">
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
              name={name}
              email={email}
              manager={manager}
              onChange={this.onChange}
              onClick={this.createEmployee}
              errors={errors}
            />

            {employees.map(employee => (
              <EmployeeRow
                key={employee.id}
                employee={employee}
                removeEmployee={this.removeEmployee}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeePage;
