import { apiRequest } from '.';


export default () => {
  apiRequest.post('ping')
    .then(res => console.log(res))
    .catch(er => console.log(er.response));
};
