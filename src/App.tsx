import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  Header,
  Main,
  Sidebar,
} from '@/components';

import {
  Projects,
  CurrentProject,
} from '@/routes';

import {
  SIDEBAR_LIST,
} from '@/constants';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar items={SIDEBAR_LIST} />
      <Main>
        <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={CurrentProject} />
        </Switch>
      </Main>
    </BrowserRouter>
  );
};
