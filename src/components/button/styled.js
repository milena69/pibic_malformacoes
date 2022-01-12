import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";

export const Botao = styled(LoadingButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fafafa;
  display:flex;
  justify-content: end;
  &:hover {
  background-color: ${({ theme }) => theme.colors.primary_dark};
  }
`;
