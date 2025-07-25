

const RegistrationForm = ({onSwitchToLogin}) => {

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Crea tu cuenta</h2>
                    <p className="text-gray-600 mt-2">Ingresa hoy mismo</p>
                </div>

                <form>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Ingresa tu usuario"
                            className="appearance-none border border-blue-100 rounded-md w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Ingresa tu correo"
                            className="appearance-none border border-blue-100 rounded-md w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            className="appearance-none border border-blue-100 rounded-md w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirmar Contraseña</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirma tu contraseña"
                            className="appearance-none border border-blue-100 rounded-md w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                        Crear cuenta
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        ¿Ya tienes una cuenta?
                    </p>
                    <button
                        onClick={onSwitchToLogin}
                        className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                    >
                        Iniciar sesión
                    </button>
                </div>
            </div>
        </div>
    )
}
export default RegistrationForm;