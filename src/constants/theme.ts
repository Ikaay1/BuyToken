import {switchAnatomy} from '@chakra-ui/anatomy';
import {
  ChakraProvider,
  createMultiStyleConfigHelpers,
  extendTheme,
  ThemeConfig,
} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    // ...
  },
  thumb: {
    bg: 'clique.black2',
  },
  track: {
    bg: 'clique.secondaryGrey1',
    _checked: {
      bg: 'gray.100',
    },
  },
});

const switchTheme = defineMultiStyleConfig({baseStyle});

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  token: {
    text: '#777777',
    black: '#000000',
    white: '#FFFFFF',
    orange: '#fca817',
    darkGrey: '#1F2026',
    lightWhite: '#F3F3F4',
    black2: '#1F2026',
    black3: '#000103',
    inputBorder: '#ededed',
    dark: '#1E1E1E',
    light: '#F1F1F1',
    textDark: '#3d4465',
    text2: '#6e6e6e',
    secondaryGrey1: '#232323',
    text4: '#1b2694',
    text3: '#7e7e7e',
    textPurple: '#222fb9',
    navBlack: '#1D1E24',
    base: '#000',
    grey: '#ffffff33',
    darkwhite: '#ffffffb3',
    greyBg: '#f1f1f1',
    red: '#BA1A1A',
    faintGrey: '#A1A1A1',
    bgGrey2: '#F5F5F5',
    modalOverlay: 'rgba(0, 0, 0, 0.6)',
    navDark: '#0B0B0A',
    greyText: '#707070',
  },
};

//
const breakpoints = {
  base: '0px',
  sm: '400px',
  md: '700px',
  lg: '1100px',
  mlg: '1440px',
  xl: '1700px',
};

const components = {
  Checkbox: {
    baseStyle: {
      control: {
        bg: 'gray.300',
        border: '2px solid #E7E7E7',
        _checked: {
          bg: '#1F2026',
          color: '#fff',
          boxShadow: 'none',
          outline: 'none',
          border: 'none',
          _hover: {
            bg: '#1F2026',
          },
        },

        boxShadow: 'none',
      },
    },
    variants: {
      base: {
        control: {
          _checked: {
            bg: '#1F2026',
          },
        },
      },
    },
  },
  Switch: switchTheme,
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({colors, breakpoints, components, config});
