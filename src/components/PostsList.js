import React, { Component } from 'react';

import axios from 'axios';
import PostCard from './cards/PostCard';
import { Button, TextField, Box } from '@material-ui/core/';


class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPost: '',
      renderPosts: [],
      Posts: [],
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
  }


  onChange = async event => {
    event.preventDefault();
    await this.setState({ searchPost: event.target.value });
  }

  async onClear() {
    await this.setState({ renderPosts: this.state.Posts, searchPost: '' });
  }

  onSubmit = async event => {
    event.preventDefault();

    if (this.state.searchPost) {
      let key = await this.state.searchPost;

      let filtered = await this.state.Posts.filter(function (item) {
        return item.body.match(key);
      });

      this.setState({ renderPosts: [...filtered] });
    } else {
      alert('Please enter some text');
    }
  }

  async getPosts() {
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    this.setState({ Posts: result.data, renderPosts: result.data });
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    await this.getPosts();
    this.setState({ isLoading: false });
  }

  render() {
    const { renderPosts, isLoading, searchPost, Posts } = this.state;
    const inputStyle = { display: 'flex', alignItems: 'center', height: '45px', justifyContent: 'center', padding: '25px 0' };
    const formStyle = { display: 'flex', width: '340px', justifyContent: 'space-between', alignItems: 'flex-center' }

    return (
      <>
        <div className="App">
          <Box style={inputStyle}>
            <form onSubmit={this.onSubmit} style={formStyle}>
              <TextField label="Search by title & content" variant="outlined"
                onChange={this.onChange}
                name='searchPost' color='primary'
                value={searchPost} />

              <Button type='submit'
                color="primary"
                variant="outlined"
                value='Search'
                autoComplete='off'
                onClick={this.onSubmit}>
                Search
              </Button>
            </form>
          </Box>
          {
            renderPosts.length < Posts.length ?
              <Button color='secondary' onClick={this.onClear}>Clear Search</Button>
              : null}
        </div>

        <div className="PostCardAlign">
          {
            !isLoading && renderPosts ?
              renderPosts.map(post => <PostCard key={post.id} post={post} />)
              :
              (
                <div className="App">
                  <h2>Loading...</h2>
                </div>)

          }
        </div>
      </>

    );
  }
}

export default PostsList;