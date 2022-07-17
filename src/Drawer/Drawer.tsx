import React, { useState } from 'react'
import { useSpring } from 'react-spring'
import ReactDOM from 'react-dom'
import uniqueId from 'lodash.uniqueid'
import { useTranslation } from 'react-i18next'
import { ElevationLevel, Size } from '@mycompany/design-system/Styleguide'
import { useTheme } from '@mycompany/design-system/ReactUtils'
import { CloseIcon } from '@mycompany/design-system/Icon'
import { DEFAULT_IDENTIFIER } from './constants'
import { DrawerOrientation } from './types'
import DrawerOverlay from './DrawerOverlay'
import DrawerRoot from './DrawerRoot'
import DrawerContent from './DrawerContent'
import DrawerTitleRoot from './DrawerTitleRoot'
import DrawerTitleContent from './DrawerTitleContent'
import DrawerTitleClose from './DrawerTitleClose'

type Props = React.PropsWithChildren<{
  onClose?: () => void
  visible?: boolean
  closeable?: boolean
  identifier?: string
  spacing?: Size
  elevation?: ElevationLevel
  title?: string | React.ReactNode | React.ReactElement
  orientation?: DrawerOrientation
  clean?: boolean
}>

const closeHandler = () => {
  console.log('closeHandler')
}

const Drawer = ({
  children,
  title,
  spacing,
  identifier = DEFAULT_IDENTIFIER,
  visible = true,
  closeable = true,
  elevation = ElevationLevel.Primary,
  orientation = DrawerOrientation.Left,
  onClose = () => closeHandler,
}: Props) => {
  const { t } = useTranslation()
  const [id] = useState<string>(uniqueId('drawer-'))
  const { transition } = useTheme()

  const overlayAnimationStyles = useSpring({
    config: { duration: transition.duration.enteringScreen },
    from: { opacity: 0 },
    to: { opacity: visible ? 1 : 0 },
  })

  const animationOffset =
    orientation === DrawerOrientation.Left ? '-100vw' : '100vw'

  const rootAnimationStyles = useSpring({
    config: {
      tension: 220,
      friction: 27,
    },
    from: {
      transform: `translate3d(${animationOffset},0,0) scale(0.7, 1)`,
    },
    to: {
      transform: visible
        ? 'translate3d(0,0,0) scale(1, 1)'
        : `translate3d(${animationOffset},0,0) scale(0.7, 1)`,
    },
  })

  const DOMElement = document.getElementById(identifier)
  if (!DOMElement) return null
  if (!visible) return null

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (closeable && event.currentTarget === event.target) {
      onClose()
    }
  }

  const handleCloseClick = () => {
    if (closeable) {
      onClose()
    }
  }
  return ReactDOM.createPortal(
    <DrawerOverlay
      onClick={handleOverlayClick}
      closeable={closeable}
      role="none presentation"
      tabIndex={-1}
      style={overlayAnimationStyles}
      orientation={orientation}
    >
      <DrawerRoot
        aria-describedby={`${id}-description`}
        aria-labelledby={`${id}-title`}
        elevation={elevation}
        spacing={spacing}
        style={rootAnimationStyles}
      >
        {title && (
          <DrawerTitleRoot>
            <DrawerTitleContent id={`${id}-title`}>
              {typeof title === 'string' ? t(title) : title}
            </DrawerTitleContent>
          </DrawerTitleRoot>
        )}
        <DrawerContent id={`${id}-description`}>{children}</DrawerContent>
      </DrawerRoot>
      {closeable && (
        <DrawerTitleClose
          onClick={handleCloseClick}
          link
          attachment={<CloseIcon fill />}
        />
      )}
    </DrawerOverlay>,
    DOMElement
  )
}

export default Drawer
