import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const LoadingSpinner = () => (
  <Segment>
    <Dimmer active inverted>
      <Loader size='medium'>Loading...</Loader>
    </Dimmer>
  </Segment>
);

export default LoadingSpinner;
