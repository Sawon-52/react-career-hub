import { Link, useLoaderData, useParams } from "react-router-dom";

const Jobdetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  //   console.log(data);
  //   console.log(id);

  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);

  const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

  return (
    <div className="grid md:grid-cols-3 gap-5 w-4/5 mx-auto my-10">
      <div className="md:col-span-2 space-y-5 text-justify text-md">
        <h2>
          <span className="font-bold">Jobd Description: </span>
          {job_description}
        </h2>
        <h2>
          <span className="font-bold">Job Responsibility: </span>
          {job_responsibility}
        </h2>
        <h2>
          <span className="font-bold">Educational Requirements: </span>
          {educational_requirements}
        </h2>
        <h2>
          <span className="font-bold">experiences: </span>
          {experiences}
        </h2>
      </div>

      <div className="bg-gray-800 p-5">
        <div>
          <h2 className="text-xl font-bold">Job Details</h2>
          <hr />
          <h3 className="mt-3">{salary}</h3>
          <h3>{job_title}</h3>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-3">Contact Information</h1>
          <hr />
          <h3 className="mt-3">{contact_information.phone}</h3>
          <h3>{contact_information.email}</h3>
          <h3>{contact_information.address}</h3>
        </div>
        <div className="flex justify-center mt-6">
          <Link>
            <button className="btn btn-primary px-10 text-xl"> Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jobdetails;
