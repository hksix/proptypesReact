import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import store from './store.js';

import UserForm from './UserForm.js';

class Members extends Component{
    state = {users: []}
      componentDidMount() {
        fetch('/users')
          .then(res => res.json())
          .then(users => this.setState({ users }));
      }
    render(){
        return(
            <div>
            <h1>Users</h1>
            {this.state.users.map(user =>
              <div key={user.memid}>
                  <ul>
                    <li>{user.firstname} {user.surname}</li>
                    <li>Member ID: {user.memid}</li>
                    <li>Address: {user.address}</li>
                    <li>Zip-code: {user.zipcode}</li>
                    <li>Telephone: {user.telephone}</li>
                    <li>Join Date: {user.joindate}</li>
                   </ul>
                </div>
            )}
            <Provider store={store}>
                <UserForm />
            </Provider>
            </div>
        )
    }
}

export default Members;