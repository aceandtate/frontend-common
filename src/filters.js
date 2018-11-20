export const HTOS = {
  ENABLED: 'yes',
  DISABLED: 'no',
};

export const TYPES = {
  GLASSES: 'glasses',
  SUNGLASSES: 'sunglasses',
};

export const PRODUCT_TYPES = {
  FRAME: 'frame',
  CLIP_ON: 'clip_on',
  GIFTCARD: 'giftcard',
};

export const GENDERS = {
  MEN: 'male',
  WOMEN: 'female',
  UNISEX: 'unisex',
};

export const FILTER_KEYS = {
  HTO: 'hto',
  TYPE: 'type',
  PRODUCT_TYPE: 'product_type',
  GENDER: 'gender',
  MATERIAL: 'material',
  SHAPE: 'shape',
  WIDTH: 'width',
  COLOR: 'color',
  PRICE: 'price',
};

export const MATERIALS = {
  ACETATE: 'acetate',
  METAL: 'metal',
  COMBI: 'combi',
  TITANIUM: 'titanium',
};

export const SHAPES = {
  ROUND: 'round',
  SQUARE: 'square',
  RECTANGLE: 'rectangular',
};

export const WIDTHS = {
  NARROW: 'narrow',
  MEDIUM: 'medium',
  WIDE: 'wide',
};

export const COLORS = {
  COLORED: 'colored',
  LIGHT: 'light',
  DARK: 'dark',
  TRANSPARENT: 'transparent',
};

export const PRICES = {
  BASE: 'base',
  PREMIUM: 'premium',
};

// master of allowed filters and their translations
// When adding new values ensure to also add the translation messages with the same keys
export const filterOptions = {
  [FILTER_KEYS.MATERIAL]: Object.values(MATERIALS),
  [FILTER_KEYS.SHAPE]: Object.values(SHAPES),
  [FILTER_KEYS.WIDTH]: Object.values(WIDTHS),
  [FILTER_KEYS.COLOR]: Object.values(COLORS),
  [FILTER_KEYS.PRICE]: Object.values(PRICES),
};

export const filterOptionsAdvanced = {
  [FILTER_KEYS.HTO]: Object.values(HTOS),
  [FILTER_KEYS.TYPE]: Object.values(TYPES),
  [FILTER_KEYS.PRODUCT_TYPE]: Object.values(PRODUCT_TYPES),
  [FILTER_KEYS.GENDER]: Object.values(GENDERS),
  [FILTER_KEYS.MATERIAL]: Object.values(MATERIALS),
  [FILTER_KEYS.SHAPE]: Object.values(SHAPES),
  [FILTER_KEYS.WIDTH]: Object.values(WIDTHS),
  [FILTER_KEYS.COLOR]: Object.values(COLORS),
  [FILTER_KEYS.PRICE]: Object.values(PRICES),
};

export const allowedFilterTypes = Object.keys(filterOptions);

export function getAllowedFilterOptions(type) {
  return filterOptions[type] || [];
}
