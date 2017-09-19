import React from 'react';
import { Control, Form, actions } from 'react-redux-form';
// var express = require('express');
// var router = express.Router();
// const db = require('./db');

class UserForm extends React.Component {
    handleSubmit(user) {
      // Do whatever you like in here.
      // If you connect the UserForm to the Redux store,
      // you can dispatch actions such as:
      // dispatch(actions.submit('user', somePromise));
      // etc.
    }
    render() {
      return (
        <Form
          model="user"
          onSubmit={(user) => this.handleSubmit(user)}
        >
          <label htmlFor="user.firstName">First name:</label>
          <Control.text model="user.firstName" id="user.firstName" />
  
          <label htmlFor="user.lastName">Last name:</label>
          <Control.text model="user.lastName" id="user.lastName" />
  
          <button type="submit">
            Update!
          </button>
        </Form>
      );
    }
  }
  
  export default UserForm;
  