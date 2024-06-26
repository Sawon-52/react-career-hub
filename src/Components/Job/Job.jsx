import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, job_type, remote_or_onsite, location, salary } = job;
  return (
    <div className="border-2 border-gray-600 rounded-xl p-10 space-y-3">
      <img src={logo} alt="Company logo" />
      <h1 className="text-3xl font-bold ">{job_title}</h1>
      <h2 className="text-2xl ">{company_name}</h2>
      <div className="flex gap-4">
        <button className="btn btn-outline btn-success ">{remote_or_onsite}</button>
        <button className="btn btn-outline btn-info">{job_type}</button>
      </div>
      <div className="flex gap-10 text-xl">
        <h3 className="flex items-center gap-3">
          <SlLocationPin /> {location}
        </h3>
        <h3 className="flex items-center gap-3 ">
          <RiMoneyDollarCircleLine />
          Salary: {salary}
        </h3>
      </div>
      
      <div>
        <Link to={`/job/${id}`}>
          <button className="btn btn-info">View Details</button>
        </Link>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
