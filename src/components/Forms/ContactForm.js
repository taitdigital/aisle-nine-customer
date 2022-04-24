export default function RegisterForm() {
    
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false);

    // if (isLoggedIn) {
    //     return <Navigate to="/user-dashboard" />
    // }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        if (!name || !message || !email) {
            console.warn('fiedls are missing')
            setLoading(false)
        }

        dispatch(register({ name, email, password, confirmPassword})).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }

    return (
        <>
            {
                (loading) ? <Loading /> : 
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="name" 
                            type="text" 
                            placeholder="Username"
                            onChange={e => setName(e.target.value)} 
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            id="email" 
                            type="text" 
                            placeholder="Email Address"
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Message
                        </label>

                        <textarea 
                            id="message" 
                            rows="4" 
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Leave a message..."
                            onChange={e => setMessage(e.target.value)} 
                        ></textarea>
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Send
                        </button>
                    </div>
                </form>
            }
        </>
    )
}
