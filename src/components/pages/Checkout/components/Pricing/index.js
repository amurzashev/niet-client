/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Caption from 'components/atoms/Caption';
import Input from 'components/molecules/Input';
import { getFinalPrice } from 'duck/actions/pricing';
import { connect } from 'react-redux';

const Pricing = ({ bindFinalPrice, pricing }) => {
  useEffect(() => {
    // step 8.2
    bindFinalPrice();
  }, []);
  if (!pricing.price) return null;
  return (
    <>
      <Caption size="l">Предварительная цена</Caption>
      <Input defaultValue={`${pricing.price} тг`} type="plain" readOnly />
      <Input type="button" value="Оформить" width="50%" />
    </>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = {
  bindFinalPrice: getFinalPrice,
};
export default connect(mapStateToProps, mapDispatchToProps)(Pricing);
