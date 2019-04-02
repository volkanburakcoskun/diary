import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  render() {
    const { post, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <br />
            {/* <p className="text-center">{post.author}</p> */}
          </div>
          <div className="col-md-10">
            <p className="lead">{post.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

Post.defaultProps = {
  showActions: true
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Post);
