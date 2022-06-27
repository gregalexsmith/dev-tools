/**
 * https://heroicons.com/
 */
import {
  ExclamationIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/solid';
import { withDefaults } from '../helpers';

export const IconInfo = withDefaults(InformationCircleIcon);
export const IconWarning = withDefaults(ExclamationIcon);
export const IconError = withDefaults(XCircleIcon);
