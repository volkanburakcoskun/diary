import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaGroup from "../common/TextAreaGroup";
import { addPost } from "../../actions/postActions";
class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;
    const postData = {
      text: this.state.text,
      author: user.id
    };

    this.props.addPost(postData);
    this.setState({ text: "" });
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div align="center" className="post-form mb-3">
          <div className="card card-info">
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextAreaGroup
                    placeholder="Create a post"
                    name="text"
                    value={this.state.text}
                    onChange={this.onChange}
                    error={errors.text}
                    style={{ resize: "none" }}
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Diary.propTypes = {
  addPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addPost }
)(Diary);
