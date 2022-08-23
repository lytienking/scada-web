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
};

export default scadaApi;
