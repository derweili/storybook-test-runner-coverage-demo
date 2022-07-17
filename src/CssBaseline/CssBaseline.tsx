import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { theme, mixin, query, Size } from '@mycompany/design-system/Styleguide'

export default createGlobalStyle`
  ${normalize}

  body, html {
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.mobile.fontFamily};
    font-size: ${theme.typography.mobile.fontSize.px()};
    line-height: ${theme.typography.mobile.lineHeight};
    color: ${theme.color.font.hex()};
    background-color: ${theme.color.appBackground.hex()};
  }

  ${query.min(Size.Medium)`
    body, html {
      font-size: ${theme.typography.base.fontSize.px()};
      font-family: ${theme.typography.base.fontFamily};
      line-height: ${theme.typography.base.lineHeight};
    }
  `}

  * {
    box-sizing: border-box;
  }

  a {
    color: ${theme.color.variant.primary.base.hex()};
    text-decoration: none;
    ${mixin.typography.action}
  }

  h1 {
    ${mixin.typography.headline1}
  }

  h2 {
    ${mixin.typography.headline2}
  }

  h3 {
    ${mixin.typography.headline3}
  }

  h4 {
    ${mixin.typography.headline4}
  }

  h5 {
    ${mixin.typography.headline5}
  }

  p {
    ${mixin.typography.body1}
  }
  
  code, pre {
    ${mixin.typography.caption}
  }
`
