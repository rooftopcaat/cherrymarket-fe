import React from 'react';
import {
  Divider,
  FooterContainer,
  LeftContent,
  LeftContentWrapper,
  Title,
  ContactInfo,
  ContactNumber,
  ContactDescription,
  ButtonDiv,
  ContactButton,
  RightContent,
  RightContentWrapper,
  LinkList,
  LinkItem,
  BottomContent,
  BottomText,
  BottomLink,
  SocialMediaList,
} from './styles';

const Footer = () => {
  return (
    <>
      <Divider />
      <FooterContainer>
        <LeftContent>
          <LeftContentWrapper>
            <Title>고객 행복 센터</Title>
            <ContactInfo>
              <ContactNumber>1644-1107</ContactNumber>
              <ContactDescription>365 고객센터 (오전 7시 - 오후 7시)</ContactDescription>
            </ContactInfo>
            <ButtonDiv>
              <ContactButton>
                <button>카카오톡 문의</button>
                <ContactDescription>365 고객센터 (오전 7시 - 오후 7시)</ContactDescription>
              </ContactButton>
              <ContactButton>
                <button>1:1 문의</button>
                <ContactDescription>24시간 접수 가능</ContactDescription>
              </ContactButton>
              <ContactButton>
                <button>대량주문 문의</button>
                <ContactDescription>비회원일 경우 메일로 문의 바랍니다.</ContactDescription>
              </ContactButton>
            </ButtonDiv>
          </LeftContentWrapper>
        </LeftContent>
        <RightContent>
          <RightContentWrapper>
            <LinkList>
              <LinkItem>컬리소개</LinkItem>
              <LinkItem>컬리소개영상</LinkItem>
              <LinkItem>인재채용</LinkItem>
              <LinkItem>이용약관</LinkItem>
              <LinkItem>개인정보처리방침</LinkItem>
              <LinkItem>이용안내</LinkItem>
            </LinkList>
            <BottomContent>
              <BottomText>법인명(상호):주식회사 컬리 | 사업자등록번호 : 261-81-23567</BottomText>
              <BottomLink href='https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no='>
                사업자정보확인
              </BottomLink>
              <BottomText>통신판매업 : 제 2018-서울강남-01646 호 |</BottomText>
              <BottomText>개인정보보호책임자 : 이원준</BottomText>
              <BottomText>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) |</BottomText>
              <BottomText>대표이사 : 김슬아</BottomText>
              <BottomLink href='https://docs.google.com/forms/d/e/1FAIpQLScLB7YkGJwNRzpGpp0gbR1i4C1_uvTEFj43SFfJ_XEadTn3gQ/viewform'>
                입점문의하기
              </BottomLink>
              <BottomText>마케팅 제휴 : </BottomText>
              <BottomLink href='mailto:business@kurlycorp.com'>business@kurlycorp.com</BottomLink>
              <BottomText>채용문의 : </BottomText>
              <BottomLink href='mailto:recruit@kurlycorp.com'>recruit@kurlycorp.com</BottomLink>
              <BottomText>팩스: 070 - 7500 - 6098 | </BottomText>
              <BottomText>이메일 : </BottomText>
              <BottomLink href='mailto:help@kurlycorp.com'>help@kurlycorp.com</BottomLink>
              <BottomText>대량주문 문의 : </BottomText>
              <BottomLink href='mailto:kurlygift@kurlycorp.com'>kurlygift@kurlycorp.com</BottomLink>
            </BottomContent>
            <SocialMediaList>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" alt="마켓컬리 인스타그램 바로가기" /></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png" alt="마켓컬리 페이스북 바로가기" /></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png" alt="마켓컬리 블로그 바로가기" /></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" alt="마켓컬리 포스트 바로가기" /></li>
              <li><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" alt="마켓컬리 유튜브 바로가기" /></li>
            </SocialMediaList>
          </RightContentWrapper>
        </RightContent>
        <BottomContent />
      </FooterContainer>
    </>
  );
};

export default Footer;