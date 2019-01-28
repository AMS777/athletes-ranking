import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { navigate } from '@reach/router';

import { addAthlete } from '../../actions/athleteActions';
import SportFactoryEmpty from '../../sportFactories/sportFactoryEmpty';
import SportFactoryMuayThai from '../../sportFactories/sportFactoryMuayThai';
import SportFactoryAthletics from '../../sportFactories/sportFactoryAthletics';
import SportFactoryFootball from '../../sportFactories/sportFactoryFootball';

const focusOnError = createDecorator();

// export component without the Redux decorator for testing purposes
export class AthleteForm extends Component {
  sportStrategies = {
    '': () => this.setState({ sportFactory: new SportFactoryEmpty() }),
    'Muay Thai': () =>
      this.setState({ sportFactory: new SportFactoryMuayThai() }),
    Athletics: () =>
      this.setState({ sportFactory: new SportFactoryAthletics() }),
    Football: () => this.setState({ sportFactory: new SportFactoryFootball() }),
  };

  constructor(props) {
    super(props);
    this.state = {
      sportFactory: new SportFactoryEmpty(),
    };
  }

  setSportFactory = (event, values) => {
    const sport = event.target.value;
    values.sport = sport;
    this.sportStrategies[sport]();
  };

  onSubmit = values => {
    values.prestigePoints = this.state.sportFactory.getPrestigePoints(values);

    this.props.addAthlete(values);

    navigate('/');
  };

  validate = values => {
    let errors = {};
    if (!values.name) {
      errors.name = 'Type a name';
    }
    if (!values.sport) {
      errors.sport = 'Select a sport';
    }
    errors = this.state.sportFactory.validate(values, errors);
    return errors;
  };

  render() {
    return (
      <>
        <h1 style={{ fontSize: '2em' }}>Add athlete to the ranking</h1>
        <Form
          onSubmit={this.onSubmit}
          decorators={[focusOnError]}
          validate={this.validate}
        >
          {({ handleSubmit, reset, submitting, pristine, values }) => (
            <form className="container" onSubmit={handleSubmit}>
              <div style={{ margin: '2em' }}>
                <Field name="name">
                  {({ input, meta }) => (
                    <div>
                      <label className="left">Name</label>
                      <input {...input} type="text" placeholder="Name" />
                      {meta.error && meta.touched && (
                        <span className="left red-text">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              <div style={{ margin: '2em' }}>
                <Field name="sport">
                  {({ input, meta }) => (
                    <div>
                      <label className="left">Sport</label>
                      <select
                        {...input}
                        value={values.sport}
                        onChange={event => this.setSportFactory(event, values)}
                        style={{ display: 'block' }}
                      >
                        <option />
                        <option value="Muay Thai">Muay Thai</option>
                        <option value="Athletics">Athletics</option>
                        <option value="Football">Football</option>
                      </select>
                      {meta.error && meta.touched && (
                        <span className="left red-text">{meta.error}</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
              {this.state.sportFactory.getSpecificFormElements()}
              <div style={{ margin: '2em' }}>
                <strong>
                  Prestige Points:{' '}
                  {this.state.sportFactory.getPrestigePoints(values)}
                </strong>
              </div>
              <div>
                <Link to="/" className="btn-flat waves-effect waves-light">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="btn waves-effect waves-light black"
                >
                  Add athlete
                </button>
              </div>
            </form>
          )}
        </Form>
      </>
    );
  }
}

AthleteForm.propTypes = {
  // addAthlete function may not be required because of the
  // testing without Redux
  addAthlete: PropTypes.func,
};

const mapStateToProps = null;

export default connect(
  mapStateToProps,
  { addAthlete },
)(AthleteForm);
