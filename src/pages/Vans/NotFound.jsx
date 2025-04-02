import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div className="not-found-container bottom-auto flex flex-col items-center justify-center">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <div>
                <Link to="/" className="btn-custom">Return to Home</Link>
            </div>
        </div>
    )
}
