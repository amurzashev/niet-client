export default props => {
  const { client, car, phone } = props;
  const isClientLoaded = client.name;
  const isCarLoaded = car.vin;
  const isPhoneLoaded = phone.value && !phone.loading;
  return isCarLoaded && isClientLoaded && isPhoneLoaded;
};
