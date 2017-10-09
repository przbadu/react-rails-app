import React from 'react';
import PropTypes from 'prop-types';

function EmployeeRow({ employee }) {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.manager}</td>
    </tr>
  );
}

EmployeeRow.propTypes = {
  employee: PropTypes.object,
};

export default EmployeeRow;
