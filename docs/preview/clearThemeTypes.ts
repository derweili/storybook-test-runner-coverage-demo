import { ColorValue, SizeValue } from '../../src/Styleguide/value'

const iterate = (theme) => {
  // eslint-disable-next-line no-param-reassign
  theme = { ...theme }
  Object.keys(theme).forEach((key) => {
    if (theme[key] instanceof SizeValue) {
      // eslint-disable-next-line no-param-reassign
      theme[key] = `SizeValue(${theme[key].px()} | ${theme[key].rem()})`
    } else if (theme[key] instanceof ColorValue) {
      // eslint-disable-next-line no-param-reassign
      theme[key] = `ColorValue(${theme[key].rgb()} | ${theme[key].hex()})`
    } else if (typeof theme[key] === 'object') {
      // eslint-disable-next-line no-param-reassign
      theme[key] = iterate(theme[key])
    }
  })

  return theme
}

export default iterate
