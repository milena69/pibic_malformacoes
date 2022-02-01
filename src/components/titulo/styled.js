import styled, { css } from "styled-components";
import { theme } from "../../global/styles";
import { projectTheme } from "../../global/styles";
export const Title = styled.h1`
  ${projectTheme?.typography.h1}
  color: ${theme?.colors?.title};
  display: flex;
  text-align: justify;
  //justify-content: center;
  // align-self: end;
  //justify-self: end;
`;