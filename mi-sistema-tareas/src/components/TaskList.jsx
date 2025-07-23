import React, {useState} from "react";
import TaskItem from "./TaskItem.jsx";

const TaskList = () => {
    const FILTERS = ["todas", "pendientes", "completadas"];
    const [task, setTask] = useState([
        { id: 1, text: "Realizar ejercicios con React", completed: false, priority: "high" },
        { id: 2, text: "Actualizar documentación", completed: true, priority: "medium" },
        { id: 3, text: "Sacar a mi mascota", completed: true, priority: "low" },
        { id: 4, text: "Revisar codigo hecho en clase", completed: true, priority: "medium" }
    ])
    const [filter, setFilter] = useState("Todas");
    const filteredTasks = task.filter(task => {
        if (filter === "pendientes") return !task.completed;
        if (filter === "completadas") return task.completed;
        return true;
    })
    const pendingTasks = task.filter((task) => task.completed === false);
    const completedTasks = task.filter((task) => task.completed);
    const [newTaskText, setNewTaskText] = useState("");

    const addTask = (e) => {
       e.preventDefault();
       if (newTaskText.trim()) {
           const newTask = {
               id: Date.now(),
               text: newTaskText,
               completed: false,
               priority: "medium"
           }
           setTask([...task, newTask]);
           setNewTaskText("");
       }
    }

    const deleteTask = (id) => {
        setTask(task.filter((task) => task.id !== id));
    }

    const toggleTask = (id) => {
        setTask(task.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task));
    }

    const editTask = (id, newText) => {
        setTask(task.map(task=>
        task.id === id ? {...task, text: newText }: task));
    }


    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            {/* Dashboard Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-600">{task.length}</div>
                    <div className="text-sm text-gray-500">Tareas totales</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-yellow-600">{pendingTasks.length}</div>
                    <div className="text-sm text-gray-500">Tareas pendientes</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-600">{completedTasks.length}</div>
                    <div className="text-sm text-gray-500">Tareas completadas</div>
                </div>
            </div>
            {/* Task List Section */}
            <form className="mb-6" onSubmit={addTask}>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="text"
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        placeholder="Ingresa una nueva tarea..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Añadir Tarea
                    </button>
                </div>
            </form>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
                {
                    FILTERS.map((filterType) => (
                        <button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            className={`hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                                        ${filter === filterType ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-700'}`}
                        >
                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                            {filterType === "pendientes" && pendingTasks.length> 0 && (
                                <span className="ml-1 bg-blue-700 text-white rounded-full px-2 py-0.5 text-xs">
                                    {pendingTasks.length}
                                </span>
                            )
                            }
                            {filterType === "completadas" && completedTasks.length> 0 && (
                                <span className="ml-1 bg-blue-700 text-white rounded-full px-2 py-0.5 text-xs">
                                    {completedTasks.length}
                                </span>
                            )
                            }
                        </button>
                    ))
                }
            </div>
            {/* Task List */}
            {
                filteredTasks.map((taskItem) => (
                    <TaskItem key={taskItem.id} task={taskItem} onDelete={deleteTask} onToggle={toggleTask} onEdit={editTask}/>
                ))
            }
        </div>
    )
}
export default TaskList;