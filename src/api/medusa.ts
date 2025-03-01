
import axios from "axios";

// Use environment variables with fallback to localhost
const MEDUSA_BACKEND_URL = import.meta.env.VITE_MEDUSA_BACKEND_URL || "http://localhost:9000";

const api = axios.create({
  baseURL: `${MEDUSA_BACKEND_URL}/store`,
});

export default api;
