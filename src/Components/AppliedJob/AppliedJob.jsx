const AppliedJob = ({ job }) => {
  const { logo, salary, job_title, company_name, location, job_type, remote_or_onsite } = job;
  return (
    <div className="flex items-center gap-10 my-10">
      <img src={logo} className="bg-gray-300 p-10 w-60 h-40 object-contain" alt="Company logo" />
      <div className="flex justify-between items-center w-full">
        <div className="space-y-3">
          <div>
            <h2 className="text-2xl font-bold">{job_title}</h2>
            <h2 className="text-xl ">{company_name}</h2>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-primary">{remote_or_onsite}</button>
            <button className="btn btn-primary">{job_type}</button>
          </div>
          <div className="flex gap-4">
            <h1>{location}</h1>
            <h1>Salary: {salary}</h1>
          </div>
        </div>

        <div>
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
