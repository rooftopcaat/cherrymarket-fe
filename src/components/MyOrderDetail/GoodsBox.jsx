
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const  GoodsBox = () => {

  return (
    <>

    <Container>
      <Img src='https://product-image.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/product/image/8747602a-3efa-4bc3-a8ef-db74c41d1745.jpg'></Img>
      <TitleDiv>
        <A>[오뚜기] 오뮤 가뿐한끼 현미밥 150g X 30입</A>
        <PriceDiv>
          <PriceSpan>32,800원</PriceSpan>
          <CountSpna>1개</CountSpna>
        </PriceDiv>
      </TitleDiv>
      <StatusSpan>배송완료</StatusSpan>
      <BtnWapr>
      <Link to="/mypage/review">
        <ReviewBtn>
          <BtnSpan>후기작성</BtnSpan>
        </ReviewBtn>
        </Link>
        <CartBtn>
          <BtnSpan>장바구니 담기</BtnSpan>
        </CartBtn>
      </BtnWapr>
    </Container>
    </>
  )

}

export default GoodsBox;

const BtnSpan = styled.span`
font-size: 12px;
    font-weight: 500;
    line-height: 17px;
`;

const CartBtn = styled.button`
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 96px;
    height: 36px;
    border-radius: 3px;
    color: rgb(95, 0, 128);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(95, 0, 128);
    cursor: pointer;
`;

const ReviewBtn = styled.button`
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 96px;
    height: 36px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(95, 0, 128);
    border: 0px none;
    cursor: pointer;
`;

const BtnWapr = styled.div`
display: flex;
flex-direction: column;
-webkit-box-pack: justify;
justify-content: space-between;
margin-left: 40px;
gap: 6px;

`;

const StatusSpan = styled.span`
  font-size: 16px;
    font-weight: 500;
    color: rgb(51, 51, 51);
`;

const CountSpna  = styled.span`
letter-spacing: -0.22px;
color: rgb(51, 51, 51);

&::before {
  content: "|";
  margin-right: 8px;
  color: rgb(221, 221, 221);
  font-size: 12px;
}
`;

const PriceSpan = styled.span`
margin-right: 6px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.22px;
    color: rgb(51, 51, 51);
`;

const Container = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px 20px;
    padding: 24px 0px;
    border-bottom: 1px solid rgb(244, 244, 244);
`;

const Img = styled.img`
width: 60px;
height: 78px;
margin-right: 20px;
cursor: pointer;
background-color: rgb(245, 245, 245);
`;

const TitleDiv = styled.div`
display: flex;
flex-direction: column;
flex: 1 1 0%;
margin-right: 20px;
`;

const A = styled.a`
margin-bottom: 8px;
padding-bottom: 2px;
font-size: 16px;
font-weight: 500;
color: rgb(51, 51, 51);
display: -webkit-box;
overflow: hidden;
word-break: break-all;
white-space: normal;
-webkit-line-clamp: 2;
cursor: pointer;
`;

const PriceDiv = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
`;