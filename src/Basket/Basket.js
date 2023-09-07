import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Basket.scss";
import { BiMinus } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Context } from "../Context/BasketContext";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "./CloseButton";

export default function Basket() {
  const { basket, setBasket } = useContext(Context);
  const { counter, setCounter } = useContext(Context);
  const { total, setTotal } = useContext(Context);
  const [notifications, setNotifications] = useState([0]);

  const handleDelete = (item) => {
    const deleted = basket.filter((x) => x.data?.id !== item.data?.id);

    let newTotal = 0;
    let newCounter = 0;

    deleted.forEach((element) => {
      newTotal += element.count * element.data.price;
      newCounter += element.count;
    });

    setTotal(newTotal);
    setCounter(newCounter);
    setBasket(deleted);
  };

  const handleIncrement = (product) => {
    let newTotal = total;
    let newCounter = counter;

    basket.forEach((elem) => {
      if (elem.data.id === product.data.id) {
        elem.count += 1;
        newCounter += 1;
        newTotal += elem.data.price;
      }
    });

    setCounter(newCounter);

    setTotal(parseFloat(newTotal.toFixed(2)));
  };

  const handleDecrement = (product) => {
    let newTotal = total;
    let newCounter = counter;

    basket.forEach((elem) => {
      if (elem.data.id === product.data.id) {
        if (elem.count > 0) {
          elem.count -= 1;
          newCounter -= 1;
          newTotal -= elem.data.price;
        }

        if (elem.count === 0) {
          const decrement = basket.filter((x) => x.data?.id !== elem.data?.id);
          setBasket(decrement);
        }
      }
    });

    setCounter(newCounter);
    setTotal(newTotal.toFixed(2));
  };

  return (
    <div className="viewbag">
      <Container>
        <Row>
          <Col sm={8}>
            <div className="bag-content">
              <h1>MY BAG</h1>
              <p>Items are reserved for 60 minutes</p>
            </div>

            <div className="content">
              {counter === 0 ? (
                <div className="fav-empty">
                  <div className="empty">
                    <img src="https://cdn-icons-png.flaticon.com/512/42/42901.png" />
                  </div>
                  <div className="text-empty">
                    <h2>Your Bag is Empty</h2>
                    <Link to={"/add"}>
                      <button className="button-6">Continue shopping </button>
                    </Link>
                  </div>
                </div>
              ) : (
                basket.map((item) => (
                  <AnimatePresence  key={item.data?.id} initial={false}>
                    <motion.div
                      key={item.data?.id}
                      positionTransition
                      initial={{ opacity: 0, y: 50, scale: 0.3 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                    >
                      <div className="bag-item" key={item.data?.id}>
                        <div className="bag-left">
                          <img src={item.data?.image} />
                        </div>
                        <div className="bag-right">
                          <div className="price">
                            <span>${item.data?.price}</span>
                          </div>
                          <div className="name">{item.data?.title}</div>
                          <div className="variable">
                            <span className="span3">
                              <button onClick={() => handleDecrement(item)}>
                                <BiMinus />
                              </button>
                              {item.count}
                              <button onClick={() => handleIncrement(item)}>
                                <AiOutlinePlus />
                              </button>
                            </span>
                          </div>
                        </div>

                        <div
                          onClick={() => handleDelete(item)}
                          className="bag-end"
                        >
                          <CloseButton
                            close={() =>
                              setNotifications(
                                handleDelete(item.data, item.data.id)
                              )
                            }
                          />
                          {/* <button></button> */}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ))
              )}
            </div>

            <div className="bag-subtotal">
              <span className="bag-subtotal">Sub-total</span>
              <span className="bag-price">${total}</span>
            </div>
          </Col>
          <Col sm={4}>
            <div className="sub-total">
              <div className="main-total">
                <div className="title">
                  <h2>TOTAL</h2>
                </div>
                <div className="total">
                  <span className="total1">Sub-Total</span>
                  <span className="total2">${total}</span>
                </div>
                <div className="delivery">
                  <span>Delivery</span>

                  {/* <Link></Link> */}
                </div>
                <div className="check">
                  <p>CheckOut</p>
                </div>
                <div className="accept">
                  <div className="we"> We Accept:</div>
                  <img src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" />
                  <div className="code">
                    <p>Got a discount code? Add it in the next step.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
