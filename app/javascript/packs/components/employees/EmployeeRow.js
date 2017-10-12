import React from 'react';
import PropTypes from 'prop-types';

function EmployeeRow({ employee, removeEmployee }) {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.manager ? <span>&#x2713;</span> : ''}</td>
      <td>
        <a onClick={removeEmployee}>
          <i className="glyphicon glyphicon-trash text-danger" />
        </a>
      </td>
    </tr>
  );
}

EmployeeRow.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeRow;
