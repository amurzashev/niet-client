import React from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';
import InputWrap from '../InputWrap';
import checkInputs from './utils';

const Submit = props => {
  const onClick = () => {
    const areInputsValid = checkInputs(props);
    if (areInputsValid) {
      // proceed to checkout
    } else {
      // show topline error
    }
  };

  return (
    <InputWrap>
      <Input value="Далее" type="button" width="50%" onClick={onClick} />
    </InputWrap>
  );
};

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Submit);
