import { useState, useEffect } from 'react'
import { Size } from '@mycompany/design-system/Styleguide'
import useDebounce from './useDebounce'
import {
  getCurrentBreakpoint,
  isBreakpointGreaterThan,
  isBreakpointSmallerThan,
} from '../utils'

type CurrentSize = {
  windowWidth: number
  windowHeight: number
  currentBreakpoint: Size
  isGreaterThan: (size: Size) => boolean
  isSmallerThan: (size: Size) => boolean
}

const getCurrentSize = (sizeFallback: Size): CurrentSize => {
  const currentBreakpoint =
    typeof window !== 'undefined'
      ? getCurrentBreakpoint(window.innerWidth)
      : sizeFallback

  return {
    windowWidth: typeof window !== 'undefined' ? window.innerWidth : 0,
    windowHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
    currentBreakpoint,
    isGreaterThan: (size: Size) =>
      isBreakpointGreaterThan(currentBreakpoint, size),
    isSmallerThan: (size: Size) =>
      isBreakpointSmallerThan(currentBreakpoint, size),
  }
}

export default (
  initialSize: Size = Size.Tiny,
  bind: boolean = true,
  debounceOffset: number = 100
): CurrentSize => {
  const debounce = useDebounce()
  const [currentSize, setCurrentSize] = useState<CurrentSize>(
    getCurrentSize(initialSize)
  )

  if (bind) {
    useEffect(() => {
      const handleResize = debounce(() => {
        setCurrentSize(getCurrentSize(initialSize))
      }, debounceOffset)

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize)
      }

      return () => {
        if (typeof window !== 'undefined') {
          window.removeEventListener('resize', handleResize)
        }
      }
    })
  }

  return currentSize
}
