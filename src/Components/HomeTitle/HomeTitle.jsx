import PropTypes from "prop-types";
const HomeTitle = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-8 my-5">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl text-center">{description}</p>
    </div>
  );
};

HomeTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HomeTitle;
