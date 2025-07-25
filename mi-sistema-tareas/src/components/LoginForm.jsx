
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
                            className="w-full appearance-none border border-blue-100 rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            className=" w-full appearance-none border border-blue-100 rounded-md"
                        />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300">
                        Ingresar
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <a
                        href="#"
                        className="text-sm text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        ¿No tienes una cuenta?
                    </p>
                    <button
                        onClick={onSwitchToRegister}
                        className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                    >
                        Registrarse
                    </button>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;