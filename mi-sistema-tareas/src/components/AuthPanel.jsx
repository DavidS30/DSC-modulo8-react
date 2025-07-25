import {useState} from "react";
import LoginForm from "./LoginForm.jsx";
import RegistrationForm from "./RegistrationForm.jsx";


const AuthPanel = () => {

    const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="flex bg-white rounded-lg shadow-lg mb-6 p-1">
                    <button
                        onClick={() => setIsLoginMode(true)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 
                                    ${isLoginMode ? 'bg-blue-600 text-white' 
                                      : 'text-gray-500 hover:text-gray-900'}`}
                        >
                         Iniciar sesión
                    </button>
                    <button
                        onClick={() => setIsLoginMode(false)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300 
                                ${!isLoginMode ? 'bg-blue-600 text-white'
                            : 'text-gray-500 hover:text-gray-900'}`}
                        >
                            Registrarse
                    </button>
                </div>
                {/* Formularios */}
                <div className="transition-all duration-300 ease-in-out">
                    {
                      isLoginMode ? (
                        <LoginForm onSwitchToRegister={() => setIsLoginMode(false)} />
                      ) : (
                        <RegistrationForm onSwitchToLogin={() => setIsLoginMode(true)} />
                      )
                    }
                </div>
                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                        Panel de Autenticación para DevSeniorCode React.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AuthPanel;