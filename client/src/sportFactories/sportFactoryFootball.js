import React from 'react';
import { Field } from 'react-final-form';

class SportFactoryFootball {
  getSpecificFormElements() {
    return (
      <div style={{ margin: '2em' }}>
        <Field name="goals">
          {({ input, meta }) => (
            <div>
              <label className="left">Goals</label>
              <input {...input} type="number" placeholder="Goals" />
              {meta.error && meta.touched && (
                <span className="left red-text">{meta.error}</span>
              )}
            </div>
          )}
        </Field>
      </div>
    );
  }

  getPrestigePoints(values) {
    if (!values.goals) {
      return 0;
    }
    const playersPerTeam = 11;
    return Math.round(values.goals / playersPerTeam);
  }

  validate(values, errors) {
    if (!values.goals) {
      errors.goals = 'Type a number';
    }
    return errors;
  }
}

export default SportFactoryFootball;
