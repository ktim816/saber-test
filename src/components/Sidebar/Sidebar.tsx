import React from 'react';
import {NavLink} from 'react-router-dom';
import {createCn} from 'bem-react-classname';
import './style.scss';

const cn = createCn('sidebar');

export const Sidebar = ({
  items = []
}: Props) => {

  const renderItem = (item: ListItem) => {
    return (
      <li
        key={item.id}
        className={cn('list-item')}
      >
        <NavLink
          to={item.path}
          className={cn('link')}
          activeClassName="active"
        >
          {item.text}
        </NavLink>
      </li>
    );
  };

  return (
    <aside className={cn()}>
      <nav className={cn('nav')}>
        <ul className={cn('list')}>
          {items.map(renderItem)}
        </ul>
      </nav>
    </aside>
  );
};

interface ListItem {
  id: number;
  path: string;
  text: string;
}

interface Props {
  items: ListItem[];
}
