import React from 'react'
import { DEFAULT_IDENTIFIER } from './constants'

type Props = React.PropsWithChildren<{
  identifier?: string
}>

const DrawerProvider: React.FC<Props> = React.memo(
  ({ identifier = DEFAULT_IDENTIFIER, children }: Props) => (
    <>
      <div id={identifier}>{children}</div>
    </>
  )
)

export default DrawerProvider
