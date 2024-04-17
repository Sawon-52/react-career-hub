const Banner = () => {
  return (
    <div className="md:flex items-center justify-between my-12 min-h-max">
      <div>
        <h1 className="text-5xl font-bold">
          One Step <br /> Closer To Your <br /> <span className="text-blue-400"> Dream Job</span>
        </h1>
        <p className="text-xl my-5">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <button className="btn bg-blue-500 outline-none border-none text-xl">Get Started</button>
      </div>
      <div>
        <img src="/src/assets/images/user.png" className="flex justify-end" alt="User Image" />
      </div>
    </div>
  );
};

export default Banner;
