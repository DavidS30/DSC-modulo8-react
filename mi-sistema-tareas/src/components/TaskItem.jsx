import React from "react";

const TaskItem = ({task}) => {
    return(
        <div className="bg-white rounded-lg shadow-md p-4 mb-3 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-offset-0"
                    />
                    <span
                        className="ml-3 flex-1 text-sm"
                    >
                        {task.text}
                    </span>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                    <>
                        <button
                            className="text-blue-600 hover:text-blue-800 p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            title="Editar tarea"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.232-6.232a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13zm-6 6h6v-6H3v6z" />
                            </svg>
                        </button>
                        <button
                            className="text-red-600 hover:text-red-800 p-1 sm:p-2 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            title="Eliminar tarea"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </>
                </div>
            </div>
        </div>
    )
}
export default TaskItem;