import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import routes from './routes';

const body = document.getElementById('body');

render(
  <AppContainer children={routes} />,
  body
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    render(
      <AppContainer children={routes} />,
      body
    );
  });
}
