import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BarChart, YAxis, XAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
import { Container, Header /*, Divider */ } from 'semantic-ui-react';
// import AddItemForm from '../components/AddItemForm';

class AdminCP extends Component {
  
  componentDidMount() {
    // call to fetch stockItems for redux state
    this.props.getItemsInStock();
  }
  
  render() {
    const { stock } = this.props;
    const chartData = stock;
    
    return (
      <Container>
  
        {/* <AddItemForm /> */}
  
        {/* <Divider /> */}

        <Header as="h2">Store stock: </Header>

        <BarChart width={730} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="stock" fill="#8884d8" />
        </BarChart>
  
      </Container>
    )
  }
}

AdminCP.propTypes = {
  stock: PropTypes.array.isRequired,
};

export default AdminCP;