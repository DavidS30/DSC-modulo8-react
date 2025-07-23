import React, {useState} from "react";

const TaskItem = ({task, onDelete, onToggle, onEdit}) => {
    const priorityText = {
        high: "Alta",
        medium: "Media",
        low: "Baja"
    }
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    const handleSave = () => {
        onEdit(task.id, editText);
        setIsEditing(false);
    }
    const handleCancel = () => {
        setEditText(task.text);
        setIsEditing(false);
    }
    return(
        <div className="bg-white rounded-lg shadow-md p-4 mb-3 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-offset-0"
                    />
                    {
                        isEditing ? (
                           <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="ml-3 flex-1 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                           />
                        ) : (
                            <span className={`ml-3 flex-1 text-sm sm:text-base 
                                        ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {task.text}</span>
                        )
                    }
                </div>
                <div className="flex items-center space-x-2 ml-4">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="text-blue-600 hover:bg-blue-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                title="Guardar Tarea"
                            >
                                <img src="/public/save.svg" alt="Guardar" className="h-5 w-5" />
                            </button>
                            <button
                                onClick={handleCancel}
                                className="text-red-600 hover:bg-red-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                title="Cancelar edición"
                            >
                                <img src="/public/cancel.svg" alt="Cancelar" className="h-5 w-5" />
                            </button>
                        </>
                    ):  (
                        <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-blue-600 hover:bg-blue-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            title="Editar tarea"
                        >
                            <img src="/public/edit.svg" alt="Editar" className="h-5 w-5" />
                        </button>
                        <button
                            onClick={() => onDelete(task.id)}
                            className="text-red-600 hover:bg-red-100 rounded-lg p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            title="Eliminar tarea"
                        >
                            <img src="/public/delete.svg" alt="Eliminar" className="h-5 w-5" />
                        </button>
                    </>
                    )}

                </div>
            </div>
            {
                task.priority && (
                    <div className="mt-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full 
                                        ${task.priority === "high" ? 'bg-red-100 text-red-800' :
                                          task.priority === "medium" ? 'bg-yellow-100 text-yellow-800' : 
                                          'bg-green-100 text-green-800'}`}>
                            Prioridad {priorityText[task.priority]}
                        </span>
                    </div>
                )
            }
        </div>
    )
}
export default TaskItem;