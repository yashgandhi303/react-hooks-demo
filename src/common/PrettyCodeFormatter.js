import React from 'react';
import PropTypes from 'prop-types';

const PrettyCodeFormatter = ({ data, replacer = null, space = 4 }) => {
  if (!data) {
    return null;
  }
  const dataString = typeof data === "string" ? data : JSON.stringify(data, replacer, space);
  return (
    <pre>
      <code>
        {dataString}
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
