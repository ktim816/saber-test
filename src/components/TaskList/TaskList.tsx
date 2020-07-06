import React, { useState, useRef } from 'react';
import {createCn} from 'bem-react-classname';
import './style.scss';

import {
  Title,
  Modal,
} from '@/components';

const cn = createCn('tasks');

let formTimerId;

export const TaskList = ({
  items = []
}: Props) => {

  const [isModalActive, setIsModalActive] = useState(false);
  const [currentTask, setCurrentTask] = useState(items[0]);
  const [inProgress, setInProgress] = useState(false);
  const [isDone, setIsDone] = useState(false);

  function renderTask(task: Task) {
    return (
      <a
        key={task.id}
        href=" #"
        className={cn('block')}
        onClick={() => handleOpenModal(task)}
      >
        <h3 className={cn('title')}>{task.type}</h3>
        <p className={cn('description')}>{task.description}</p>
      </a>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setInProgress(true);
    formTimerId = setTimeout(() => {
      setInProgress(false);
      setIsDone(true);
      clearTimeout(formTimerId);
    }, 2000);
  }

  function handleOpenModal(task: Task) {
    setIsModalActive(true);
    setCurrentTask(task);
  }

  function handleCloseModal() {
    setIsModalActive(false);
    setInProgress(false);
    setIsDone(false);
    clearTimeout(formTimerId);
  }

  function getParamsByType() {
    if (!currentTask) return;
    switch (currentTask.type) {
      case 'AddItem':
        return (
          <>
            <label>Item name</label>
            <select> 
              <option value="item1">Item 1</option>
              <option value="item2">Item 2</option>
              <option value="item3">Item 3</option>
            </select>
            <label>Count</label>
            <input type="text" value={100} />
          </>
        );
        case 'AddSkill':
        return (
          <>
            <label>Skill name</label>
            <select> 
            <option value="skill1">Skill 1</option>
              <option value="skill2">Skill 2</option>
              <option value="skill3">Skill 3</option>
            </select>
          </>
        );
    }
  }

  return (
    <>
      <div className={cn()}>
        {items.map(renderTask)}
      </div>
      <Modal
        isOpen={isModalActive}
        onRequestClose={handleCloseModal}
      >
        {inProgress && <div className={cn('progress')}></div>}
        {!isDone ? (
          <>
            <Title
              level={2}
              text="Set parameters"
            />
            {currentTask && (
              <form
                className={cn('form')}
                onSubmit={handleSubmit}
              >
                {getParamsByType()}
                <button
                  type="submit"
                  disabled={inProgress}
                >Send</button>
              </form>
            )}
          </>
        ) : (
          <Title
            level={2}
            text="Done!"
          />
        )}
      </Modal>
    </>
  );
};

interface Task {
  id: number;
  type: string;
  description: string;
}

interface Props {
  items: Task[];
}
