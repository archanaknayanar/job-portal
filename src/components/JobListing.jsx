import { useState } from "react"
import { FaMapMarker} from "react-icons/fa"
import { Link } from "react-router-dom";

const JobListing = ({job}) => {

  const [showFullDescription, setFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0,90) + '...';
  }

  return (
    <div className="bg-white rounded-xl">
    <div className="p-4">
        <div className="mb-6">
            <div className="text-grey-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className='mb-5'>{description}</div>
        <button onClick={() => setFullDescription((prevState) => (!prevState))} className="text-indigo-600 text-white hover:text-indigo-500 mb-5">
          {showFullDescription ? "Less" : "More"}
          </button>
        <div className='text-indigo-600'>{job.salary}/Year</div>
        <div className='border border-grey mb-5'></div>
        <div className='justify-between text-orange-700 '>
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
        </div>
        <Link to={`/jobs/${job.id}`} className='bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 text-sm text-center'>Read More</Link>
    </div>
</div>
  )
}

export default JobListing