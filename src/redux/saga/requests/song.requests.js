import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";
export const request = {
  getSong: () =>
    axios.request({
      method: "get",
      url: `/api`,
    }),
  getStatics: () =>
    axios.request({
      method: "get",
      url: `/api/statics`,
    }),
  getGenre: () =>
    axios.request({
      method: "get",
      url: `/api/genre`,
    }),
  addSong: (data) =>
    axios.request({
      method: "post",
      url: `/api`,
      data,
    }),
  editSong: (id, data) =>
    axios.request({
      method: "put",
      url: `/api/${id}`,
      data,
    }),
  deleteSong: (id) =>
    axios.request({
      method: "delete",
      url: `/api/${id}`,
    }),
};
