import { ComponentType } from 'react'
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon'
import Icon from '@ant-design/icons'
import { IconAngleDown } from '../svg/IconAngleDown'
import { IconArrowRight } from '../svg/arrowRight'
import { IconFacebook } from '../svg/facebook'
import { IconInstagram } from '../svg/instagram'
import { IconLinkedIn } from '../svg/linkedin'
import { IconMedal } from '../svg/medal'
import { IconRadio } from '../svg/radio'
import { IconTicks } from '../svg/ticks'
import { IconTwitter } from '../svg/twitter'
import { IconYoutube } from '../svg/youtube'
import React from 'react'

export const AngleDown: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconAngleDown} {...props} />
)
export const Youtube: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconYoutube} {...props} />
)
export const Facebook: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconFacebook} {...props} />
)
export const Twitter: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconTwitter} {...props} />
)
export const Instagram: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconInstagram} {...props} />
)
export const LinkedIn: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconLinkedIn} {...props} />
)
export const Radio: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconRadio} {...props} />
)
export const ArrowRight: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconArrowRight} {...props} />
)
export const Ticks: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconTicks} {...props} />
)
export const Medal: ComponentType<CustomIconComponentProps> = (props) => (
  <Icon component={IconMedal} {...props} />
)
