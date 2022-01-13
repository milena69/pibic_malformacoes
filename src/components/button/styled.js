import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";

export const Botao = styled(LoadingButton)`
  background-color: ${({ voltar, theme }) =>
    !voltar ? theme.colors.primary : theme.colors.secondary};
  color: #fafafa;
  display: flex;
  justify-content: center;
  align-self: end;
  justify-self: end;

  &:hover {
    background-color: ${({ voltar, theme }) =>
      !voltar ? theme.colors.primary_dark : theme.colors.secondary};
  }
`;
