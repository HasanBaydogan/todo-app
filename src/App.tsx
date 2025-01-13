import React, { useState } from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <div>
      <h1>My To-Do App</h1>
      <TodoList />
    </div>
  );
};

export default App;
