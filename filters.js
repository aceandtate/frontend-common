const HTOS = {
  ENABLED: 'yes',
  DISABLED: 'no',
};

const TYPES = {
  GLASSES: 'glasses',
  SUNGLASSES: 'sunglasses',
};

const PRODUCT_TYPES = {
  FRAME: 'frame',
  CLIP_ON: 'clip_on',
  GIFTCARD: 'giftcard',
};

const GENDERS = {
  MEN: 'male',
  WOMEN: 'female',
  UNISEX: 'unisex',
};

const FILTER_KEYS = {
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

const MATERIALS = {
  ACETATE: 'acetate',
  BIO_ACETATE: 'bio_acetate',
  METAL: 'metal',
  COMBI: 'combi',
  TITANIUM: 'titanium',
};

const SHAPES = {
  ROUND: 'round',
  SQUARE: 'square',
  RECTANGLE: 'rectangular',
};

const WIDTHS = {
  NARROW: 'narrow',
  MEDIUM: 'medium',
  WIDE: 'wide',
};

const COLORS = {
  COLORED: 'colored',
  LIGHT: 'light',
  DARK: 'dark',
  TRANSPARENT: 'transparent',
};

const PRICES = {
  BASE: 'base',
  PREMIUM: 'premium',
};

// master of allowed filters and their translations
// When adding new values ensure to also add the translation messages with the same keys
const filterOptions = {
  [FILTER_KEYS.MATERIAL]: Object.values(MATERIALS),
  [FILTER_KEYS.SHAPE]: Object.values(SHAPES),
  [FILTER_KEYS.WIDTH]: Object.values(WIDTHS),
  [FILTER_KEYS.COLOR]: Object.values(COLORS),
  [FILTER_KEYS.PRICE]: Object.values(PRICES),
};

const filterOptionsAdvanced = {
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

const allowedFilterTypes = Object.keys(filterOptions);

function getAllowedFilterOptions(type) {
  return filterOptions[type] || [];
}

module.exports = {
  HTOS,
  TYPES,
  PRODUCT_TYPES,
  GENDERS,
  FILTER_KEYS,
  MATERIALS,
  SHAPES,
  WIDTHS,
  COLORS,
  PRICES,
  filterOptions,
  filterOptionsAdvanced,
  allowedFilterTypes,
  getAllowedFilterOptions,
}
