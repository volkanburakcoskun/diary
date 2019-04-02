import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";
import Feed from "./Feed";
import Diary from "./newDiary";
class Dashboard extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.posts) {
      this.setState({ posts: newProps.posts });
    }
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;
    if (posts === null || loading) {
      postContent = "aaa";
    } else {
      postContent = <Feed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Diary />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
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
