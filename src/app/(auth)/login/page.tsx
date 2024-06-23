export default function login() {
    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <section className="p-6 rounded-lg shadow-lg w-full max-w-md container-auth">
                <header className="home-header pb-4 flex justify-center">
                    <h1 className="text-3xl text-white font-bold">Login</h1>
                </header>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email-login" className="block text-light text-white mb-2">Email:</label>
                        <input type="email" className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="email-login" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha-login" className="block text-light text-white mb-2">Senha:</label>
                        <input type="password" className="form-control w-full px-3 py-2 border border-gray-300 rounded-md" id="senha-login" />
                    </div>
                    <p className="text-white">Ainda não possui conta? <a href="/register" className="text-blue-400 hover:underline">registrar</a></p>
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="btn hover:bg-black bg-gray-700 text-white font-bold py-2 px-4 rounded">Logar</button>
                    </div>
                </form>
            </section>
        </div>

    );
}