import { createTheme } from '@mantine/core';
import { MantineColorsTuple } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

const primaryColor: MantineColorsTuple = [
  '#faedff',
  '#edd9f7',
  '#d8b1ea',
  '#c286dd',
  '#ae62d2',
  '#a24bcb',
  '#9e3fc9',
  '#8931b2',
  '#7b2aa0',
  '#6b218d',
];

const whiteColor: MantineColorsTuple = [
  '#f5f5f5',
  '#e7e7e7',
  '#cdcdcd',
  '#b2b2b2',
  '#9a9a9a',
  '#8b8b8b',
  '#848484',
  '#717171',
  '#656565',
  '#575757',
];

const theme = createTheme({
  fontFamily: 'Inter, Roboto, sans-serif',
  primaryColor: 'dark',
  defaultRadius: 'md',

  colors: {},
});
export default theme;
