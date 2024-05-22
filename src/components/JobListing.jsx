const JobListing = ({job}) => {
  return (
    <div className="bg-white rounded-xl">
    <div className="p-4">
        <div className="mb-6">
            <div className="text-grey-600 my-2">{job.type}</div>
                <h3 className="text-xl font-bold">{job.title}</h3>
        </div>
        <div className='mb-5'>{job.description}</div>
        <div className='text-indigo-600'>{job.salary}/year</div>
        <div className='border border-grey mb-5'></div>
        <div className='justify-between text-orange-700 '>
            <i className='fa-solid fa-location-dot text-lg'></i>
            {job.location}
        </div>
        <a href="/job/${job.id}" className='bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 text-sm text-center'>Read More</a>
    </div>
</div>
  )
}

export default JobListing