import React, { useState } from 'react';
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
import styled, { css } from "styled-components";
import WriteReview from '../../components/Mypage/WriteReview.jsx';
import WrittenReview from '../../components/Mypage/WrittenReview.jsx';
import FixedSiderbar from '../../common/FiexDiderbar/FixedSiderbar.jsx';
import Footer from '../../common/Footer/Footer.jsx';



const Review = () => {
    const [activeTab, setActiveTab] = useState('write');

    return (
        <>
        <Header />
        <Mypage />
        <FlexWrapper>
        
        <MypageMenu />
            <Container>
        
        <TitleWraper s>
            <Title>
                <TitleHead>상품후기</TitleHead>
            </Title>
        </TitleWraper>
        <BtnDiv>
        <TabButton
          type="button"
          active={activeTab === 'write'}
          onClick={() => setActiveTab('write')}
        >
          작성가능 후기
        </TabButton>
        <TabButton
          type="button"
          active={activeTab === 'written'}
          onClick={() => setActiveTab('written')}
        >
          작성한 후기
        </TabButton>
        </BtnDiv>
        {activeTab === 'write' && <WriteReview />}
        {activeTab === 'written' && <WrittenReview />}
        </Container>
        </FlexWrapper>
        <FixedSiderbar />
        <Footer />
        </>
    )
}

export default Review;

const BtnDiv = styled.div`
display: flex;
flex-wrap: nowrap;
width: 100%;
height: 60px;
background-color: rgb(250, 250, 250);
`;

const TabButton = styled.button`
  flex: 1 1 0%;
  border: 1px solid rgb(244, 244, 244);
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  cursor: pointer;

  /* 선택되지 않은 버튼의 하단 테두리 스타일 */
  border-bottom: 1px solid rgb(244, 244, 244);

  /* 선택된 버튼에 대한 스타일 */
  ${(props) =>
    props.active
      ? css`
          color: rgb(95, 0, 128);
          border-color: rgb(244, 244, 244);
          border-bottom: none; /* 선택된 탭은 하단 테두리가 없음 */
          background-color: rgb(255, 255, 255); // 선택된 버튼의 배경색
        `
      : css`
          background-color: #f8f8f8; // 선택되지 않은 버튼의 배경색
        `}
`;
