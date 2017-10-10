import React from 'react';

function AddEmployee({ name, email, manager, onChange, onClick }) {
  return (
    <tr>
      <td>
        <input
          value={name}
          name="name"
          type="text"
          placeholder="Your name"
          onChange={onChange}
        />
      </td>

      <td>
        <input
          value={email}
          name="email"
          type="email"
          placeholder="you@example.com"
          onChange={onChange}
        />
      </td>

      <td>
        <input
          value={manager}
          name="manager"
          type="checkbox"
          onChange={onChange}
          checked={manager}
        />
      </td>
      <td>
        <button onClick={onClick}>Save</button>
      </td>
    </tr>
  );
}

export default AddEmployee;
