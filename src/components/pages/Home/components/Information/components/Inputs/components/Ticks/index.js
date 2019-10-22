/* eslint-disable react/prop-types */
import React from 'react';
import Input from 'components/molecules/Input';
import { connect } from 'react-redux';
import Caption from 'components/atoms/Caption';
import { setRulesTick, setDataTick } from 'duck/actions/client';

const Ticks = ({ client, bindDataTick, bindRulesTick }) => (
  <>
    <Input type="checkbox" tick={client.rulesTick} toggleTick={bindRulesTick}>
      <Caption size="m">Ознакомлен с анкетой</Caption>
    </Input>
    <Input type="checkbox" tick={client.dataTick} toggleTick={bindDataTick}>
      <Caption size="m">Я соглашаюсь на сбор и обработку моих данных</Caption>
    </Input>
  </>
);

const mapStateToProps = state => ({ client: state.client });
const mapDispatchToProps = {
  bindRulesTick: setRulesTick,
  bindDataTick: setDataTick,
};
export default connect(mapStateToProps, mapDispatchToProps)(Ticks);
