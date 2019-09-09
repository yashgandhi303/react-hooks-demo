import React from 'react';
import {Helmet} from 'react-helmet';
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, YAxis, XAxis} from 'recharts';
import {Container, Header} from 'semantic-ui-react';
import {useAppState} from '../providers/AppProvider';
import {IItem} from './ItemCard';
import AddItemForm from '../components/AddItemForm';

const AdminCP: React.FC = () => {
  let stock: IItem[] = [];

  let {
    state: {stockItems},
  } = useAppState();

  if (stockItems && Object.keys(stockItems).length > 0) {
    stock = Object.values(stockItems);
  }

  return (
    <Container>
      <Helmet>
        <title>Carrinho - admin</title>
      </Helmet>

      <AddItemForm />

      <Header as="h2">Store stock: </Header>

      {stock.length > 0 ? (
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
      )}
    </Container>
  );
};

export default AdminCP;
