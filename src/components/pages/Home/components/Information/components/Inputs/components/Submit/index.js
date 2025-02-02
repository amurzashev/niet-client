import React from 'react';
import Input from 'components/molecules/Input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import toggleTopline from 'duck/actions/topline';
import InputWrap from '../InputWrap';
import checkInputs from './utils';

const Submit = props => {
  const onClick = () => {
    const { bindTopline, history } = props;
    const areInputsValid = checkInputs(props);
    if (areInputsValid) {
      // proceed to checkout
      history.push('/checkout');
    } else {
      // show topline error
      bindTopline('Заполните все поля и нужные галочки');
    }
  };

  return (
    <InputWrap>
      <Input value="Далее" type="button" width="50%" onClick={onClick} />
    </InputWrap>
  );
};

Submit.propTypes = {
  bindTopline: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindTopline: toggleTopline,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Submit));
