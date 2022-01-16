import styled, { css } from "styled-components";
import { theme } from "../../global/styles";
import { LoadingButton } from "@mui/lab";

export const Botao = styled(LoadingButton)`
  display: flex;
  justify-content: center;
  align-self: end;
  justify-self: end;

  &:hover {
    ${(props) => {
      return (
        props.voltar &&
        css`
          background-color: ${theme?.colors?.primary_dark};
          color: ${theme?.colors?.shape};
        `
      );
    }}
  }
`;
