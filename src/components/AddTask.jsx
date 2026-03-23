import { useState } from "react";

function AddTask (props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Adicionar titulo da Tarefa"
                className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
            />
             <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Adicionar descricao da tarefa"
                className="w-full p-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent"
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
