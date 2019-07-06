import React from 'react';
import PropTypes from 'prop-types';

const PrettyCodeFormatter = ({ data, replacer = null, space = 4 }) => {
  if (!data) {
    return null;
  }
  return (
    <pre>
      <code>
        {JSON.stringify(data, replacer, space)}
      </code>
    </pre>
  );
};

PrettyCodeFormatter.propTypes = {
  data: PropTypes.object.isRequired,
  replacer: PropTypes.func,
  space: PropTypes.number,
};

export default PrettyCodeFormatter;