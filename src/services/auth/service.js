import { API } from "../../helpers/api.service";

export default {
  login(body) {
    return API.post(`auth/login`, body).then((response) => response);
  },
};
