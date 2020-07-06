import React, { ReactNode } from 'react';
import {createCn} from 'bem-react-classname';
import './style.scss';

const cn = createCn('main');

export const Main = ({
  children
}: Props) => {

  return (
    <main className={cn()}>
      {children}
    </main>
  );
};

interface Props {
  children: ReactNode;
}
