import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';

const id = Math.random() * 1000;

function App() {

    const[tasks, setTask] = useState([{
      id: 1,
      title: "React",
      description: "",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Node",
      description: "",
      isCompleted: false, 
    },
    {
      id: 3,
      title: "MongoDB",
      description: "",
      isCompleted: false,
    }
  ]);
  const addTask = (title) => {
    const newTask = {
      id: id + 1,
      title: title,
      description: "",
      isCompleted: false,
    };
    setTask([...tasks, newTask]);
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTask(updatedTasks);
  };
    
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTask(updatedTasks);
  };

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-6'>
        <h1 className='text-3xl text-slate=-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask addTask={addTask} />
        <Tasks tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App;
