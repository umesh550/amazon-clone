// Cart component
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <div className="text-white flex items-center  rounded-sm hover:border-2 px-3 pt-[9px]">
      <div className="flex">
        <RiShoppingCartLine size={30} className="text-base" />
        <div className="relative">
          <div className="absolute bottom-[21px] right-2 font-bold text-orange-400">
            {cart}
          </div>
        </div>
      </div>
      <div className="mt-[14px] text-xs xl:text-sm font-bold">Cart</div>
    </div>
  );
};

export default Cart;
