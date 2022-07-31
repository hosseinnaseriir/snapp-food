import axios from "axios";

const BASE_URL = `https://snappfood.ir/mobile/v3/restaurant`;

export const getVendorsList = (query) => {
  const { page, page_size, lat, long } = query;
  return axios.get(
    `${BASE_URL}/vendors-list?page=${page}&lat=${lat}&long=${long}&page_size=${page_size}`
  );
};
