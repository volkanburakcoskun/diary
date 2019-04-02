import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePost } from "../../actions/postActions";

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
          </div>
          <div className="col-md-10">
            <p className="lead">{post.body}</p>

            <p className="text-center">{post.author}</p>
            <button
              onClick={this.onDeleteClick.bind(this, post._id)}
              type="button"
              className="btn btn-danger mr-1"
            />
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(Post);
