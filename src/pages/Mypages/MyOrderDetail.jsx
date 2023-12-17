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
import details from '../../components/MyOrderDetail/Data.jsx';

const MyOrderDetail = () => {
  const { orderCode } = useParams();

  const orderDetail = details.find(detail => detail.shippingDetailsInfo.orderCode === orderCode);
  const paymentDetail = orderDetail.amountInfo;
  const sender = orderDetail.consumerInfo;
  const deliveryInfo = orderDetail.shippingDetailsInfo;

  console.log(paymentDetail);
  console.log(orderDetail);

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
          <ProductDetail goodsDetails={orderDetail} orderCode={orderCode}/>
          <DeliveryBox />
          <PaymentBox paymentDetail={paymentDetail}/>
          <OrderSender sender={sender} orderCode={orderCode}/>
          <DelivertInfoBox deliveryInfo={deliveryInfo}/>
          <AddInfo />
        </Container>
      </FlexWrapper>
    </>
  );
};

export default MyOrderDetail;
