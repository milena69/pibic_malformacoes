import React from "react";
import { AlertMui, ToastError } from "./styled";
//import * as React from "react";
import AlertTitle from "@mui/material/AlertTitle";

export const AlertaToastError = ({ message }) => {
  return (
    <ToastError>
      <AlertMui severity="error">
        <AlertTitle>{message}</AlertTitle>
      </AlertMui>
    </ToastError>
  );
};
