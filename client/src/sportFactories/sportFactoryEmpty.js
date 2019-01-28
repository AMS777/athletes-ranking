class SportFactoryEmpty {
  getSpecificFormElements() {
    return;
  }

  getPrestigePoints(values) {
    return '-';
  }

  validate(values, errors) {
    return errors;
  }
}

export default SportFactoryEmpty;
