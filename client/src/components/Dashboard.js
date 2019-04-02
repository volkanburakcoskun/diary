import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import { connect } from "react-redux";
import { getPosts } from "../actions/postActions";
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      x: 0
    };
  }
  componentDidMount() {
    var posts = this.props.getPosts();
    this.interval = setInterval(() => {
      posts = this.props.getPosts();
    }, 3000);
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;
    if (posts === null || (loading && this.state.x === 0)) {
      this.state.x++;
      postContent = "aaa";
    } else {
      return posts.map(post => <Post key={post._id} post={post} />);
    }

    return <div>Aaaaaaa</div>;
  }
}

Dashboard.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Dashboard);
