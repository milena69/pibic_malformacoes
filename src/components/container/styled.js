import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Container from "@mui/material/Container";

export const Containers = styled(Container, {
  color: "text.secondary",
  m: 2,
  p: 2,
  sx: {
    my: 2,
  },
})`
  box-shadow: 0px 3px 10px #d6d6d6, 0px 0px 33px #d6d6d6, 0px 8px 400px #d6d6d6;

  height: 100%;
  border-radius: 1rem;
  width: 50%;
  display: flex;
  align-items: center;
  margin: 15% auto;
  justify-content: center;
  /* padding: 50px 0px; */

  /* background-color: ${({ theme: { colors } }) => colors.background}; */
`;

export const DivCenter = styled(Container)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.dark &&
    css`
      height: 100%;
      border-radius: 1rem;
      width: 50%;
      display: flex;
      align-items: center;
      margin: 15% auto;
      justify-content: center;
    `}
`;
