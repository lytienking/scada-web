import axiosClient from "./axiosClient";

const scadaApi = {
  getInverter: () => {
    const url = "/inverter";
    return axiosClient.get(url);
  },
  getSystem: () => {
    const url = "/system";
    return axiosClient.get(url);
  },
  getConnect: () => {
    const url = "/connect";
    return axiosClient.get(url);
  },
  insertRemote1: (body) => {
    const url = "/remote1";
    return axiosClient.post(url, body);
  },
  insertRemote2: (body) => {
    const url = "/remote2";
    return axiosClient.post(url, body);
  },
};

export default scadaApi;
