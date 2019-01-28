import React from 'react';
import { create } from 'react-test-renderer';

import { AthleteForm } from './AthleteForm';

test('snapshot', () => {
  const component = create(<AthleteForm />);
  expect(component.toJSON()).toMatchSnapshot();
});

test('snapshot after selecting a sport', () => {
  const component = create(<AthleteForm />);
  const eventMock = { target: { value: 'Athletics' } };
  const formValuesMock = { sport: '' };
  component.getInstance().setSportFactory(eventMock, formValuesMock);
  expect(component.toJSON()).toMatchSnapshot();
});
