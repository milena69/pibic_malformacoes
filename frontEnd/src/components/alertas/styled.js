import styled from 'styled-components';
import Alert from "@mui/material/Alert";

export const AlertMui = styled(Alert)`
  background-color: ${({ theme }) => theme.colors.attention_light};
  color: ${({ theme }) => theme.colors.text_dark};
`

export const ToastError = styled.div`
  color:${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 23px;
  @media (max-width: 500px) {
    width: 100%;
  }
`
// export const DivPosicaoToast = styled.div.attrs({
//     className: 'toast-header'
// })`
//   width: 100%;
//`