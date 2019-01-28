import reducers from '../reducers';

test('reducer GET_ATHLETES', () => {
  const athletesMock = [
    {
      name: 'Ragnar Lothbrok',
      sport: 'Muay Thai',
      kos: 5,
      prestigePoints: 5,
    },
    {
      name: 'Uthred, son of Uthred',
      sport: 'Athletics',
      olimpicRecords: 2,
      prestigePoints: 8,
    },
  ];

  const state = reducers(
    { athlete: { athletes: [] } },
    {
      type: 'GET_ATHLETES',
      payload: athletesMock,
    },
  );

  expect(state).toEqual({
    athlete: {
      athletes: athletesMock,
    },
  });
});

test('reducer ADD_ATHLETE', () => {
  const athlete = { name: 'Ragnar Lothbrok', sport: 'Muay Thai' };

  const state = reducers(
    { athlete: { athletes: [] } },
    { type: 'ADD_ATHLETE', payload: athlete },
  );

  expect(state).toEqual({
    athlete: { athletes: [athlete] },
  });
});
