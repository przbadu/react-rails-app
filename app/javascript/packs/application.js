import ReactOnRails from 'react-on-rails';

import EmployeePage from './components/employees/EmployeePage';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  EmployeePage,
});
