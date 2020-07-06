import React, { CSSProperties } from 'react';
import {createCn} from 'bem-react-classname';
import './style.scss';

const cn = createCn('title');

export const Title = ({
  level = 2,
  text,
  style,
}: Props) => {
  
  const getTitle = () => {
    switch (level) {
      case 1:
        return <h1>{text}</h1>
      case 2:
        return <h2>{text}</h2>
      case 3:
        return <h3>{text}</h3>
      default:
        return <h2>{text}</h2>
    }
  };

  return (
    <div className={cn()} style={style}>
      {getTitle()}
    </div>
  )
};

interface Props {
  level: number;
  text: string;
  style?: CSSProperties
}
