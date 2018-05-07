import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React from 'react';

import * as testActions from '../../actions/test';

const mapStateToProps = state => ({
  test: state.test.data
});

const mapDispatchToProps = dispatch => ({
  testActions: bindActionCreators(testActions, dispatch)
});

class Test extends React.Component {
  static propTypes = {
    testActions: PropTypes.object,
    test: PropTypes.array
  }


  componentWillMount = () => {
    this.props.testActions.getTest();
  };

  render() {
    return (
      <div>
        Testing
      </div>
    );
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Test);