'use strict';

var _filterOptions, _filterOptionsAdvance;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HTOS = {
  ENABLED: 'yes',
  DISABLED: 'no'
};

var TYPES = {
  GLASSES: 'glasses',
  SUNGLASSES: 'sunglasses'
};

var PRODUCT_TYPES = {
  FRAME: 'frame',
  CLIP_ON: 'clip_on',
  GIFTCARD: 'giftcard'
};

var GENDERS = {
  MEN: 'male',
  WOMEN: 'female',
  UNISEX: 'unisex'
};

var FILTER_KEYS = {
  HTO: 'hto',
  TYPE: 'type',
  PRODUCT_TYPE: 'product_type',
  GENDER: 'gender',
  MATERIAL: 'material',
  SHAPE: 'shape',
  WIDTH: 'width',
  COLOR: 'color',
  PRICE: 'price'
};

var MATERIALS = {
  ACETATE: 'acetate',
  METAL: 'metal',
  COMBI: 'combi',
  TITANIUM: 'titanium'
};

var SHAPES = {
  ROUND: 'round',
  SQUARE: 'square',
  RECTANGLE: 'rectangular'
};

var WIDTHS = {
  NARROW: 'narrow',
  MEDIUM: 'medium',
  WIDE: 'wide'
};

var COLORS = {
  COLORED: 'colored',
  LIGHT: 'light',
  DARK: 'dark',
  TRANSPARENT: 'transparent'
};

var PRICES = {
  BASE: 'base',
  PREMIUM: 'premium'
};

// master of allowed filters and their translations
// When adding new values ensure to also add the translation messages with the same keys
var filterOptions = (_filterOptions = {}, _defineProperty(_filterOptions, FILTER_KEYS.MATERIAL, Object.values(MATERIALS)), _defineProperty(_filterOptions, FILTER_KEYS.SHAPE, Object.values(SHAPES)), _defineProperty(_filterOptions, FILTER_KEYS.WIDTH, Object.values(WIDTHS)), _defineProperty(_filterOptions, FILTER_KEYS.COLOR, Object.values(COLORS)), _defineProperty(_filterOptions, FILTER_KEYS.PRICE, Object.values(PRICES)), _filterOptions);

var filterOptionsAdvanced = (_filterOptionsAdvance = {}, _defineProperty(_filterOptionsAdvance, FILTER_KEYS.HTO, Object.values(HTOS)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.TYPE, Object.values(TYPES)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.PRODUCT_TYPE, Object.values(PRODUCT_TYPES)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.GENDER, Object.values(GENDERS)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.MATERIAL, Object.values(MATERIALS)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.SHAPE, Object.values(SHAPES)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.WIDTH, Object.values(WIDTHS)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.COLOR, Object.values(COLORS)), _defineProperty(_filterOptionsAdvance, FILTER_KEYS.PRICE, Object.values(PRICES)), _filterOptionsAdvance);

var allowedFilterTypes = Object.keys(filterOptions);

function getAllowedFilterOptions(type) {
  return filterOptions[type] || [];
}

module.exports = {
  HTOS: HTOS,
  TYPES: TYPES,
  PRODUCT_TYPES: PRODUCT_TYPES,
  GENDERS: GENDERS,
  FILTER_KEYS: FILTER_KEYS,
  MATERIALS: MATERIALS,
  SHAPES: SHAPES,
  WIDTHS: WIDTHS,
  COLORS: COLORS,
  PRICES: PRICES,
  filterOptions: filterOptions,
  filterOptionsAdvanced: filterOptionsAdvanced,
  allowedFilterTypes: allowedFilterTypes
};