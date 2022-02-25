import axios from "axios";

export const baseURL = `http://localhost/api_projeto_teste/`;

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const data = {
      ...error.response,
      mensagem:
        error.response.data.mensagem ??
        "Por favor, verifique sua conexão ou tente novamente mais tarde.",
    };
    return Promise.reject(data);
  }
);

export default api;
