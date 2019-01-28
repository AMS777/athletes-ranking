import React, { Component } from 'react';
import { Link } from '@reach/router';

import AthletesLoader from './AthletesLoader';
import Modal from '../modal/Modal';

class AthleteRanking extends Component {
  sportSpecificData = {
    'Muay Thai': athlete => <p>KOs: {athlete.kos}</p>,
    Athletics: athlete => <p>Olimpic Records: {athlete.olimpicRecords}</p>,
    Football: athlete => <p>Goals: {athlete.goals}</p>,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedAthlete: null,
      showModal: false,
    };
  }

  toggleModal = athlete =>
    this.setState({
      selectedAthlete: athlete,
      showModal: !this.state.showModal,
    });

  getSportSpecificData = athlete => {
    return this.sportSpecificData[athlete.sport](athlete);
  };

  render() {
    const { selectedAthlete, showModal } = this.state;

    const modal = showModal ? (
      <Modal>
        <h4>Athlete</h4>
        <p>Name: {selectedAthlete.name}</p>
        <p>Sport: {selectedAthlete.sport}</p>
        {this.getSportSpecificData(selectedAthlete)}
        <p>Prestige points: {selectedAthlete.prestigePoints}</p>
        <div>
          <button
            onClick={this.toggleModal}
            className="btn waves-effect waves-light black"
          >
            Close
          </button>
        </div>
      </Modal>
    ) : null;

    return (
      <>
        <h1 style={{ fontSize: '2em' }}>Athletes Ranking</h1>

        <AthletesLoader>
          {({ athletes, loading }) => {
            if (loading) {
              return <p>Loading...</p>;
            }
            if (!athletes.length) {
              return <p>Athlete ranking empty.</p>;
            }

            return (
              <>
                <small>(Click on the athletes to view the details)</small>
                <ol
                  style={{
                    paddingLeft: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  {athletes
                    .sort((a, b) => b.prestigePoints - a.prestigePoints)
                    .map((athlete, index) => (
                      // add the index to the key to avoid duplicate names
                      <li
                        key={athlete.name + index}
                        onClick={() => this.toggleModal(athlete)}
                        style={{ cursor: 'pointer' }}
                      >
                        {athlete.name} ({athlete.prestigePoints} pps)
                      </li>
                    ))}
                </ol>
              </>
            );
          }}
        </AthletesLoader>
        <Link to="athlete-form" className="btn waves-effect waves-light black">
          New athlete
        </Link>
        {modal}
      </>
    );
  }
}

export default AthleteRanking;
