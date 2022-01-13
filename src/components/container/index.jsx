// import Container from "@mui/material/Container";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Buttons } from "../button";
import { Containers, DivCenter, InputIguim } from "./styled";

export const Body = ({ children }) => {
  return (
    <div>
      <Containers>{children}</Containers>
    </div>
  );
};
