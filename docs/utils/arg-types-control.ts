import {
  FlexboxAlignment,
  FlexboxDirection,
  FlexboxJustification,
  FlexboxWrap,
  Size,
  theme,
  Variant,
  ElevationLevel,
} from '../../src'

type EnumNames =
  | 'FlexboxAlignment'
  | 'FlexboxDirection'
  | 'FlexboxJustification'
  | 'FlexboxWrap'
  | 'Size'
  | 'Variant'
  | 'ElevationLevel'

function getEnum(enumName: EnumNames) {
  switch (enumName) {
    case 'FlexboxAlignment':
      return FlexboxAlignment
    case 'FlexboxDirection':
      return FlexboxDirection
    case 'FlexboxJustification':
      return FlexboxJustification
    case 'FlexboxWrap':
      return FlexboxWrap
    case 'Size':
      return Size
    case 'Variant':
      return Variant
    case 'ElevationLevel':
      return ElevationLevel
    default:
      throw new Error(`[arg-types-control]: Enum "${enumName}" not found!`)
  }
}

function getControl(enumName: EnumNames) {
  const enumeration = getEnum(enumName)
  const mapping = {}

  Object.keys(enumeration).forEach((key) => (mapping[key] = enumeration[key]))

  return {
    control: { type: 'radio' },
    mapping,
    options: Object.keys(enumeration),
    table: { type: { summary: enumName } },
  }
}

export const argTypesControl = {
  elevation:getControl('ElevationLevel'),
  flexboxAlignment: getControl('FlexboxAlignment'),
  flexboxDirection: getControl('FlexboxDirection'),
  flexboxJustification: getControl('FlexboxJustification'),
  flexboxWrap: getControl('FlexboxWrap'),
  number: { control: { type: 'number' } },
  size: getControl('Size'),
  text: { control: { type: 'text' } },
  variant: getControl('Variant'),
}
