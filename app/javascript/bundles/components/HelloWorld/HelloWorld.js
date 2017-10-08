import React, { Component } from 'react';

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Hello {{ name }}!</h3>
        <hr />

        <form>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Type your name"
          />
        </form>
      </div>
    );
  }
}

export default HelloWorld;
