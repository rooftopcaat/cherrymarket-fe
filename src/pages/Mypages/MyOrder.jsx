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
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";
import styled from "styled-components";




const MyOrder = () => {
    function generateImageUrl(goodsId) {
        const imageUrlBase = "https://kr.object.ncloudstorage.com/cherry-product/";
        const imageUrl = `${imageUrlBase}${goodsId}/${goodsId}_0.png`;
        return imageUrl;
      }

    // 더미객체 
    const orderData = [
        {
            "goodsId": "0093774",
            "orderCode": "23452345642332323",
            "orderStatus": "주문 접수",
            "amount": 25000,
            "productName": "[오뚜기]오뮤 가뿐한끼 현미밥 150g x 30입 ",
            "paymentMethod": "간편결제",
            "createdAt": "2023.12.10 (11시 33분)",
        },
        {
            "goodsId": "5063043",
            "orderCode": "98765432109876543",
            "orderStatus": "배송 중",
            "amount": 3260,
            "productName": "[우유공식] 무항생제 우유 900ml 외 1건",
            "paymentMethod": "신용카드",
            "createdAt": "2023.12.11 (14시 20분)",
        },
        {
            "goodsId": "5051826",
            "orderCode": "87654321987654321",
            "orderStatus": "주문 대기",
            "amount": 54000,
            "productName": "[kim`s Butcher]돌돌말이 대패 삼겹살 1kg(냉동)",
            "paymentMethod": "무통장 입금",
            "createdAt": "2023.12.12 (09시 45분)",
        },
        {
            "goodsId": "5026039",
            "orderCode": "12345678901234567",
            "orderStatus": "주문 완료",
            "amount": 22000,
            "productName": "[시도니오스]르 섭틸(2개입)",
            "paymentMethod": "휴대폰 결제",
            "createdAt": "2023.12.13 (16시 02분)",
        }
    ];
    


    return (
<>
    <Header />
    <MainDiv>
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

    {orderData.map((item) => (
        <OrderBox key={item.orderCode} item={item}
        productImageUrl={generateImageUrl(item.goodsId)}
        />
    ))}
    </UlWrapper>
    </Container>
    </FlexWrapper>
    <FixedSiderbar />
    </MainDiv>
    <Footer />
</>

    );
}

export default MyOrder;

const MainDiv = styled.div`
position: relative;
    min-width: 1050px;
`;

