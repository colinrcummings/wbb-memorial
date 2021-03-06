export const colors = {
  white: "#fff",
  lightGray: "#bac5c6",
  darkGray: "#414141",
  teal: "#17a2b8"
};

export const typography = {
  serif: "'Merriweather', serif",
  sansSerif: "'Merriweather Sans', sans-serif"
};

const baseFontSizePx = 16;

export const getRems = px => `${px / baseFontSizePx}rem`;
