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
import {
  SubTitleLine,
  SubTitleWriter,
} from "../../components/CustomerService/QnaBoard.jsx";
import styled from "styled-components";
import ProductInquiryBox from "../../components/Mypage/ProductInpquryBox.jsx";

const ProductInquiry = () => {
  return (
    <>
      <Header />
      <Mypage />
      <FlexWrapper>
        <MypageMenu />
        <Container>
          <TitleWraper>
            <Title>
              <TitleHead>상품문의</TitleHead>
            </Title>
            <br />
            <TitleUl>
              <TitleLi>
                상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
                글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
              </TitleLi>
              <TitleLi>
                배송관련, 주문(취소/교환/환불) 관련 문의 및 요청사항은 마이컬리
                내 <A href="/qna">1:1</A> 문의에 남겨주세요.
              </TitleLi>
            </TitleUl>
          </TitleWraper>
          <SubTitle>
            <SubTitleLine>제목</SubTitleLine>
            <SubTitleWriter>작성일</SubTitleWriter>
            <SubTitleWriter>답변상태</SubTitleWriter>
          </SubTitle>
          <UlWrapper>
            <ProductInquiryBox />
          </UlWrapper>
        </Container>
      </FlexWrapper>
    </>
  );
};

export default ProductInquiry;

const TitleUl = styled.ul`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  margin-top: 20px;
  margin-bottom: 18px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: rgb(153, 153, 153);
`;

const TitleLi = styled.li`
  padding-left: 12px;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const A = styled.a`
  font-weight: 700;
  color: rgb(153, 153, 153);
  text-decoration: underline;
`;


