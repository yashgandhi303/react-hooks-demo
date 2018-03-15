import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BarChart, YAxis, XAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
import { Container, Header, Divider /*, Grid, Button, Flag, Dimmer, Loader*/ } from 'semantic-ui-react';
import AddItemFrom from '../components/AddItemForm';

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
  
        <AddItemFrom />
  
        <Divider />

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

const mapStateToProps = (state /*, ownProps*/) => ({
  stock: state.storeStock.stockItems
});

const mapDispatchToProps = (dispatch) => ({
  getItemsInStock: () => {
    dispatch({ type: 'FETCH_CART_ITEMS' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminCP);


