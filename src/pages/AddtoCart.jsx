import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { IoTicketOutline } from "react-icons/io5";
import { MdDelete, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import Aos from "aos";
import "aos/dist/aos.css";
import "../pagestyle/WishAdd.scss";
import { ThemeContext } from "../context/ThemeProvider";

const AddtoCart = () => {
  const {
    cart,
    clearCart,
    removeFromCart,
    cardNumber,
    setCardNumber,
    cvv,
    setCvv,
    month,
    setMonth,
    year,
    setYear,
    handleAdd,
  } = useContext(MyContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { isLight } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(newTotal);

    if (cart.length === 0) {
      setDiscountAmount(0);
      setTotalWithDiscount(null);
    } else if (discountAmount > 0) {
      setTotalWithDiscount((newTotal - discountAmount).toFixed(2));
    } else {
      setTotalWithDiscount(null);
    }
  }, [cart, discountAmount]);

  const applyDiscount = () => {
    if (cart.length === 0) {
      setDiscountAmount(0);
      setTotalWithDiscount(null);
      setDiscount("");
      setTotalPrice(0);
      return;
    }

    let discountValue = 0;
    let newTotal = totalPrice;

    if (discount === "GAME20") {
      discountValue = totalPrice * 0.2;
      newTotal = totalPrice - discountValue;
      Swal.fire({
        icon: "success",
        title: "Discount Applied",
        text: "The discount has been successfully applied to your order!",
        customClass: {
          popup: "wishlist-popup",
          title: "wishlist-title",
          htmlContainer: "wishlist-text",
          confirmButton: "wishlist-button",
        },
      });
    }

    setDiscountAmount(discountValue.toFixed(2));
    setTotalWithDiscount(newTotal.toFixed(2));
    setDiscount("");
  };

  return (
    <div className={isLight ? "light-app" : "dark-app"}>
      <div className="wishlist py-5 d-flex justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="wishlist-header">
            <div className="d-flex justify-content-between align-items-center px-5 py-4 gap-lg-0 gap-md-0 gap-sm-0 gap-3">
              <h1
                className={
                  cart.length === 0 ? "mx-auto text-center" : "zero-h1"
                }
              >
                {t("cart")}
              </h1>
              {cart.length > 0 && (
                <button
                  className="clear py-1 px-1"
                  onClick={() => {
                    clearCart();
                    setDiscountAmount(0);
                    setTotalWithDiscount(null);
                  }}
                >
                  {t("clearcart")}
                </button>
              )}
            </div>
          </div>

          <div className="row d-flex justify-content-center py-4">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center">
              {cart.length === 0 ? (
                <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4">
                  <h2 className="text-center empty">
                    <Trans i18nKey="carttext" components={{ br: <br /> }} />
                  </h2>
                  <button
                    className="shop animate__animated animate__tada animate__infinite	infinite animate__slower mb-4"
                    onClick={() => navigate("/game")}
                  >
                    {t("backshop")}
                  </button>
                </div>
              ) : (
                cart.map((el) => (
                  <div
                    key={el.id}
                    className="col-md-10 col-sm-12 d-flex flex-column justify-content-center align-items-center"
                    data-aos="fade-down"
                  >
                    <div className="d-flex wishlist-detail gap-3 p-4 align-items-center mb-4">
                      <div>
                        <img src={el.imgProduct} alt={el.name} />
                      </div>
                      <div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex gap-3 ">
                            <h4 onClick={() => navigate(`/game/${el.id}`)}>
                              {el.name}
                            </h4>
                          </div>
                          <button
                            className="remove"
                            onClick={() => removeFromCart(el.id)}
                          >
                            <MdDelete className="mb-lg-2" />
                          </button>
                        </div>
                        <p className="desc py-2">
                          {el.desc[0].slice(0, 120)}...
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 align-items-center">
                            {el.prevprice && (
                              <p className="prev">
                                <del>${el.prevprice}</del>
                              </p>
                            )}
                            <h5 className="price">
                              <b>${el.price}</b>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="col-lg-4 d-flex justify-content-start flex-column">
              <div className="order-summary sticky-summary pt-4 px-4">
                <h4 className="pb-3">Order Summary</h4>
                <div className="d-flex justify-content-between">
                  <p>{t("subtotal")}</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>

                {discountAmount > 0 && (
                  <div className="d-flex justify-content-between">
                    <p>{t("disapp")}</p>
                    <p className="discount">- ${discountAmount}</p>
                  </div>
                )}

                <div className="d-flex justify-content-between mb-4">
                  <h5>
                    <b>{t("total")}</b>
                  </h5>
                  <h5>
                    <b>${totalWithDiscount || totalPrice.toFixed(2)}</b>
                  </h5>
                </div>

                <div className="d-flex gap-2">
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <IoTicketOutline />
                    </span>
                    <input
                      type="text"
                      placeholder={t("discode")}
                      value={discount}
                      onChange={(e) => setDiscount(e.target.value)}
                    />
                  </div>
                  <button onClick={applyDiscount} className="apply">
                    {t("apply")}
                  </button>
                </div>

                <button
                  className="checkout"
                  onClick={() => {
                    if (cart.length === 0) {
                      Swal.fire({
                        icon: "warning",
                        title: "Your cart is empty!",
                        text: "Please add some items before proceeding to checkout.",
                        customClass: {
                          popup: "wishlist-popup",
                          title: "wishlist-title",
                          htmlContainer: "wishlist-text",
                          confirmButton: "wishlist-button",
                        },
                      });
                    } else {
                      setShowModal(true);
                    }
                  }}
                >
                  {t("checkcout")}
                  <MdKeyboardDoubleArrowRight className="icon-max mx-1" />
                </button>
              </div>
            </div>
          </div>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-container">
                <div className="modal-header">
                  <h3 className="py-3 name">{t("checkcout")}</h3>
                  <button
                    className="close-btn"
                    onClick={() => setShowModal(false)}
                  >
                    ✖
                  </button>
                </div>
                <div className="modal-body">
                  <form className="d-flex flex-column" onSubmit={handleAdd}>
                    <label className="modal-label">{t("cardnumber")}</label>
                    <input
                      type="text"
                      className="my-2 modal-input"
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(
                          e.target.value.replace(/\D/g, "").slice(0, 16)
                        )
                      }
                      placeholder="Enter 16-digit card number"
                      required
                    />

                    <label className="modal-label">CVV</label>
                    <input
                      type="text"
                      className="my-2 modal-input"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                      }
                      placeholder="Enter 3-digit CVV"
                      required
                    />

                    <label className="modal-label">{t("month")}</label>
                    <input
                      type="text"
                      className="my-2 modal-input"
                      value={month}
                      onChange={(e) =>
                        setMonth(e.target.value.replace(/\D/g, "").slice(0, 2))
                      }
                      placeholder="MM"
                      required
                    />

                    <label className="modal-label">{t("year")}</label>
                    <input
                      type="text"
                      className="my-2 modal-input"
                      value={year}
                      onChange={(e) =>
                        setYear(e.target.value.replace(/\D/g, "").slice(0, 4))
                      }
                      placeholder="YYYY"
                      required
                    />
                    <button type="submit" className="add mt-3">
                      {t("buy")}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
          <div className="row motion mt-5">
            <div className="col-12">
              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                  }}
                  className="text-4xl font-bold"
                >
                  <div className="py-3">
                    <span>{t("motion")}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtoCart;
