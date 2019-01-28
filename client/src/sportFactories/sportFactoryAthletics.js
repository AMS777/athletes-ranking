import React from 'react';
import { Field } from 'react-final-form';

class SportFactoryAthletics {
  getSpecificFormElements() {
    return (
      <div style={{ margin: '2em' }}>
        <Field name="olimpicRecords">
          {({ input, meta }) => (
            <div>
              <label className="left">Olimpic Records</label>
              <input {...input} type="number" placeholder="Olimpic Records" />
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
    if (!values.olimpicRecords) {
      return 0;
    }
    const yearsOlimpicGames = 4;
    return values.olimpicRecords * yearsOlimpicGames;
  }

  validate(values, errors) {
    if (!values.olimpicRecords) {
      errors.olimpicRecords = 'Type a number';
    }
    return errors;
  }
}

export default SportFactoryAthletics;
