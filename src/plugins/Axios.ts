import axios from "axios";

const baseEnpoint = "https://www.anapioficeandfire.com/api/";
const instance = axios.create({
  baseURL: baseEnpoint,
});

export default instance;
