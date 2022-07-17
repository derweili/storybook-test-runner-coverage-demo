import { FC } from 'react'
import { SvgIcon, SvgIconRoot, IconHover } from './base'
import { IconName, Props } from './types'
import ChevronDownIcon from './ChevronDownIcon'
import CheckboxUncheckedIcon from './CheckboxUncheckedIcon'
import CheckboxCheckedIcon from './CheckboxCheckedIcon'
import ChevronRightIcon from './ChevronRightIcon'
import ChevronUpIcon from './ChevronUpIcon'
import HeartIcon from './HeartIcon'
import CartIcon from './CartIcon'
import SearchIcon from './SearchIcon'
import CloseIcon from './CloseIcon'
import UserIcon from './UserIcon'
import BankTransfer from './BankTransfer'
import GiroPay from './GiroPay'
import Visa from './Visa'
import MasterCard from './MasterCard'
import Amex from './Amex'
import SofortKlarna from './SofortKlarna'
import BurgerIcon from './BurgerIcon'
import FaceBookIcon from './FacebookIcon'
import TwitterIcon from './TwitterIcon'
import PinterestIcon from './PinterestIcon'
import InstagramIcon from './InstagramIcon'
import GiftIcon from './GiftIcon'

const iconMap: {
  [key in IconName]: FC<Props>
} = {
  [IconName.GiftIcon]: GiftIcon,
  [IconName.FaceBookIcon]: FaceBookIcon,
  [IconName.PinterestIcon]: PinterestIcon,
  [IconName.InstagramIcon]: InstagramIcon,
  [IconName.TwitterIcon]: TwitterIcon,
  [IconName.SofortKlarna]: SofortKlarna,
  [IconName.Burger]: BurgerIcon,
  [IconName.MasterCard]: MasterCard,
  [IconName.Amex]: Amex,
  [IconName.Visa]: Visa,
  [IconName.GiroPay]: GiroPay,
  [IconName.BankTransfer]: BankTransfer,
  [IconName.Cart]: CartIcon,
  [IconName.ChevronDown]: ChevronDownIcon,
  [IconName.CheckboxUncheckedIcon]: CheckboxUncheckedIcon,
  [IconName.CheckboxCheckedIcon]: CheckboxCheckedIcon,
  [IconName.ChevronRightIcon]: ChevronRightIcon,
  [IconName.ChevronUpIcon]: ChevronUpIcon,
  [IconName.Close]: CloseIcon,
  [IconName.Heart]: HeartIcon,
  [IconName.Search]: SearchIcon,
  [IconName.User]: UserIcon,
}
const IconComponents = {
  SvgIconRoot,
}

export {
  iconMap,
  IconName,
  SvgIcon,
  FaceBookIcon,
  PinterestIcon,
  InstagramIcon,
  GiftIcon,
  TwitterIcon,
  GiroPay,
  Visa,
  MasterCard,
  Amex,
  SofortKlarna,
  IconHover,
  BankTransfer,
  CheckboxUncheckedIcon,
  CheckboxCheckedIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  HeartIcon,
  SearchIcon,
  CartIcon,
  CloseIcon,
  UserIcon,
  IconComponents,
  BurgerIcon,
}
