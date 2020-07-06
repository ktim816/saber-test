import React from 'react';
import {createCn} from 'bem-react-classname';
import logo from '@/assets/images/logo.png';
import './style.scss';

const cn = createCn('header');

export const Header = () => {

  return (
    <header className={cn()}>
      <a href="/" className={cn('logo')}>
        <img src={logo} alt="logo" />
      </a>
    </header>
  );
};
