import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import {
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  BackgroundColorProps,
  FlexboxProps
} from 'styled-system';
import { BoxBase } from './box-rebass-override';

type BoxTypes = LayoutProps &
  PositionProps &
  SpaceProps &
  ColorProps &
  BackgroundColorProps & {
    className?: string;
    children: ReactNode;
  };

export const Box = styled(BoxBase)`` as FC<BoxTypes>;

export const Flex = styled(Box)({
  display: 'flex'
}) as FC<BoxTypes & FlexboxProps>;
