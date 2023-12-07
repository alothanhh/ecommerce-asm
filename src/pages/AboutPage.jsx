import React from "react";
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Về chúng tôi</h1>
        <hr />
        <p className="lead text-center">
          <b>
            Chào mừng đến với Sourique Corner - Nơi tạo nên những kỷ niệm đáng
            nhớ!
          </b>
        </p>
        <p
          className="lead"
          style={{ textAlign: "justify", textJustify: "inter-word" }}
        >
          &emsp;&emsp;Sourique Corner là một cửa hàng in quà lưu niệm độc đáo và
          sáng tạo, nơi bạn có thể tìm thấy những sản phẩm độc đáo để ghi lại
          những khoảnh khắc đáng nhớ trong cuộc sống của mình. Chúng tôi tự hào
          là địa điểm lý tưởng để bạn tạo ra những món quà lưu niệm độc đáo,
          mang ý nghĩa và thể hiện tình yêu, sự trân trọng và sự chăm sóc đến
          những người thân yêu của mình. Với đội ngũ nhân viên giàu kinh nghiệm
          và tận tâm, chúng tôi cam kết mang đến cho bạn những sản phẩm in quà
          lưu niệm chất lượng cao, từ những chiếc áo thun cá nhân hóa, huy hiệu,
          ảnh lưu niệm, cho đến các sản phẩm trang trí như ốp điện thoại, ảnh
          treo tường và nhiều hơn nữa. Mỗi sản phẩm được tạo ra từ Sourique
          Corner đều mang trong mình câu chuyện riêng của bạn, là một phần của
          cuộc sống và kỷ niệm của bạn.
          <br />
          &emsp;&emsp;Hãy ghé thăm Sourique Corner ngay hôm nay để khám phá thế
          giới của những món quà lưu niệm độc đáo và tạo ra những kỷ niệm vĩnh
          cửu. Chúng tôi mong muốn được phục vụ bạn và giúp bạn ghi lại những
          khoảnh khắc đáng nhớ trong cuộc sống!
        </p>

        <h2 className="text-center py-4">Thành viên</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/1.jpg"
                alt=""
                height={160}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Lê Ngọc Hòa</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/2.jpg"
                alt=""
                height={160}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Thi Khắc Quân</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/3.jpg"
                alt=""
                height={160}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Cù Thanh Sơn</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/4.jpg"
                alt=""
                height={160}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Phương Chung Tú</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/5.jpg"
                alt=""
                height={160}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Lâm Nhật Tân</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/6.jpg"
                alt=""
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Đặng Quang Thành</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/7.jpg"
                alt=""
                height={160}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Đặng Quang Huy</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="/assets/8.jpg"
                alt=""
                height={160}
                style={{ height: "200px", width: "100%", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Hồ Trương Đức Tiến</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
