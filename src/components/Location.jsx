import { GrLocation } from "react-icons/gr";

const Location = () => {
  return (
    <div className=" rounded-sm hover:border-2">
      <p className="text-AmazonClone-color text-xs xl:text-sm px-3">
        Deliver to
      </p>
      <div className="flex items-center">
        <GrLocation className="text-white" />
        <span className="text-white xl:text-base font-bold">India</span>
      </div>
    </div>
  );
};

export default Location;
