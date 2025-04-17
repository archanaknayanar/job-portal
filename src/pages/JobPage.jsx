import { useState , useEffect } from "react"
import { useParams } from "react-router-dom"

const JobPage = () => {
  const id = useParams();
  const {job, setJob} = useState(null);
  const {loading, setLoading} = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
        try {
            res = await fetch(`/api/jobs/${id}`);
            data = res.json();
            setJob(data);
        } catch (error) {
            console.error("Something went wrong while fetching jobs");
        } finally {
            setLoading(false)
        }
    }
    fetchJob();
  },[])

  return (
    <div>JobPage</div>
  )
}

export default JobPage