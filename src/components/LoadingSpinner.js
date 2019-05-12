import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const LoadingSpinner = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size='medium'>Loading...</Loader>
      </Dimmer>
    </Segment>
  </div>
);

export default LoadingSpinner;
