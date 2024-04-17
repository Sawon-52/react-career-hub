import { useEffect, useState } from "react";
import HomeTitle from "../HomeTitle/HomeTitle";
import Job from "../Job/Job";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);
  return (
    <div>
      <HomeTitle title={"Featured Jobs"} description={"Explore thousands of job opportunities with all the information you need. Its your future"}></HomeTitle>
      <div className=" p-5 grid md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
