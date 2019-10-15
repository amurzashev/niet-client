import React, { useState } from 'react';
import Input from 'components/molecules/Input';
import Caption from 'components/atoms/Caption';

export default () => {
  const [tick, toggleTick] = useState(false);
  const [aggreement, toggleAgreement] = useState(false);
  return (
    <>
      <Input type="checkbox" tick={tick} toggleTick={toggleTick}>
        <Caption size="m">Ознакомлен с анкетой</Caption>
      </Input>
      <Input type="checkbox" tick={aggreement} toggleTick={toggleAgreement}>
        <Caption size="m">Я соглашаюсь на сбор и обработку моих данных</Caption>
      </Input>
    </>
  );
};
