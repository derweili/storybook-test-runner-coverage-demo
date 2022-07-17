import React from 'react'
import { ColorValue } from '@mycompany/design-system/Styleguide'
import './preview.css'

type Props = {
  color: ColorValue
}

const ColorPreview: React.FC<Props> = ({ color }: Props) => (
  <div className="color-preview" style={{ background: color.hex() }}>
    <textarea
      defaultValue={color.hex() as string}
      className="value-picker"
      rows={1}
    />
    <textarea defaultValue={color.rgb()} className="value-picker" rows={1} />
    <textarea defaultValue={color.hsl()} className="value-picker" rows={1} />
  </div>
)

export default ColorPreview
