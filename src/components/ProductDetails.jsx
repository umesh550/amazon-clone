import React from "react";
import ProductBadge from "./ProductBadge";
import ProductRatings from "./ProductRatings";

const ProductDetails = ({ products, rating }) => {
  return (
    <div>
      <p className="text-xl xl:text-2xl font-medium mb-1">{products.title}</p>
      <p className="text-sm xl:text-base mb-1">
        by <span className="text-blue-400">{products.brand}</span>
      </p>
      <div className="flex item space-x-2 mb-1">
        <p className="text-sm xl:text-base">{products.avgRating}</p>
        {rating && (
          <div className="text-sm xl:text-base">
            <ProductRatings
              avgRating={products.avgRating}
              ratings={products.ratings}
            />
          </div>
        )}
      </div>
      <p className="text-sm xl:text-base mb-1 font-bold">
        {products.attribute}
      </p>
      <ProductBadge badge={products.badge} />
    </div>
  );
};

export default ProductDetails;
