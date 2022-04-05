export default function ResetPassword() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confimPassword, setConfirmPassword] = useState()

    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)

        if (password !== confimPassword) {
            console.warn('passwords do not match')
            setLoading(false)
        }

        dispatch(reset({ email, password, confimPassword})).then(() => {
            setLoading(false)
        }).catch(() => {
            setLoading(false)
        })
    }

    if (isLoggedIn) {
        return <Navigate to="/user-dashboard" />
    }

    return (
        <>
            {
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

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
                            New Password
                        </label>
                        <input 
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            id="password" 
                            type="password" 
                            placeholder="******************"
                            onChange={e => setPassword(e.target.value)} 
                        />
                    </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Confirm New Password
                    </label>
                    <input 
                        className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password_confirm" 
                        type="password" 
                        placeholder="******************"
                        onChange={e => setConfirmPassword(e.target.value)} 
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Reset Password
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Cancel
                    </a>
                </div>
            </form>
            }
        </>
    )
}

