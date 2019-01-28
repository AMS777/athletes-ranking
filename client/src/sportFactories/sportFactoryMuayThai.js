import React from 'react';
import { Field } from 'react-final-form';

class SportFactoryMuayThai {
  getSpecificFormElements() {
    return (
      <div style={{ margin: '2em' }}>
        <Field name="kos">
          {({ input, meta }) => (
            <div>
              <label className="left">KOs</label>
              <input {...input} type="number" placeholder="KOs" />
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
    if (!values.kos) {
      return 0;
    }
    return values.kos;
  }

  validate(values, errors) {
    if (!values.kos) {
      errors.kos = 'Type a number';
    }
    return errors;
  }
}

export default SportFactoryMuayThai;
