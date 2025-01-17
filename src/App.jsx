import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobListings from "./components/JobListings"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Become a React Dev" subtitle="Find your jobs here" />
      <HomeCards />
      <JobListings />
    </>
  )
}

export default App;