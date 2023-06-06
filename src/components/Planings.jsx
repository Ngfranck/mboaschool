import React, { useState } from 'react';

function PlanningComponent() {
  const [tasks, setTasks] = useState([
    { id: 1, module: 'Module 1', name: 'Tâche 1', completed: false },
    { id: 2, module: 'Module 1', name: 'Tâche 2', completed: false },
    { id: 3, module: 'Module 1', name: 'Tâche 3', completed: false },
    { id: 4, module: 'Module 2', name: 'Tâche 1', completed: false },
    { id: 5, module: 'Module 2', name: 'Tâche 2', completed: false },
    { id: 6, module: 'Module 2', name: 'Tâche 3', completed: false },
    { id: 7, module: 'Module 3', name: 'Tâche 1', completed: false },
    { id: 8, module: 'Module 3', name: 'Tâche 2', completed: false },
    { id: 9, module: 'Module 3', name: 'Tâche 3', completed: false }
  ]);

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks.map(task => (
        <div key={task.id} className={`bg-[#fff] rounded p-4 ${task.completed ? 'opacity-50' : ''}`}>
          <h2 className="text-lg font-bold">{task.module}</h2>
          <p className={`${task.completed ? 'line-through' : ''}`}>{task.name}</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded" onClick={() => handleTaskCompletion(task.id)}>
            {task.completed ? 'Valider' : 'Terminer'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlanningComponent;
