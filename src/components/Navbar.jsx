import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("userProfile");
    if (user) {
      return true;
    }
    return false;
  });

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const shoppingSession = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/productservice/product/shoppingsession"
      );
      console.log(response.data.tota);
      setTotal(response.data.total);
    };
    if (currentUser) shoppingSession();
  }, []);
  const HandleLogout = async () => {
    setCurrentUser(false);
    localStorage.clear();
    removeCookie("jwt");
    navigate("/login");
    try {
      const response = await axios.post("localhost:8000/api/v1/users/logout/");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          <img
            src="../assets/icon.png"
            alt="Sourique corner"
            style={{ width: "200px", height: "auto" }}
          />
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Trang chủ{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Về chúng tôi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Liên hệ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/checkerror">
                Kiểm lỗi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chatbox">
                Tư vấn KH
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            {!currentUser && (
              <>
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Đăng nhập
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus mr-1"></i> Đăng ký
                </NavLink>
              </>
            )}
            {currentUser && (
              <>
                <button
                  onClick={HandleLogout}
                  className="btn btn-outline-dark m-2"
                >
                  <i className="fa fa-sign-out-alt mr-1"></i> Đăng xuất
                </button>
                <NavLink to="/cart" className="btn btn-outline-dark m-2">
                  <i className="fa fa-cart-shopping mr-1"></i> Giỏ hàng ({total}
                  ){" "}
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
