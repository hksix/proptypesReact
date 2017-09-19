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
              <div key={user.id}>{user.username}</div>
            )}
            <Provider store={store}>
                <UserForm />
            </Provider>
            </div>
        )
    }
}

export default Members;