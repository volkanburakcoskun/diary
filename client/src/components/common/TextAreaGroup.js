import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  rows
}) => {
  return (
    <div className="form-group">
      <textarea
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextAreaGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

TextAreaGroup.defaultProps = {
  type: "text"
};

export default TextAreaGroup;
