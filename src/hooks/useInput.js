import React, { useState } from "react";
import { Input } from 'semantic-ui-react';

// props to https://github.com/btholt/complete-intro-to-react-v5/blob/master/src/useDropdown.js for the inspiration

const useInput = (label, htmlId, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  // TODO - refactor?? not sure if I like this
  function updateState(value) {
    if (options.type === "number") {
      setState(parseInt(value));
    } else {
      setState(value);
    }
  }
  const CustomInput = () => (
    <label htmlFor={htmlId}>
      {label}
      <Input
        id={htmlId}
        type={options.type || "text"}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        {...options}
      />
    </label>
  );
  return [state, CustomInput, updateState];
};

export default useInput;
