import styled from '@emotion/styled';
import { css } from '@emotion/css';
import Container from '@mui/material/Container';

export const Containers = styled(Container)`
  box-shadow: 0px 3px 10px #d6d6d6, 0px 0px 33px #d6d6d6, 0px 8px 400px #d6d6d6;
  border-radius: 1rem;
  width: 50vw;
  min-width: 260px;
  display: flex;
  align-items: center;
  padding: 50px 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background};
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 50px 0 50px 0;
  @media (max-width: 500px) {
    min-height: 90vh;
  }
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
      margin: 5% auto;
      justify-content: center;
    `}
  @media (max-width: 500px) {
  }
`;
