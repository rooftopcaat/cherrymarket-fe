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


const ProductInquiry = () => {


    return (
        <>
        <Header />
        <Mypage />
        <FlexWrapper>
        
        <MypageMenu />
            <Container>
        
        <TitleWraper >
            <Title>
                <TitleHead>상품문의</TitleHead>
                <TitleSpan>123213</TitleSpan>
            </Title>
        </TitleWraper>
        <UlWrapper style={{borderTop: '2px solid rgb(51, 51, 51)'}}>
    
        </UlWrapper>
        </Container>
        </FlexWrapper>
        </>
    )
}

export default ProductInquiry;