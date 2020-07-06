import React from 'react';
import {createCn} from 'bem-react-classname';
import './style.scss';

const cn = createCn('container');

export const Container = ({
  children
}: Props) => {
  return (
    <div className={cn()}>
      {children}
    </div>
  );
};

interface Props {
  children: React.ReactNode;
}
