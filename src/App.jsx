import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/AddTask.jsx';
import Tasks from './components/Tasks.jsx';
import Title from './components/Title.jsx';

const id = Math.random() * 1000;

function App() {

    const[tasks, setTask] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
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

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
  const fetchTasks = async () => {
    //const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
   // const data = await response.json();
   // setTask(data);
   return setTask([
    {
      id: 1,
      title: "Tarefa 1",
      description: "Descrição da tarefa 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Tarefa 2",
      description: "Descrição da tarefa 2",
      isCompleted: false,}
   ]);
  };

  fetchTasks();
}, []);


  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-6'>
        <Title>Gerenciador de Tarefas</Title>
        <AddTask addTask={addTask} />
        <Tasks tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App;
