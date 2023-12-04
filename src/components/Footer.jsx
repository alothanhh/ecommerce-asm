import React from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

// https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#ff7477',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#ff7477',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '0',
    message: 'Chào mừng đến với hỗ trợ nhanh của chúng tôi',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Hãy cho chúng tôi biết tên của bạn',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Chào {previousValue}, chúng tôi có thể giúp gì cho bạn!',
    trigger: 'options',
  },
  {
    id: 'options',
    options: [
      { value: '4', label: 'Tư vấn mua hàng', trigger: '4' },
      { value: '5', label: 'Hố trợ giao hàng/ thanh toán', trigger: '5' },
    ],
  },
  {
    id: '4',
    message: 'Bạn có thể tham khảo các sản phẩm mới ở trang Sản phẩm',
    trigger: '99',
  },
  {
    id: '5',
    message: 'Bạn cần hỗ trợ gì?',
    trigger: 'sub_5',
  },
  {
    id: 'sub_5',
    options: [
      { value: 'sub_5_1', label: 'Hố trợ giao hàng', trigger: 'sub_5_1' },
      { value: 'sub_5_2', label: 'Hố trợ Thanh toán', trigger: 'sub_5_2' },
    ],
  },
  {
    id: 'sub_5_1',
    message: 'Cửa hàng chúng tôi cung cấp dịch vụ miễn phí vận chuyển nội thành TP.HCM với đơn có giá trị từ 500.000đ trở lên',
    trigger: '99',
  },
  {
    id: 'sub_5_2',
    message: 'Cửa hàng chúng tôi cung cấp đầy đủ các dịch vụ thanh toán: Tiền mặt, chuyển khoản và ví điện tử',
    trigger: '99',
  },
  {
    id: '99',
    message: 'Chúc bạn có một khoảng thời gian mua sắm thật tuyệt vời!',
    trigger: '3'
  }
];

const Footer = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
     
        <ChatBot
          steps={steps} 
          botDelay={1500}
          userDelay={500}
          floating={true}
        />
     
    </ThemeProvider>
    
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Web made by {" "}
              <a  href="" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">cse connection</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
