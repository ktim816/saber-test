import React, { useState, useEffect } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {createCn} from 'bem-react-classname';
import './style.scss';

import {
  Title,
  TaskList,
} from '@/components';

import {
  PROJECTS,
  TASKS,
  PROJECT_TABS,
} from '@/constants';

import {
  Project,
  ProjectTab,
} from '@/types';

const cn = createCn('project');

export default ({match}: Props) => {
  const [currentProject] = useState(PROJECTS.find(getCurrentProject));

  useEffect(() => {
    
  }, []);

  function getCurrentProject(project: Project) {
    return project.id === match.params.id;
  }

  function renderTab(tab: ProjectTab) {
    return (
      <li key={tab.id}>
        <NavLink
          to={`${match.url}/${tab.id}`}
          className={cn('tab')}
        >
          {tab.text}
        </NavLink>
      </li>
    );
  }

  if (!currentProject) {
    return null;
  }

  return (
    <div className={cn()}>
      <Title
        level={2}
        text={currentProject.title}
        style={{marginBottom: 30}}
      />
      <div className={cn('image')}>
        <img
          src={currentProject.src}
          alt={currentProject.title}
        />
      </div>
      <ul className={cn('tabs')}>
        {PROJECT_TABS.map(renderTab)}
      </ul>
      <div className={cn('content')}>
        <Switch>
          <Route path={`${match.url}/mass-tasks`}>
            <TaskList items={TASKS} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

interface Props {
  match: any;
}
