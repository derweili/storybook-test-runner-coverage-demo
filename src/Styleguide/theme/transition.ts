import { Easing, Duration } from '../types'
import { Transition } from './types'

const transition: Transition = {
  easing: {
    [Easing.EaseIn]: 'cubic-bezier(0.4, 0, 1, 1)',
    [Easing.EaseInOut]: 'cubic-bezier(0.4, 0, 0.2, 1)',
    [Easing.EaseOut]: 'cubic-bezier(0.0, 0, 0.2, 1)',
    [Easing.Sharp]: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    [Duration.Shortest]: 150,
    [Duration.Shorter]: 200,
    [Duration.Short]: 250,
    [Duration.Default]: 300,
    [Duration.Complex]: 375,
    [Duration.EnteringScreen]: 225,
    [Duration.LeavingScreen]: 195,
  },
}

export default transition
