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

const MyOrderDetail = () => {
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
          <ProductDetail />
          <DeliveryBox />
          <PaymentBox />
          <OrderSender />
          <DelivertInfoBox />
          <AddInfo />
        </Container>
      </FlexWrapper>
    </>
  );
};

export default MyOrderDetail;
