import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, YAxis, XAxis } from 'recharts';
import { Container, Header } from 'semantic-ui-react';
// import AddItemForm from '../components/AddItemForm';

class AdminCP extends Component {
  componentDidMount() {
    this.props.getItemsInStock();
  }
  render() {
    const { stock } = this.props;
    return (
      <Container>
        {/* <AddItemForm /> */}
        <Header as="h2">Store stock: </Header>

        {
          stock && stock.length ? (
            <BarChart width={730} height={250} data={stock}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stock" fill="#8884d8" />
            </BarChart>
          ) : (
            <p>No items in stock.</p>
          )
        }

      </Container>
    )
  }
}

AdminCP.propTypes = {
  stock: PropTypes.array.isRequired,
};

export default AdminCP;
