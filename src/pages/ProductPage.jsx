import React from "react";
import { Link, useParams } from "react-router-dom";

import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

import { ProductDetails } from "../components";

function ProductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState("1");
  const [products, setProducts] = React.useState([]);

  const addQuantityToProduct = () => {
    setProducts((products.quantity = quantity));
    return products;
  };

  React.useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products[id]));
  }, [id, products]);

  return (
    products && (
      <div className=" bg-AmazonClone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={products.image} alt="" className="" />
            </div>
            {/*middle */}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400 ">
              <div className="mb-3">
                <ProductDetails products={products} rating={true} />
              </div>
              <div className="pt-2">{products.description}</div>
            </div>

            {/*Right */}
            <div className="col-span-2 bg-white p-4 rounded-sm">
              <div className="text-xl xl:text-2xl text-red-600 font-medium text-right">
                ₹{products.price}
              </div>
              <div className="text-sm xl:text-bases text-[#565959] font-medium text-right">
                M.R.P:{" "}
                <span className="line-through">₹{products.oldPrice}</span>
              </div>
              <div className="text-sm xl:text-bases text-[#565959] font-medium text-right">
                <p>
                  Save: ₹{Math.abs(products.price - products.oldPrice)}
                  <span className=""> ({products.discount}%)</span>
                </p>
                <p className="text-black">Inclusive of all taxes</p>
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-medium">
                Free Returns
              </div>
              <div className="text-sm xl:text-base text-blue-500 font-medium">
                Free Delivery
              </div>
              <div className="text-sm xl:text-base text-green-600 font-medium">
                In Stock
              </div>
              <div className="text-base space-x-2">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  name=""
                  id=""
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                </select>
              </div>
              <Link to="/checkout">
                <button
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="bg-yellow-300 w-[210px] mt-2 text-sm rounded-[30px] p-1 hover:bg-yellow-500"
                >
                  Add to Cart
                </button>
              </Link>
              <button className="bg-[#FF8911] w-[210px] mt-2 text-sm rounded-[30px] p-1 hover:bg-orange-500">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProductPage;
