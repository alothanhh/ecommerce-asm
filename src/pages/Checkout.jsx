import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();

  const [listCartItem, setListCartItem] = useState([]);

  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("userProfile");
    if (user) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const ListCardItemFunc = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/productservice/product/carditem/",
        { withCredentials: true }
      );
      setListCartItem(response.data);
    };
    ListCardItemFunc();
  }, []);

  const CheckoutFuncHandler = async () => {
    const res = await axios.get(
      "http://localhost:8000/api/v1/productservice/product/shoppingsession",
      { withCredentials: true }
    );
    const payment_id = res.data.payment_id.id;
    const response = await axios.post(
      "http://localhost:8000/api/v1/payment/checkout/",
      {
        payment_id: payment_id,
      },
      { withCredentials: true }
    );
    window.open(response.data.approved_url, "_blank");
    navigate("/confirm");
  };

  const LoadingCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-3 bg-light text-center">
            <Skeleton height={400} />
          </div>
        </div>
      </div>
    );
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">
              Không có mặt hàng nào cần thanh toán
            </h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 15000;
    let totalItems = 0;
    listCartItem.map((item) => {
      return (subtotal += item.product_id.price * item.quantity);
    });

    listCartItem.map((item) => {
      return (totalItems += item.quantity);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
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
                      Phí giao hàng
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
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Địa chỉ giao hàng</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          Họ và tên
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          // value=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Số điện thoại
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          // value=""
                          required
                        />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@gmail.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Địa chỉ giao hàng cụ thể
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 KTX Khu A"
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label htmlFor="address2" className="form-label">
                          Đường <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label htmlFor="country" className="form-label">
                          Phường/Xã
                        </label>
                        <br />
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>P. Linh Trung</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label htmlFor="state" className="form-label">
                          Quận/Huyện
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>TP.Thủ Đức</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label htmlFor="zip" className="form-label">
                          Tỉnh/Thành phố
                        </label>
                        <select className="form-select" id="city" required>
                          <option value="">Choose...</option>
                          <option>TP.Hồ Chí Minh</option>
                        </select>
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Phương thức thanh toán</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                          Tên trên thẻ
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Tên đầy đủ trên thê
                        </small>
                        <div className="invalid-feedback">
                          Yêu cầu cần thiết
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                          Số thẻ Thanh toán
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">Yêu cầu phải có</div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">
                          Hạn sử dụng
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">Ngày hết hạn</div>
                      </div>

                      <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">Mã bảo mật</div>
                      </div>
                    </div>

                    <hr className="my-4" />
                  </form>
                  <button
                    className="w-100 btn btn-primary "
                    onClick={CheckoutFuncHandler}
                  >
                    Tiếp tục thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Thông tin thanh toán</h1>
        <hr />
        {!currentUser ? (
          <EmptyCart />
        ) : listCartItem.length ? (
          <ShowCheckout />
        ) : (
          <LoadingCart />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
