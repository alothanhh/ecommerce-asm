import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Liên hệ với chúng tôi</h1>
        <hr />
        <h5 className="text-center fs-5 weight-light">Hãy để lại thông tin liên lạc và kèm lời nhắn nhủ của bạn </h5>
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Họ và tên</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Nhập họ và tên bạn "
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@gmail.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Lời nhắn nhủ</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Nhập lời nhắn nhủ"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Gửi
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

export default ContactPage;
