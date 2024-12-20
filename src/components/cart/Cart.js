import { useState } from "react";
import {
  getCart,
  saveCart,
  removeFromCart,
  getTotalPriceInCart,
} from "./CartUtils";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(getCart() || "");
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(getTotalPriceInCart());
  const updateTotalPrice = (cart) => {
    const totalPrice = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotalPrice(totalPrice);
  };
  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );

    console.log(updatedCart);
    saveCart(updatedCart);
    setCart(getCart());
    updateTotalPrice(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    updateTotalPrice(getCart());
    setCart(getCart());
    navigate("/gioHang");
  };

  return (
    <div className="p-3">
      <h1>Giỏ hàng của bạn</h1>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn trống rỗng.</p>
      ) : (
        <table className="border lg:w-[1000px] bg-white">
          <tr className="border">
            <th className="border">Tên sản phẩm</th>
            <th className="border">Hình ảnh</th>
            <th className="border">Giá</th>
            <th className="border w-[20%]">Số lượng</th>
            <th className="border"></th>
          </tr>
          {cart.map((product) => (
            <tr key={product.id} className="">
              <th className="border">{product.name}</th>
              <th className="w-16">
                <img src={product.image} alt="" />
              </th>
              <th className="border">
                {(product.quantity * product.price).toLocaleString()}₫
              </th>
              <th className="border w-[20%]">
                <div className="flex gap-2 text-center items-center justify-center">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                    alt=""
                    className="w-5 border"
                    onClick={() =>
                      handleQuantityChange(
                        product.id,
                        Math.max(1, product.quantity - 1)
                      )
                    }
                  />
                  <input
                    type="text"
                    class="border w-5"
                    value={product.quantity}
                    onChange={handleQuantityChange}
                  ></input>
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                    alt=""
                    className="w-5 border"
                    onClick={() =>
                      handleQuantityChange(product.id, product.quantity + 1)
                    }
                  />
                </div>
              </th>
              <th className="border">
                <button onClick={() => handleRemoveFromCart(product.id)}>
                  Xóa
                </button>
              </th>
            </tr>
          ))}
        </table>
      )}
      <div className="">
        <h2 className="font-semibold text-lg">
          Tổng tiền: {totalPrice.toLocaleString()}₫
        </h2>
        <button className="bg-red-600 text-white rounded-md p-2 hover:bg-blue-300">
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Cart;
