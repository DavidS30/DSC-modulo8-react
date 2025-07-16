
import './App.css'
import {useState} from "react";

function App() {
  const [estado, setEstado] = useState(false);
    console.log(estado);
  return (
    <>
        <h1 className="text-3xl font-bold bg-cyan-400 text-center p-5">Mi sistema de tareas - Dev Senior Code</h1>
        <p>{estado ? "Hola, estoy despierto" : "Hola, estoy dormido"}</p>
        <button className="bg-cyan-200 p-2 rounded m-2 hover:bg-cyan-300" onClick={() => setEstado(!estado)}>Cambiar estado</button>

    </>
  )
}

export default App
