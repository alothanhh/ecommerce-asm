import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(["user"]);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [notify, setNotify] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login/",
        form
      );
      if (response.data.message === "Wrong Authetication") {
        setNotify(true);
      } else {
        setNotify(false);
        const token = response.data.token;
        setCookie("jwt", token, { path: "/" });
        localStorage.setItem("userProfile", JSON.stringify(response.data));
        navigate("/");
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
        <h1 className="text-center">Đăng nhập</h1>
        <hr />
        {notify && (
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto text-center">
            <p>Sai email hoặc password, Xin hãy nhập lại!</p>
          </div>
        )}
        <div className="row my-4 h-100 ">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleLogin}>
              <div className="my-3">
                <label htmlFor="display-4">Địa chỉ Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  className="form-control"
                  onChange={handleForm}
                  id="floatingInput"
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Mật khẩu</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  className="form-control"
                  onChange={handleForm}
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3 text-center">
                <p>
                  Bạn chưa có tài khoản?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Đăng ký ở đây
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Đăng nhập
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

export default Login;
