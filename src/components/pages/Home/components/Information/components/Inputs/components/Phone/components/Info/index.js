import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Caption from 'components/atoms/Caption';

const Wrap = styled.div`
  height: 30px;
  width: 100%;
`;

const Info = ({ phone }) => {
  return (
    <Wrap>
      {phone.loading && <Caption size="s">Загрузка</Caption>}
      {phone.error && <Caption size="s" color="error">{phone.error}</Caption>}
    </Wrap>
  );
};

Info.propTypes = {
  phone: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};
const mapStateToProps = state => ({ phone: state.phone });
export default connect(mapStateToProps)(Info);
