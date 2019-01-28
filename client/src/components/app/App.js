import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import store from '../../store';

import 'materialize-css/dist/css/materialize.min.css';

import PageHeader from '../page-layout/PageHeader';
import PageFooter from '../page-layout/PageFooter';
import AthleteRanking from '../athlete-ranking/AthleteRanking';
import AthleteForm from '../athlete-form/AthleteForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <PageHeader />
          <main className="container center">
            <Router>
              <AthleteRanking path="/" />
              <AthleteForm path="athlete-form" />
            </Router>
          </main>
          <PageFooter />
        </div>
      </Provider>
    );
  }
}

export default App;
