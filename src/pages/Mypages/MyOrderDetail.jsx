import Header from "../../common/Header/Header";
import Mypage from "./Mypage";
import {
  Title,
  TitleHead,
  TitleWraper,
  FlexWrapper,
  Container,
} from "../../components/CustomerService/Style.jsx";
import MypageMenu from "../../components/Mypage/MypageMenu";
import DeliveryBox from "../../components/MyOrderDetail/DeliveryBox";
import PaymentBox from "../../components/MyOrderDetail/PaymentBox";
import OrderSender from "../../components/MyOrderDetail/OrderSender";
import DelivertInfoBox from "../../components/MyOrderDetail/DeliveryInfoBox";
import AddInfo from "../../components/MyOrderDetail/AddInfo.jsx";
import ProductDetail from "../../components/MyOrderDetail/ProductDetail.jsx";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MyOrderDetail = () => {
  const { orderCode } = useParams();
  const [details, setDetails] = useState([]);
  const access_token = sessionStorage.getItem("accessToken");
  const baseUrl = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/order/list/${orderCode}/order-details`, {
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }
        });
        
        setDetails(response.data)
        //console.log(response.data.ordersSummary);
        
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); 

  

  const paymentDetail = details.amountInfo;
  const sender = details.consumerInfo;
  const deliveryInfo = details.shippingDetailsInfo;

  console.log(paymentDetail);

 




  return (
    <>
      <Header />
      <Mypage />
      <FlexWrapper>
        <MypageMenu />
        <Container>
          <TitleWraper>
            <Title>
              <TitleHead>주문 내역 상세</TitleHead>
            </Title>
          </TitleWraper>
          <ProductDetail goodsDetails={details} orderCode={orderCode}/>
          <DeliveryBox />
          <PaymentBox paymentDetail={details}/>
          {/* <OrderSender sender={sender} orderCode={orderCode}/>
          <DelivertInfoBox deliveryInfo={deliveryInfo}/> */}
          <AddInfo />
        </Container>
      </FlexWrapper>
    </>
  );
};

export default MyOrderDetail;
