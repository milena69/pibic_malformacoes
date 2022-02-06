// import Container from "@mui/material/Container";
import { Checkbox, FormControlLabel } from '@mui/material';
import { Buttons } from '../button/button';
import { Containers, DivCenter, InputIguim } from './styled';

export const Body = ({ children }) => {
  return (
    <div>
      <Containers>
        <DivCenter>{children}</DivCenter>
      </Containers>
    </div>
  );
};
