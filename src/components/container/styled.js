import styled from "@emotion/styled";
import Container from "@mui/material/Container";

export const Containers = styled(Container)`
  box-shadow: 0px 31px 50px rgb(0 0 0 / 1%),
    0px 0px 104.981px rgb(38 36 36 / 6%),
    0px -0.532008px 31.2555px rgb(38 36 36 / 4%);

  height: 90vh;
  border-radius: 1rem;
  /* background-color: ${({ theme: { colors } }) => colors.primary}; */
`;

export const DivCenter = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


