import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
    return (
        <ul className="space-y-4 p-6 bg-slate-300 rounded shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button 
                        className="bg-slate-400 text-left w-full text-white p-2 rounded-md "
                        onClick={() => props.completeTask(task.id)}
                    >
                        {task.title}
                    </button>
                    <button className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    <button 
                    className="bg-slate-400 text-white p-2 rounded-md"
                    onClick={() => props.deleteTask(task.id)}
                    >
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Tasks;