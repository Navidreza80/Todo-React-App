import axios from "axios";
import { toast } from "sonner";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = new axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  if (err.response.status >= 400 && err.response.status < 500) {
    toast.error("Client error: " + err.response.status);
  }

  return Promise.reject(err);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
