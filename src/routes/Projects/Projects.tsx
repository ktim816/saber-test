import React from 'react';

import {
  ProjectList,
  Title,
} from '@/components';

import {
  PROJECTS,
} from '@/constants';

export default ({match}: Props) => {
  return (
    <>
      <Title
        level={2}
        text="Select project"
        style={{marginBottom: 20}}
      />
      <ProjectList
        url={match.url}
        items={PROJECTS}
      />
    </>
  );
};

interface Props {
  match: any;
}
