import axios from 'axios';
import ReactOnRails from 'react-on-rails';

import EmployeePage from './containers/employees/EmployeePage';

// Set axios header
// Important, otherwise we need to skip this from base controller
axios.defaults.headers.common['X-CSRF-Token'] = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  EmployeePage,
});
