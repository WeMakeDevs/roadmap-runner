import axios from "axios";

export default axios.create({
  baseURL: `https://roadmap-runner-server.onrender.com/api/v1`,
});
