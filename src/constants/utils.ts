export const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

export const APP_TOKEN =
  '$2b$10$ttfS/bPxz0kQBSMbOz6lVe26cu4MzWIFCXQAUc.o0/7QQDQfv27QO';

export const scrollbarStyle = {
  '&::-webkit-scrollbar': {
    width: '4px',
    rounded: 'full',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    bg: '#4CAD73',
    outline: 'none',
  },
};
export const scrollbarStyle2 = {
  '&::-webkit-scrollbar': {
    width: '10px',
    // rounded: 'full',
    // height: '20px',
  },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '&::-webkit-scrollbar-thumb': {
    bg: '#4CAD73',
    outline: 'none',
    borderRadius: '20px',
    background: '#4CAD73',
    backgroundClip: 'content-box',
    borderTop: '10px solid transparent',
  },
};

export const payPercentage = 0.987
