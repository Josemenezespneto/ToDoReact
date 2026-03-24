import { useState } from "react";
import Input from "./Input";

function AddTask (props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
            <Input
                placeholder="Adicionar titulo da Tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                placeholder="Adicionar descricao da tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
            />  
            <button 
             className="bg-slate-500 text-white p-2 rounded-md hover:bg-slate-600 transition-colors"
             onClick={() => {
                if (!title.trim() || !description.trim()) return alert("O título e a descrição da tarefa não podem ser vazios.");
                props.addTask(title, description);
                setTitle("");
                setDescription("");
             }}
            >
                Adicionar
            </button>
            
        </div>
    );
};

export default AddTask;
