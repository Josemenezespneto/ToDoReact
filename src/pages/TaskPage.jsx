import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const [seachParams] = useSearchParams();
  //const id = seachParams.get("id");
  const title = seachParams.get("title");
  const description = seachParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen justify-center flex bg-slate-500 p-6 ">
      <div className="w-[500px] space-y-4">
       <div className="flex justify-center relative mb-4">
          <button className="absolute left-0 bottom-0 top-0 text-slate-100" onClick={() => navigate(-1)}><ChevronLeftIcon/></button>
         <Title>Detalhes da Tarefa</Title>
       </div>

        <div className="bg-slate-200 p-4 rounded-md shadow">
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage;