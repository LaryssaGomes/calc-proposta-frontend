import axios from "axios";

class API {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  getOptions() {
    return {};
  }

  get(url, callback) {
    this.api
      .get(url, this.getOptions())
      .then((res) => {
        if (callback) callback(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }
}

export default API;
