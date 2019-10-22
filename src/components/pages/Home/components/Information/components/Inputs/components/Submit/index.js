import React from 'react';
import Input from 'components/molecules/Input';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggleTopline from 'duck/actions/topline';
import InputWrap from '../InputWrap';
import checkInputs from './utils';

const Submit = props => {
  const onClick = () => {
    const { bindTopline } = props;
    const areInputsValid = checkInputs(props);
    if (areInputsValid) {
      // proceed to checkout
    } else {
      // show topline error
      bindTopline('Заполните все поля');
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
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindTopline: toggleTopline,
};
export default connect(mapStateToProps, mapDispatchToProps)(Submit);
