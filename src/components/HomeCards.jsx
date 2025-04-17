import { Link } from "react-router-dom"
import Cards from "./Cards"

const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Cards>
                <h2 className="text-2xl">For Developers</h2>
                <p className="mt-2 mb-4">Browse job that suits your skill and start new career</p>
                <Link to="/jobs" className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-indigo-600">Browse Jobs</Link>
            </Cards>
            <Cards>
                <h2 className="text-2xl">For Recruiters</h2>
                <p className="mt-2 mb-4">Browse job that suits your skill and start new career</p>
                <Link to="/add-job" className="inline-block bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600">Add Jobs</Link>
            </Cards>
            </div>
    </section>
  )
}

export default HomeCards