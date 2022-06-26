import styled from 'styled-components';
import { color, space, typography, border, width } from 'styled-system';

const SystemInput = styled.input`
  ${color}
  ${space}
  ${typography}
  ${border}
  ${width}
`;

export const Input = styled(SystemInput).attrs({
  mb: 1,
  borderRadius: 1,
  border: '1px solid',
  width: '50%'
})`
  display: block;
`;
