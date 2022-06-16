import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button``;

type Props = {
  children: ReactNode;
};

export const Button = ({ children }: Props) => (
  <StyledButton>{children}</StyledButton>
);
