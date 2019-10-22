import React from 'react';
import Caption from 'components/atoms/Caption';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { nameFormatting } from 'components/molecules/Input/components/Info/utils';
import Input from 'components/molecules/Input';
import { removeClient } from 'duck/actions/additional';

const Wrap = styled.div`
  margin: 20px 0;
`;

const DriverWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > p {
    width: 100%;
  }
  margin-bottom: 20px;
  padding-left: 20px;
  background: ${props => props.theme.colors.darkGray};
  ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    padding: initial;
    & > p {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Drivers = ({ additional, bindClient }) => {
  const onClick = iin => {
    bindClient(iin);
  };

  return (
    <Wrap>
      {additional.clients.map(client => (
        <DriverWrap key={client.iin}>
          <Caption size="s">{nameFormatting(client.name)}</Caption>
          <Input type="button" width="50%" value="Удалить водителя" onClick={() => onClick(client.iin)} />
        </DriverWrap>
      ))}
    </Wrap>
  );
};

Drivers.propTypes = {
  additional: PropTypes.shape({
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        iin: PropTypes.string,
        name: PropTypes.string,
        privilege: PropTypes.bool,
      }),
    ),
  }).isRequired,
  bindClient: PropTypes.func.isRequired,
};
const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindClient: removeClient,
};
export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
