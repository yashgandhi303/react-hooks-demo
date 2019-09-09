import React, {useState} from 'react';
// props to https://github.com/btholt/complete-intro-to-react-v5/blob/master/src/useDropdown.js for the inspiration

interface IOptions {
  type?: string;
}

const useInput = (label: string, htmlId: string, defaultState: any, options: IOptions = {}) => {
  const [state, setState] = useState(defaultState);
  // TODO - refactor?? not sure if I like this
  function updateState(e: React.ChangeEvent<HTMLInputElement>) {
    if (options.type === 'number') {
      setState(parseInt(e.target.value));
    } else {
      setState(e.target.value);
    }
  }
  const CustomInput = () => (
    <label htmlFor={htmlId}>
      {label}
      <input
        id={htmlId}
        type={options.type || 'text'}
        value={state}
        onChange={updateState}
        onBlur={updateState}
        {...options}
      />
    </label>
  );
  return [state, CustomInput, updateState];
};

export default useInput;
