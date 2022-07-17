import { css, StyledProps, FlattenSimpleInterpolation } from 'styled-components'
import { TypographyUnit } from '../theme/types'

type TypographyMixins = {
  [key in TypographyUnit]: (
    props: StyledProps<{}>
  ) => FlattenSimpleInterpolation
}

const typographyMixinFactory =
  (typographyUnit: TypographyUnit) => (props: StyledProps<{}>) =>
    css`
      color: ${props.theme.typography[typographyUnit].color?.hex()};
      font-family: ${props.theme.typography[typographyUnit].fontFamily};
      font-size: ${props.theme.typography[typographyUnit].fontSize.rem()};
      font-weight: ${props.theme.typography[typographyUnit].fontWeight};
      line-height: ${props.theme.typography[typographyUnit].lineHeight};
    `

const mixinSet: TypographyMixins = {
  [TypographyUnit.Base]: typographyMixinFactory(TypographyUnit.Base),
  [TypographyUnit.Mobile]: typographyMixinFactory(TypographyUnit.Mobile),
  [TypographyUnit.Body1]: typographyMixinFactory(TypographyUnit.Body1),
  [TypographyUnit.Body2]: typographyMixinFactory(TypographyUnit.Body2),
  [TypographyUnit.Caption]: typographyMixinFactory(TypographyUnit.Caption),
  [TypographyUnit.Headline1]: typographyMixinFactory(TypographyUnit.Headline1),
  [TypographyUnit.Headline2]: typographyMixinFactory(TypographyUnit.Headline2),
  [TypographyUnit.Headline3]: typographyMixinFactory(TypographyUnit.Headline3),
  [TypographyUnit.Headline4]: typographyMixinFactory(TypographyUnit.Headline4),
  [TypographyUnit.Headline5]: typographyMixinFactory(TypographyUnit.Headline5),
  [TypographyUnit.Action]: typographyMixinFactory(TypographyUnit.Action),
  [TypographyUnit.FootNote]: typographyMixinFactory(TypographyUnit.FootNote),
  [TypographyUnit.Input]: typographyMixinFactory(TypographyUnit.Input),
  [TypographyUnit.Label]: typographyMixinFactory(TypographyUnit.Label),
  [TypographyUnit.FooterHeading]: typographyMixinFactory(
    TypographyUnit.FooterHeading
  ),
  [TypographyUnit.FooterPhrasing]: typographyMixinFactory(
    TypographyUnit.FooterPhrasing
  ),
}

export default mixinSet
