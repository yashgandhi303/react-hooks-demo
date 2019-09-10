import React, {useState} from 'react';
import {Form, Input, TextArea, Button} from 'semantic-ui-react';
import {useAppState} from '../providers/AppProvider';

interface IState {
  name: string;
  stock: number;
  description: string;
}

const AddItemForm = () => {
  const [state, setState] = useState<IState>({
    name: '',
    stock: 1,
    description: '',
  });

  let {addItemToStock} = useAppState();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setState(state => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const item = state;
    // TODO: need to validate here (joi??)

    if (item.stock === 0) return; // need to display something here

    addItemToStock(item);
    setState({name: '', stock: 1, description: ''});
  };

  return (
    <Form onSubmit={handleSubmit} key="addItemForm-form">
      <Form.Field
        required
        control={Input}
        name="name"
        value={state.name}
        label="Name"
        placeholder="Name"
        onChange={handleChange}
      />
      <Form.Field
        required
        label="Stock"
        name="stock"
        value={state.stock}
        control="input"
        type="number"
        max={99}
        min={1}
        onChange={handleChange}
      />
      <Form.Field
        id="form-textarea-control-description"
        name="description"
        control={TextArea}
        label="Description"
        placeholder="Description"
        value={state.description}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AddItemForm;
