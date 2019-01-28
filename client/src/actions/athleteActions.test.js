import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { getAthletes } from './athleteActions';
import { GET_ATHLETES } from './types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const athletesMock = [
  { name: 'Ragnar Lothbrok', sport: 'Muay Thai', kos: 5, prestigePoints: 5 },
  {
    name: 'Uthred, son of Uthred',
    sport: 'Athletics',
    olimpicRecords: 2,
    prestigePoints: 8,
  },
];

describe('getAthletes action', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('dispatches GET_ATHLETES', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: athletesMock,
      });
    });

    const expectedActions = [{ type: GET_ATHLETES, payload: athletesMock }];

    const store = mockStore({ posts: {} });

    return store.dispatch(getAthletes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
