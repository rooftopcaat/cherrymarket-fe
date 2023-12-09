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
    SubTitle,
} from "../../components/CustomerService/Style.jsx";
import { UlWrapper } from "../../components/CustomerService/FaqBoard.jsx";
import styled from 'styled-components';



const MypageAddress = () => {

    return (
        <>
        <Header />
        <Mypage />
        <FlexWrapper>
        
        <MypageMenu />
            <Container>
        
        <TitleWraper >
            <Title>
                <TitleHead>배송지관리</TitleHead>
                <TitleSpan>찜한 상품은 최대 200개까지 저장됩니다.</TitleSpan>
            </Title>
        </TitleWraper>
        <SubTitle>
            <TextDiv style={{flexBasis: '60px'}}>선택</TextDiv>
            <TextDiv style={{flex: '1 1 0%'}}>주소</TextDiv>
            <TextDiv style={{flexBasis: '120px'}}>받으실 분</TextDiv>
            <TextDiv style={{flexBasis: '100px'}}>연락처</TextDiv>
            <TextDiv style={{flexBasis: '100px'}}>배송유형</TextDiv>
            <TextDiv style={{flexBasis: '60px'}}>수정</TextDiv>
        </SubTitle>
        <UlWrapper>
    
        </UlWrapper>
        </Container>
        </FlexWrapper>
        </>

    )
}

export default MypageAddress;

const TextDiv = styled.div`
    text-align: center;
    line-height: 20px;
    font-weight: 500;
    color: rgb(51, 51, 51);
`;