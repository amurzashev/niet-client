import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 15px;
  cursor: pointer;
`;

const StyledCheckbox = styled.input`
  z-index: 10;
  position: absolute;
  opacity: 0;
`;

const ChildWrap = styled.label`
  padding-left: 25px;
  &:before {
    content: "";
    position: absolute;
    color: ${props => props.tick ? props.theme.colors.primary : props.theme.colors.darkGray};
    left: 0;
    display: inline-block;
    height: 16px;
    width: 16px;
    border: 1px solid;
  }
  &:after {
    content: "";
    position: absolute;
    color: ${props => props.theme.colors.primary};
    left: 0;
    top: 0;
    top: 3px;
    left: 3px;
    opacity: ${props => props.tick ? 1 : 0};
    display: inline-block;
    height: 6px;
    width: 9px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(-45deg);
}
`;

const Checkbox = ({ children, tick, toggleTick }) => (
  <Wrap onClick={() => toggleTick(!tick)}>
    <StyledCheckbox type="checkbox" checked={tick} />
    <ChildWrap tick={tick}>
      {children}
    </ChildWrap>
  </Wrap>
);

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  tick: PropTypes.bool.isRequired,
  toggleTick: PropTypes.func.isRequired,
};
export default Checkbox;
