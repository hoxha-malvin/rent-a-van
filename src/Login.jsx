import { useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData } from "react-router-dom";
import { loginUser } from "./api";

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    } catch(err) {
        return err?.message || "Something went wrong"
    }
}

const Login = () => {
    const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation = useNavigation()

    return (
        <div className="login-container">
            <h1 className="text-4xl ">Sign in to your account</h1>
            {message && <h2 className="text-red-600">{message}</h2>}
            {errorMessage?.error && <h3 className="text-red-600">{errorMessage}</h3>}
            <Form method="post" replace className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}

export default Login