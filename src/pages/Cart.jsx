import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
// import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [listCardItem, setListCardItem] = useState([]);
  useEffect(() => {
    const shoppingSession = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/productservice/product/shoppingsession",
        { withCredentials: true }
      );
      setTotal(response.data.total);
    };
    const listCardItemFunc = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/productservice/product/carditem/",
        { withCredentials: true }
      );
      setListCardItem(response.data);
    };

    if (currentUser) shoppingSession();
    listCardItemFunc();
  }, []);
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("userProfile");
    if (user) {
      return true;
    }
    return false;
  });

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">
              Giỏ hàng bạn đang không có mặt hàng nào
            </h4>
            <Link to="/" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 15000;
    let totalItems = 0;
    listCardItem.map((item) => {
      return (subtotal += item.product_id.price * item.quantity);
    });

    listCardItem.map((item) => {
      return (totalItems += item.quantity);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Danh sách sản phẩm trong giỏ hàng</h5>
                  </div>
                  <div className="card-body">
                    {listCardItem.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div
                                className="bg-image rounded"
                                data-mdb-ripple-color="light"
                              >
                                <img
                                  src={item.product_id.image_url}
                                  // className="w-100"
                                  alt={item.product_id.name}
                                  width={100}
                                  height={75}
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <strong>{item.product_id.name}</strong>
                              </p>
                              {/* <p>Color: blue</p>
                              <p>Size: M</p> */}
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div
                                className="d-flex mb-4"
                                style={{ maxWidth: "300px" }}
                              >
                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    // removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                                <div
                                  className="mx-5"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <p style={{ marginTop: "1rem" }}>
                                    {item.quantity}
                                  </p>
                                </div>

                                <button
                                  className="btn px-3"
                                  onClick={() => {
                                    // addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>
                                  <span className="text-muted">
                                    {item.quantity}
                                  </span>{" "}
                                  x ${item.product_id.price}
                                </strong>
                              </p>
                            </div>
                          </div>

                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Thanh toán</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Sản phẩm ({totalItems})
                        <span>{Math.round(subtotal)} đ</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Phí giao hàng (Tạm tính)
                        <span>{shipping} đ</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Tổng thanh toán</strong>
                        </div>
                        <span>
                          <strong>{Math.round(subtotal + shipping)} đ</strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Đi đến xác nhận thanh toán
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Giỏ hàng</h1>
        <hr />
        {!currentUser && <EmptyCart />}
        {currentUser && total !== 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
