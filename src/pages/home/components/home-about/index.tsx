import { PhoneNumber } from '@c/phone-number';
import { Fragment } from 'react';
import c from './style.module.css'

export const HomeAbout = () => {
  return (
    <div className={c.wrap}>
      <PhoneNumber />
      <Fragment>123</Fragment>
    </div>
  )
}