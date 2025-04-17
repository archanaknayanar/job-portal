import Hero from "../components/Hero"
import HomeCard from '../components/HomeCards'
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
    <Hero title={"Become a React Dev"} subtitle={"Find your jobs here"}  />
    <HomeCard />
    <JobListings isHome={true}/>
    <ViewAllJobs />
    </>

  )
}

export default HomePage