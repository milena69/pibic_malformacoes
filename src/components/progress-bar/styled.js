import styled from 'styled-components';

export const BarraDeProgresso = styled.div.attrs(({ animated }) => ({
  className:
    'progress-bar progress-bar-striped' +
    (animated && ' progress-bar-animated'),
  role: 'progressbar',
}))`
  background-color: ${({ theme: { colors } }) => colors.primary};
  width: ${({ progresso }) => progresso}%;
`;
