
const LoginForm = ({onSwitchToRegister}) => {

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">¡Bienvenido!</h2>
                    <p className="text-gray-600 mt-2">Ingresa en tu cuenta</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Ingresa tu email"
                            className="appearance-none border border-blue-100 rounded-md w-full px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            className="appearance-none border border-blue-100 rounded-md w-full px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                        Ingresar
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <a
                        href="#"
                        className="ml-2 text-blue-600 hover:text-blue-700 font-medium focus:underline transition-colors duration-300"
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        ¿No tienes una cuenta?
                        <button
                            onClick={onSwitchToRegister}
                            className="ml-2 text-blue-600 hover:text-blue-700 font-medium focus:underline transition-colors duration-300"
                        >
                            Registrarse
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;