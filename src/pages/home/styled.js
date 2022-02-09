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
`;

export const SpanProgress = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 500;
`;
