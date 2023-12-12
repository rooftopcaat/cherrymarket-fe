import { H3, OrderDetailLi, OrderDetailLiValueSpan, OrderDetailTitleSpan, OrderDetailUl, TitleContainer } from './Style.jsx';




const OrderSender = () => {


   return (
    <>
      <TitleContainer>
          <H3>주문 정보</H3>
      </TitleContainer>
      <OrderDetailUl>
        <OrderDetailLi>
          <OrderDetailTitleSpan>주문번호</OrderDetailTitleSpan>
          <OrderDetailLiValueSpan>232323232323</OrderDetailLiValueSpan>
          </OrderDetailLi>
          <OrderDetailLi>
          <OrderDetailTitleSpan>보내는분</OrderDetailTitleSpan>
          <OrderDetailLiValueSpan>김주영</OrderDetailLiValueSpan>
          </OrderDetailLi>
          <OrderDetailLi>
          <OrderDetailTitleSpan>결제일시</OrderDetailTitleSpan>
          <OrderDetailLiValueSpan>2023-11-28 19:59:25</OrderDetailLiValueSpan>
          </OrderDetailLi>
      </OrderDetailUl>
    
    </>
   )

}

export default OrderSender;