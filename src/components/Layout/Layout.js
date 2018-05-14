import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import React from 'react';

import s from './layout.scss';

import * as testActions from '../../actions/test';

const mapStateToProps = state => ({
  test: state.test.data
});

const mapDispatchToProps = dispatch => ({
  testActions: bindActionCreators(testActions, dispatch)
});

class Layout extends React.Component {
  static propTypes = {
    testActions: PropTypes.object,
    test: PropTypes.array
  }


  componentWillMount = () => {
    this.props.testActions.getTest();
  };

  render() {
    return (
      <div className={s.container}>
        Layout test
      </div>
    );
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Layout);