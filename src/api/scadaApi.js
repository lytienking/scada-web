import axiosClient from "./axiosClient";

const scadaApi = {
  update: (params) => {
    const url = "/create";
    return axiosClient.post(url, params);
  },
  getAll: () => {
    const url = "/";
    return axiosClient.get(url);
  }
};

export default scadaApi;
