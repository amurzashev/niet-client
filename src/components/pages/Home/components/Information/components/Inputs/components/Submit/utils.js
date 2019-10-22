export default props => {
  const { client, car, phone } = props;
  const isClientLoaded = client.name;
  const isCarLoaded = car.vin;
  const isPhoneLoaded = phone.value && !phone.loading;
  const areTicksTrue = client.dataTick && client.rulesTick;
  return isCarLoaded && isClientLoaded && isPhoneLoaded && areTicksTrue;
};
