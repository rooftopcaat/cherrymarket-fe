import styled from 'styled-components';

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ddd;
  margin: 40px 0;
`;

export const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 50px 0;
  font-family: 'Noto Sans KR', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftContent = styled.div`
  text-align: center;
  width: 100%;
`;

export const LeftContentWrapper = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ContactNumber = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

export const ContactDescription = styled.span`
  font-size: 15px;
  color: gray;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  button {
    width: 160px;
    height: 50px;
    margin: 10px 0;
    border: 1px solid lightgray;
    background: white;
    cursor: pointer;
  }
`;

export const ContactButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightContent = styled.div`
  text-align: center;
  width: 100%;
`;

export const RightContentWrapper = styled.div`
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  list-style-type: none;
  flex-wrap: wrap;
  margin: 20px 0;
`;

export const LinkItem = styled.li`
  margin: 0 12px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #5f0080;
  }
`;

export const BottomContent = styled.div`
  color: #666;
  text-align: center;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  width: 100%;
`;

export const BottomText = styled.span`
  font-size: 15px;
  display: block; /* 각 텍스트를 블록 요소로 만들어 줄바꿈 */
  margin: 5px 0;
`;

export const BottomLink = styled.a`
  text-decoration-line: none;
  color: #666;
  &:hover {
    text-decoration: underline;
  }
`;

export const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  list-style-type: none;
  width: 100%;
`;

export const SocialMediaIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin: 0 10px;
`;

export const BottomLinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const BottomLinkItem = styled.li`
  margin-bottom: 5px;
`;
