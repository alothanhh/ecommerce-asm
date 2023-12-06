import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="/assets/shop.jpg"
            alt="Card"
            style={{ width: "auto", height: "850px", opacity: "0.6" }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h2 className="card-title fs-1 text-white ">Sản phẩm mới</h2>
              <p className="card-text fs-5 d-none d-sm-block  text-white ">
                Công ty chúng tôi vừa nhập một vài sản phẩm mới mang tính kỉ
                niệm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
