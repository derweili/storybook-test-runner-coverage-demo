import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Size } from '@mycompany/design-system/Styleguide'
import NavigationItemRoot from './NavigationItemRoot'

type Props = React.PropsWithChildren<{
  spacing?: Size
}>

const NavigationItem: React.FC<Props> = ({ children, spacing }) => {
  const { t } = useTranslation()
  return (
    <NavigationItemRoot spacing={spacing}>
      {typeof children === 'string' ? t(children) : children}
    </NavigationItemRoot>
  )
}

NavigationItem.propTypes = {
  children: PropTypes.node.isRequired,
}

export default NavigationItem
