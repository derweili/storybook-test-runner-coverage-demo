import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { theme } from '@mycompany/design-system/Styleguide'

type Props = React.PropsWithChildren<{}>

const StyleProvider: React.FC<Props> = ({ children }: Props) => (
  <StyledComponentsThemeProvider theme={theme}>
    {children}
  </StyledComponentsThemeProvider>
)

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StyleProvider
