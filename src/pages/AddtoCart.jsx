import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { GoStarFill } from "react-icons/go";

const AddtoCart = () => {
  const { cart, clearCart, removeFromCart, addToCart } = useContext(MyContext);
  const [discount, setDiscount] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(null);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const applyDiscount = () => {
    let discountValue = 0;
    let newTotal = totalPrice

    if (discount === "discount20") {
      discountValue = totalPrice * 0.2; 
      newTotal = totalPrice - discountValue;
    }

    setDiscountAmount(discountValue.toFixed(2));
    setTotalWithDiscount(newTotal.toFixed(2));
  };

  return (
    <div className="wishlist">
      <div className="container-fluid">
        <div className="wishlist-header">
          <div className="d-flex justify-content-between align-items-center px-5 py-4">
            <h1 className={cart.length === 0 ? "mx-auto text-center" : ""}>
              My Wishlist
            </h1>
            {cart.length > 0 && (
              <button className="clear" onClick={clearCart}>
                Clear Cart
              </button>
            )}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {/* Left side: Cart items */}
          <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center">
            {cart.map((el) => (
              <div
                key={el.id}
                className="col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center"
              >
                <div className="d-flex wishlist-detail justify-content-between px-lg-5 align-items-center mb-4">
                  <div>
                    <img src={el.imgProduct} alt={el.name} />
                  </div>
                  <div>
                    <div className="d-flex justify-content-between mb-2">
                      <h3>{el.name}</h3>
                      <p className="star-p mt-lg-1">
                        <GoStarFill className="star mb-lg-1" /> {el.rate}
                      </p>
                    </div>
                    <div>
                      <p className="genre">Genres</p>
                    </div>
                    <div className="d-flex flex-wrap mb-2">
                      {el.genres?.map((genre, index) => (
                        <p key={index} className="prop text-center mx-1 py-1">
                          {genre}
                        </p>
                      ))}
                    </div>
                    <div>
                      {el.prevprice && (
                        <p className="prev">
                          <del>${el.prevprice}</del>
                        </p>
                      )}
                      <h5 className="price">
                        <b>${el.price}</b>
                      </h5>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button
                        className="remove"
                        onClick={() => removeFromCart(el.id)}
                      >
                        Remove
                      </button>
                      <button className="add" onClick={() => addToCart(el)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side: Order summary */}
          <div className="col-lg-4 d-flex justify-content-start">
            <div className="order-summary sticky-summary">
              <h4>Order Summary</h4>
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>

              {/* Discount Input */}
              <div className="d-flex flex-column">
              {/* Show Discount if Applied */}
              {discountAmount > 0 && (
                <div className="d-flex justify-content-between text-success">
                  <p>Discount Applied</p>
                  <p>- ${discountAmount}</p>
                </div>
              )}

              {/* Final Total */}
              <div className="d-flex justify-content-between">
                <p><b>Total</b></p>
                <p><b>${totalWithDiscount || totalPrice.toFixed(2)}</b></p>
              </div>
              <div className="d-flex">

              <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter discount code"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>

                <div>
                  <button onClick={applyDiscount}>Apply</button>
                </div>
              </div>
              <button>Checkout</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
