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
import styled from "styled-components";
import AddressBox from "../../components/Mypage/AddressBox.jsx";
import FixedSiderbar from "../../common/FiexDiderbar/FixedSiderbar.jsx";
import Footer from "../../common/Footer/Footer.jsx";

const MypageAddress = () => {
  return (
    <>
      <Header />
      <Mypage />
      <FlexWrapper>
        <MypageMenu />
        <Container>
          <TitleWraper>
            <Title>
              <TitleHead>배송지관리</TitleHead>
              <TitleSpan>찜한 상품은 최대 200개까지 저장됩니다.</TitleSpan>
            </Title>
            <div>
              <SecondDiv>
                <div>
                  <StyledButton>
                    <StyledSpan>
                      <StyledImg
                        src="https://res.kurly.com/pc/ico/2006/ico_add_16x16.svg"
                        alt="새 배송지 추가"
                      />새 배송지 추가
                    </StyledSpan>
                  </StyledButton>
                </div>
              </SecondDiv>
            </div>
          </TitleWraper>
          <SubTitle>
            <TextDiv style={{ flexBasis: "60px" }}>선택</TextDiv>
            <TextDiv style={{ flex: "1 1 0%" }}>주소</TextDiv>
            <TextDiv style={{ flexBasis: "120px" }}>받으실 분</TextDiv>
            <TextDiv style={{ flexBasis: "100px" }}>연락처</TextDiv>
            <TextDiv style={{ flexBasis: "100px" }}>배송유형</TextDiv>
            <TextDiv style={{ flexBasis: "60px" }}>수정</TextDiv>
          </SubTitle>
          <UlWrapper>
                <AddressBox />
          </UlWrapper>
        </Container>
      </FlexWrapper>
      <FixedSiderbar />
      <Footer />
    </>
  );
};

export default MypageAddress;

const TextDiv = styled.div`
  text-align: center;
  line-height: 20px;
  font-weight: 500;
  color: rgb(51, 51, 51);
`;

const SecondDiv = styled.div`
  flex: 1 1 0%;
  text-align: right;
`;



const StyledButton = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 60px;
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
`;


const StyledSpan = styled.span`
  font-weight: 500;
  line-height: 24px;
`;


const StyledImg = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 5px;
  vertical-align: top;
`;
