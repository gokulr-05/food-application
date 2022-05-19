import { useState, useContext } from "react";
import "./Cart.css";
import cartContext from "../../store/cart-context";
import Checkout from "./Checkout";
import SuccessModal from "./SuccessModal";
let Cart = () => {
  let [isCheckOut, setIsCheckOut] = useState(false);
  let cartctx = useContext(cartContext);

  let data = [...cartctx.items];
  let data1 = [{ id: "1", name: "pravin", amount: "55.25" }];

  let PlusHandler = ({ id, name, price, amount }) => {
    cartctx.addItem({ id, name, price, amount: 1 });
  };

  let minusHandler = ({ id, name, price, OriginalAmount }) => {
    console.log({ id, name, price });
    cartctx.deleteItem({
      id,
      name,
      price,
      amount: 1,
      OriginalAmount: OriginalAmount,
    });
  };

  let postData = async (obj) => {
    try {
      let res = await fetch(
        "https://food-order-app-dd19c-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: obj, items: cartctx.items }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!res.ok) {
        console.log("fetch POST: ", res);
        throw new Error("Something went Wrong in posting your data to API");
      } else {
        console.log("fetch POST: ", res);
        cartctx.emptyCart();
        let closeBtn = document.getElementById("cart-close-btn");
        closeBtn.click();
        let successbtn = document.getElementById("successmodalbtn");
        // successbtn.setAttribute("data-bs-toggle", "modal");
        // successbtn.setAttribute(" data-bs-target", "#successmodal");
        successbtn.click();
      }
    } catch (err) {
      console.log("err message", err.message);
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content p-3">
            <div className="modal-header">
              <h5 className="modal-title text-capitalize fs-3">cart</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {data.length === 0 && (
                <h5 className="text-center text-capitalize">
                  your cart is empty
                </h5>
              )}

              {data.map((val) => {
                return (
                  <div
                    key={val.id}
                    className="d-flex align-items-center justify-content-between py-3"
                  >
                    <div className="d-flex align-items-center ">
                      <p key={val.id} className="fw-bold p-0 m-0">
                        {val.name}
                      </p>
                    </div>
                    <div className="d-flex align-items-center fs-5">
                      {val.amount}*${Number(val.price).toFixed(2)}
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className="text-uppercase op-btn"
                        onClick={(e) => {
                          PlusHandler({
                            id: val.id,
                            name: val.name,
                            price: val.price,
                            amount: val.amount,
                          });
                        }}
                      >
                        +
                      </button>
                      <button
                        className="text-uppercase  op-btn"
                        onClick={(e) => {
                          minusHandler({
                            id: val.id,
                            name: val.name,
                            price: val.price,
                            OriginalAmount: val.amount,
                          });
                        }}
                      >
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
              {isCheckOut && (
                <Checkout postData={postData} setIsCheckOut={setIsCheckOut} />
              )}
            </div>
            <div className="modal-footer d-flex align-items-center justify-content-between py-3">
              <div>
                <h2 className="text-capitalize ">total amount</h2>
              </div>
              <div className="">
                <p className="p-0 m-0 fs-4 tot-amt">
                  {cartctx.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <div className="d-flex align-items-center gap-4">
                {data.length > 0 && (
                  <div>
                    <button
                      onClick={(e) => {
                        setIsCheckOut(true);
                      }}
                      className=" text-capitalize order-btn"
                    >
                      order
                    </button>
                  </div>
                )}
                <div>
                  <button
                    id="cart-close-btn"
                    className=" text-capitalize close-btn"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setIsCheckOut(false);
                    }}
                  >
                    close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal />
    </div>
  );
};

export default Cart;
