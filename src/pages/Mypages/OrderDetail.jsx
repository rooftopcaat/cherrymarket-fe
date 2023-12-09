import MypageMenu from "../../components/Mypage/MypageMenu.jsx";
import Header from "../../common/Header/Header.jsx";
import Mypage from "./Mypage.jsx";
import {
    Title,
    TitleHead,
    TitleSpan,
    TitleWraper,
    FlexWrapper,
    Container,
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import OrderBox from "../../components/Mypage/OrderBox.jsx";

const OrderDetail = () => {


    return (
<>
    <Header />
    <Mypage />
    <FlexWrapper>
    <MypageMenu />
        <Container>
    
    <TitleWraper >
        <Title>
            <TitleHead>주문내역</TitleHead>
            <TitleSpan>지난 최대 3년간의 주문 내역까지 확인할 수 있어요</TitleSpan>
        </Title>
    </TitleWraper>
    <UlWrapper style={{borderTop: '2px solid rgb(51, 51, 51)'}}>
    <OrderBox />
    <OrderBox />
    </UlWrapper>
    </Container>
    </FlexWrapper>
</>

    );
}

export default OrderDetail;

