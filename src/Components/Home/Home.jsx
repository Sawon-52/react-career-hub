import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  return (
    <div className="w-4/5 mx-auto">
      <Banner></Banner>
      {/* <h2>This is home componet</h2> */}
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
