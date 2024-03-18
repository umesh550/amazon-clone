import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductDetails } from "../components";

import {
  removeFromCart,
  decrementInCart,
  incrementInCart,
} from "../redux/cartSlice";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto p-8">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6 divide-y p-6 bg-white divide-gray-400">
            <div className="flex items-center justify-between font-medium">
              <p className="text-2xl xl:text-xl mb-2">Shopping Cart</p>
              <p className="text-base xl:text-sm ">Price</p>
            </div>
            {/* Products */}
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12">
                    <div className="col-span-10 grid grid-cols-8 ">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            src={product.image}
                            alt="Checkout product"
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails products={product} rating={false} />
                          </Link>
                        </div>
                        <div>
                          <button
                            className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 cursor-pointer"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 ml-auto mt-2">
                      <div className=" bg-red-600 w-fit ml-auto text-white font-semibold rounded px-2 py-1 text-xs">
                        <span className=""> {product.discount}% off</span>
                      </div>
                      <div className="text-xl xl:text-2xl font-medium text-right">
                        ₹{product.price}
                      </div>
                      <div className="text-sm xl:text-bases text-[#565959] font-thin text-right">
                        M.R.P:{" "}
                        <span className="line-through">
                          ₹{product.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg xl:text-xl text-right mb-4 mr-4">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">₹{subtotal}</span>
            </div>
          </div>
          {/* {Checkout} */}
          <div className="col-span-2 bg-white rounded h-fit p-5">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4 font-medium">
              Subtotal ({itemsNumber} items):{" "}
              <span className="font-semibold">₹{subtotal}</span>
            </div>
            <button className="btn bg-yellow-300 rounded-full px-12 py-2 text-sm font-normal">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
