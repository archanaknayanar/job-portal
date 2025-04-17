import { Link } from "react-router-dom"

const ViewAllJobs = () => {
  return (
    <section className="m-auto my-10 px-6 max-w-lg">
        <Link to="/jobs" className="block bg-black text-white text-center rounded-xl py-4 px-6 hover:bg-gray-700">View All Jobs</Link>
    </section>
  )
}

export default ViewAllJobs