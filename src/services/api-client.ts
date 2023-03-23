import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0cc6a89d37d34d9e928dc7e485dcecf6",
  },
});
