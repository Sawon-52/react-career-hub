import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppliedJob] = useState([]);
  const [displyJob, setDisplayJob] = useState([]);

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
      setDisplayJob(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied);
    }
  }, [jobs]);

  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJob(appliedJob);
    } else if (filter === "remote") {
      const remoteJobs = appliedJob.filter((job) => job.remote_or_onsite === "Remote");
      setDisplayJob(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJob.filter((job) => job.remote_or_onsite === "Onsite");
      setDisplayJob(onsiteJobs);
    }
  };

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-center text-3xl font-bold my-10"> Applied Jobs</h2>
      <div className="flex justify-end ">
        <details className="dropdown">
          <summary className="m-1 btn">Sort Job</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ">
            <li onClick={() => handleJobFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="my-4">
        {displyJob.map((job) => (
          <AppliedJob job={job} key={job.id}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default Applied;
