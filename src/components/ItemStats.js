import React from 'react';
import { Segment, Statistic } from 'semantic-ui-react';

const ItemStats = () => (
  <Segment inverted>
    <Statistic.Group inverted>
      <Statistic>
        <Statistic.Value>{Math.floor(Math.random() * 3170) + 123}</Statistic.Value>
        <Statistic.Label>Orders</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{Math.floor(Math.random() * 7182) + 714}</Statistic.Value>
        <Statistic.Label>Item Views</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>{Math.floor(Math.random() * 1816) + 21}</Statistic.Value>
        <Statistic.Label>Members Ordered</Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </Segment>
);

export default ItemStats;
