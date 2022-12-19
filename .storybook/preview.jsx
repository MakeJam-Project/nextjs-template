import * as NextImage from 'next/image';

import { ThemeProvider } from '@emotion/react';

import lightTheme from '../src/styles/theme';

NextImage.defaultProps = {
  unoptimized: true,
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
