import React from "react";
import { BarraDeProgresso, DivProgress } from "./styled";
export const ProgressBar = ({ ...rest }) => {
  return (
    <DivProgress>
      <BarraDeProgresso {...rest}></BarraDeProgresso>
    </DivProgress>
  );
};
