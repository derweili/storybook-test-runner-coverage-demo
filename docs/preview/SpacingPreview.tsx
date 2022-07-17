import React from 'react'
import { SizeValue } from '@mycompany/design-system/Styleguide'
import './preview.css'

type Props = {
  spacing: SizeValue
}

const SpacingPreview: React.FC<Props> = ({ spacing }: Props) => (
  <div className="spacing-preview-container">
    <div className="spacing-preview" style={{ margin: spacing.rem() }}>
      {spacing.rem()}
      <br />
      {spacing.px()}
    </div>
  </div>
)

export default SpacingPreview
