import { useReducer, useMemo } from "react";

import api from "../api";

export const Methods = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
};

export const RequestActionTypes = {
  FETCHING: "useRequest/fetching",
  SUCCESS: "useRequest/success",
  ERROR: "useRequest/error",
};

const initialState = {
  status: null,
  codigo: "",
  mensagem: "",
};

const reducer = (state = initialState, { type, ...action }) => {
  switch (type) {
    case RequestActionTypes.FETCHING:
      return { ...initialState, status: RequestActionTypes.FETCHING };
    case RequestActionTypes.SUCCESS:
      return { ...state, status: RequestActionTypes.SUCCESS, ...action };
    case RequestActionTypes.ERROR:
      return { ...state, status: RequestActionTypes.ERROR, ...action };
    default:
      return state;
  }
};

const fetching = () => ({ type: RequestActionTypes.FETCHING, ...initialState });

const success = (payload) => ({
  type: RequestActionTypes.SUCCESS,
  ...payload,
});

const error = (payload) => ({
  type: RequestActionTypes.ERROR,
  ...payload,
});

export const useRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const makeRequest = useMemo(
    () => ({
      post: async (endpoint, params, options) => {
        try {
          dispatch(fetching());
          const response = await api[Methods.POST](endpoint, params, options);
          dispatch(success(response.data));

          return Promise.resolve({
            codigo: "200 OK",
            mensagem: response.data.mensagem,
            status: RequestActionTypes.SUCCESS,
            payload: response.data.payload ?? response.data,
          }); // padronizar o retorno da api
        } catch (e) {
          dispatch(error(e));
          return Promise.reject(e);
        }
      },
      get: async (endpoint, params) => {
        try {
          dispatch(fetching());
          const response = await api[Methods.GET](endpoint, params);

          dispatch(
            success({
              codigo: "200 OK",
              mensagem: response.data.mensagem,
              status: RequestActionTypes.SUCCESS,
              payload: response.data.payload ?? response.data,
            })
          );
          return Promise.resolve({
            codigo: "200 OK",
            mensagem: response.data.mensagem,
            status: RequestActionTypes.SUCCESS,
            payload: response.data.payload ?? response.data,
          }); // padronizar o retorno da api
        } catch (e) {
          dispatch(error(e));
          return Promise.reject(e);
        }
      },
      patch: async (endpoint, params) => {
        try {
          dispatch(fetching());
          const response = await api[Methods.PATCH](endpoint, params);
          dispatch(success(response.data));
          return Promise.resolve({
            codigo: "200 OK",
            mensagem: response.data.mensagem,
            status: RequestActionTypes.SUCCESS,
            payload: response.data?.payload,
          }); // padronizar o retorno da api
        } catch (e) {
          dispatch(error(e));
          return Promise.reject(e);
        }
      },
    }),
    [state, dispatch]
  );
  return [state, makeRequest];
};
