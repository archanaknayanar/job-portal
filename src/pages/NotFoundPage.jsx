import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center">
        <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
        <p className="text-xl mb-5">This is not the page you are looking for......</p>
        <Link to="/" className="text-white bg-indigo-400 hover:bg-indigo-500 px-4 py-3 rounded-md"> Go Back </Link>
    </section>
  )
}

export default NotFoundPage