// import Container from "@mui/material/Container";
import { Checkbox, FormControlLabel } from '@mui/material';
import { Buttons } from '../button/button';
import { BodyContent, Containers, DivCenter, InputIguim } from './styled';

export const Body = ({ children }) => {
  return (
    <BodyContent>
      <Containers>
        <DivCenter>{children}</DivCenter>
      </Containers>
    </BodyContent>
  );
};
