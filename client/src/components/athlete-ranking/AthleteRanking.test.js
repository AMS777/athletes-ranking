import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';

import store from '../../store';

import AthleteRanking from './AthleteRanking';

test('snapshot', () => {
  const component = create(
    <Provider store={store}>
      <AthleteRanking />
    </Provider>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
