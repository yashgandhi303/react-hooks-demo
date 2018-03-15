import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BarChart, YAxis, XAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
import { Container, Header /*, Grid, Button, Divider, Flag, Dimmer, Loader*/ } from 'semantic-ui-react';
import AddItemFrom from '../components/AddItemForm';
// import { Link } from 'react-router-dom';


const title = "Stock";

const chartStyle = {
  width: "200px",
  height: "400px",
}
const chartSeries = [
  {
    field: 'stock',
    name: 'Amt of Item',
    color: '#ff7f0e'
  }
];

const x = function(d) { // wtf nb???
  return d.stock;
};


const AdminCP = ({ stock }) => {

  const chartData = stock;
  console.log('stock', stock);

  return (
    <Container>
      <Header as="h2">Store stock: </Header>

      <AddItemFrom />

      <BarChart width={730} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>

      {/* <BarChart width={730} height={250} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart> */}

    </Container>
  );

}

AdminCP.propTypes = {
  stock: PropTypes.array.isRequired,
};

const mapStateToProps = (state /*, ownProps*/) => ({
  stock: state.storeStock.stockItems
});

export default connect(mapStateToProps)(AdminCP);
