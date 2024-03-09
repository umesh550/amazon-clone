import { IoIosStarOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
const ProductRatings = (props) => {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;

  return (
    <div className="flex">
      {Array.from({ length: starNumber }, (_, i) => (
        <FaStar key={i} className="stroke-[#F1B61F] fill-[#F1B61F] h-[24px]" />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <FaStar key={i} className="stroke-[#F1B61F] h-[24px]" />
      ))}
      <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRatings;
