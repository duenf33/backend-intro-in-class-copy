import PropTypes from "prop-types";

function ChildMovie(props) {
  return (
    <div>
      {props.movieListArray.map((item, index) => {
        return <div key={index}>{item.movie}</div>;
      })}
    </div>
  );
};

ChildMovie.propTypes = {
  movieListArray: PropTypes.array,
};

export default ChildMovie;