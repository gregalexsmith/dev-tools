/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Fixes responsive issues for rebass 'Box'
// - also adds border
 */

// eslint-disable-next-line import/no-named-as-default
import css, { get } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  border
} from 'styled-system';

const sx = (props: any) => css(props.sx)(props.theme);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const base = (props: any) => css(props.__css)(props.theme);

type VariantArgs = {
  theme: any;
  variant: any;
  tx: 'variants' | any;
};

const variant = ({ theme, variant, tx = 'variants' }: VariantArgs) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const BoxBase = styled('div', {
  shouldForwardProp
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  base,
  variant,
  sx,
  (props) => props.css,
  compose(space, layout, border, typography, color, flexbox)
);
