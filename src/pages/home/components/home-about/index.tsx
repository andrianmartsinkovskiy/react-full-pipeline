import { Fragment } from 'react';
import { PhoneNumber } from '@c/phone-number';
import c from './style.module.css';

export const HomeAbout = () => {
  return (
    <div className={c.wrap}>
      <PhoneNumber />
      <Fragment>123</Fragment>
    </div>
  );
};
