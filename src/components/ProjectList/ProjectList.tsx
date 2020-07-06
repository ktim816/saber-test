import React from 'react';
import {Link} from 'react-router-dom';
import {createCn} from 'bem-react-classname';
import './style.scss';

import {
  Project,
} from '@/types';

const cn = createCn('projects');

export const ProjectList = ({
  url,
  items = [],
}: Props) => {

  const renderProject = (project: Project) => {
    return (
      <Link
        key={project.id}
        to={`${url}/${project.id}`}
        className={cn('block')}
      >
        <div className={cn('image')}>
          <img
            src={project.src}
            alt={project.title}
          />
        </div>
        <div className={cn('info')}>
          <h3 className={cn('title')}>{project.title}</h3>
        </div>
      </Link>
    );
  };

  return (
    <div className={cn()}>
      {items.map(renderProject)}
    </div>
  );
};

interface Props {
  url: string;
  items: Project[];
}
