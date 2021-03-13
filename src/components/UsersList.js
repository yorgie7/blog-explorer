import React, { Component } from 'react';
import axios from 'axios';
import { Button, TextField, Box } from '@material-ui/core/';

import UserCard from '../components/cards/UserCard';
import '../App.css';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      ViewUsers: [],
      searchUser: '',
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onClear = this.onClear.bind(this);
  }


  onChange = async event => {
    event.preventDefault();

    await this.setState({ [event.target.name]: event.target.value });
    console.log(this.state.searchUser);

  }
  async onClear() {

    await this.setState({ ViewUsers: this.state.Users, searchUser: '' });

  }

  onSubmit = async event => {
    event.preventDefault();
    if (this.state.searchUser) {
      let key = await this.state.searchUser;
      let filtered = await this.state.Users.filter(function (item) {
        return item.name.match(`${key}`);
      });
      this.setState({ ViewUsers: filtered })
      console.log(filtered);
    } else {
      alert('Please enter name');
    }
  }


  async getUsers() {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    await this.setState({ Users: result.data, ViewUsers: result.data });

  }

  async componentDidMount() {

    this.setState({ isLoading: true });
    await this.getUsers();
    this.setState({ isLoading: false });

  }
  render() {
    const { ViewUsers, isLoading, Users } = this.state;
    const inputStyle = { display: 'flex', alignItems: 'center', height: '45px', justifyContent: 'center', padding: '25px 0' };
    const formStyle = { display: 'flex', width: '340px', justifyContent: 'space-between', alignItems: 'flex-center' }
    return (
      <>
        <div className="App">
          <Box style={inputStyle}>
            <form onSubmit={this.onSubmit} style={formStyle}>

              <TextField onChange={this.onChange} variant="outlined" label='search user'
                name='searchUser' color='primary' value={this.state.searchUser} />

              <Button type='submit'
                color="primary"
                variant="outlined"
                value='Search'
                autoComplete='off' onClick={this.onSubmit}>Search</Button>
            </form>
          </Box>
          {ViewUsers.length < Users.length &&
            <Button color='secondary' onClick={this.onClear}>Clear Search</Button>}
        </div>

        <div className='UserCardAlign'>
          {
            !isLoading && ViewUsers ?
              ViewUsers.map(user => <UserCard key={user.id} user={user} />)
              :
              <h3> loading....</h3>
          }

        </div>
      </>
    );
  }
}

export default UserList;