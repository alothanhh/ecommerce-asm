import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  const [notify, setNotify] = useState(false);
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/register/",
        form
      );
      if (response.data.message === "Failed") {
        setNotify(true);
      } else {
        setNotify(false);
        alert("You have registered success!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleForm = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Đăng ký</h1>
        <hr />
        {notify && (
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto text-center">
            <p>
              Không thể đăng ký tài khoản, xin nhập lại thông tin chính xác!
            </p>
          </div>
        )}
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleRegister}>
              <div className="form my-3">
                <label htmlFor="FirstName">Tên người dùng</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleForm}
                  id="FirstName"
                  placeholder="Điền tên người dùng"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="LastName">Họ và tên đệm</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleForm}
                  id="LastName"
                  placeholder="Điền họ và tên đệm"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="UserName">Tên tài khoản</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={form.username}
                  onChange={handleForm}
                  id="Name"
                  placeholder="Điền tên tài khoản"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Địa chỉ Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleForm}
                  id="Email"
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleForm}
                  id="Password"
                  placeholder="Nhập mật khẩu"
                />
              </div>
              <div className="my-3 text-center">
                <p>
                  Bạn đã có tài khoản?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Đăng nhập ở đây
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
