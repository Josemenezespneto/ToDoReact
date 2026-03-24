import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tasks(props) {

const navigate = useNavigate();

const handleTaskClick = (task) => {
    if (!task) return;
    const queryParams = new URLSearchParams();
    queryParams.set("id", task.id);
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);
    navigate(`/task?${queryParams.toString()}`);
}

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
                    <Button onClick={()=> handleTaskClick (task)}>
                        <ChevronRightIcon />
                    </Button>
                    <Button  
                    className="bg-slate-400 text-white p-2 rounded-md"
                    onClick={() => props.deleteTask(task.id)}
                    >
                        <TrashIcon />
                    </Button>
                </li>
            ))}
        </ul>
    );
};

export default Tasks;