import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { colors } from './colors';
import { globalCss } from './globalCss';
import { fonts } from './fonts';

const config = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts,
    },
  },
  globalCss,
});

export const system = createSystem(defaultConfig, config);
