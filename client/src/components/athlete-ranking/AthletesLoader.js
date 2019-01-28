import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAthletes } from '../../actions/athleteActions';

class AthletesLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      athletes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await this.props.getAthletes();
    setTimeout(
      () =>
        this.setState({
          athletes: this.props.athlete.athletes,
          loading: false,
        }),
      1000,
    );
  }

  render() {
    return this.props.children(this.state);
  }
}

AthletesLoader.propTypes = {
  getAthletes: PropTypes.func.isRequired,
  athlete: PropTypes.object.isRequired,
};

const mapStateToProps = ({ athlete }) => ({ athlete });

export default connect(
  mapStateToProps,
  { getAthletes },
)(AthletesLoader);
