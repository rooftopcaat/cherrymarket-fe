import { H3, OrderDetailLi, OrderDetailLiValueSpan, OrderDetailTitleSpan, OrderDetailUl, TitleContainer } from './Style.jsx';


const OrderSender = () => {


  return (

    <>
    <TitleContainer>
        <H3>배송정보</H3>
    </TitleContainer>
    <OrderDetailUl>
      <OrderDetailLi>
        <OrderDetailTitleSpan>받는분</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>김주영</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>핸드폰</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>010-4288-****</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>주소</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>(08773) 서울 관악구 남부순환로 170길 66-11 go 빌라 502호</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>받으실 장소</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>문 앞</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>공동현관 비밀번호</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>공동현관 비밀번호(****)</OrderDetailLiValueSpan>
        </OrderDetailLi>
        <OrderDetailLi>
        <OrderDetailTitleSpan>포장방법</OrderDetailTitleSpan>
        <OrderDetailLiValueSpan>종이포장재</OrderDetailLiValueSpan>
        </OrderDetailLi>
    </OrderDetailUl>
  
  </>




  )

}

export default OrderSender;