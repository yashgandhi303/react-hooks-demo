import React from 'react';
import { AppStateContext } from './AppProvider';

const AppContextConsumer = (props: any) => {
  return (
    <AppStateContext.Consumer>
      {context => {
        if (context === undefined) {
          throw new Error('AppStateConsumer must be used within an AppContextProvider');
        }
        return props.children(context);
      }}
    </AppStateContext.Consumer>
  );
};

export default AppContextConsumer;
