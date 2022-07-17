import styled from 'styled-components'

type Props = {
  title: string
  payments?: boolean
  social?: boolean
  width?: string
  height?: string
}

export default styled.svg<Props>`
  display: inline-flex;
  flex-shrink: 0;
  font-size: 24px;
  user-select: none;
  vertical-align: middle;
  ${({width}) => !width &&`
    width: 1em;
  `}
  ${({height}) => !height &&`
    height: 1em;
  `}
  ${({ social }) =>
  social &&
    `
    height: 1.9em;
    width: 1.9em;
  `}
  ${({ payments }) =>
    payments &&
    `
    height: 1.2em;
    width: 100%;
  `}
  &:focus {
    outline: 0;
  }
`
