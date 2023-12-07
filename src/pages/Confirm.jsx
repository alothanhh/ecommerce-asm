import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Confirm = () => {
  const navigate = useNavigate();
  const [notify, setNotify] = useState(false);
  const [form, setForm] = useState({
    payer_id: "",
    paypal_id: "",
  });
  const handleForm = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleConfirm = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/payment/verify/",
        form,
        { withCredentials: true }
      );
      if (response.data.success === false) {
        setNotify(true);
      } else {
        setNotify(false);
        alert("Email Xác nhận đã được gửi, Cảm ơn bạn nhiều!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Xác nhận đơn hàng</h1>
        <hr />
        {notify && (
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto text-center">
            <p>Sai paypalId hoặc payerId, Xin hãy nhập lại!</p>
          </div>
        )}
        <div className="row my-4 h-100 ">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleConfirm}>
              <div className="my-3">
                <label htmlFor="display-4">ID Người trả</label>
                <input
                  type="text"
                  name="payer_id"
                  value={form.payer_id}
                  className="form-control"
                  onChange={handleForm}
                  id="floatingInput"
                  placeholder="Payer Id"
                />
              </div>
              <div className="my-3">
                <label htmlFor="display-4">ID Đơn hàng</label>
                <input
                  type="text"
                  name="paypal_id"
                  value={form.paypal_id}
                  className="form-control"
                  onChange={handleForm}
                  id="floatingInput"
                  placeholder="Paypal Id"
                />
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Xác nhận
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

export default Confirm;
