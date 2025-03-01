
import axios from "axios";

// Use environment variables with fallback to a free tier Medusa demo endpoint
const MEDUSA_BACKEND_URL = import.meta.env.VITE_MEDUSA_BACKEND_URL || "https://api.medusa-commerce.com";

const api = axios.create({
  baseURL: `${MEDUSA_BACKEND_URL}/store`,
});

export default api;
