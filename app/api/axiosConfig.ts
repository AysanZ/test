import axios from "axios";
import { toast } from "sonner";

const axiosInstance = axios.create({
  baseURL: " https://randomuser.me/api/",
});

axiosInstance.interceptors.request.use((config) => {

  // Set Content-Type to 'multipart/form-data' if the data is FormData
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error) && error.config) {
      const errorData = error.response?.data;
      if (errorData && typeof errorData === "object") {
        Object.entries(errorData).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(`${field}: ${message}`);
            });
          }
        });
      } else {
        toast.error(error.response?.data?.message || "Connection error.");
      }
    } else {
      toast.error("An unknown error occurred.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
