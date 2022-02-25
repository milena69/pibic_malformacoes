import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin-top: 50px;
`;

export const DivRespostas = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  align-items: justify;
`;

export const ProgressWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const SpanProgress = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 500;
`;
export const DivThanks = styled.div`
  width: 90%;
  background-color: ${({ theme: { colors } }) => colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`
export const DivBody = styled.div`
 width: 100%;
 align-items: justify;
`