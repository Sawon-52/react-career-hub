import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    // console.log(storedJobIds);
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === parseInt(id));
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJob(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, [jobs]);

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center text-3xl font-bold my-10"> Applied Jobs</h2>
      <div className="my-4">
        {appliedJob.map((job) => (
          <AppliedJob job={job} key={job.id}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default Applied;
