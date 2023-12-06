import Coupon from "./Coupon.jsx";
import styled from "styled-components";
import PaymentSheetDetail from "./PaymentSheetDetail.jsx";



const OrderSheetbottom = () => {

    return (
        <OrderSheetbottomContainer>
            <ItemSheet>
                <Coupon />
            </ItemSheet>
            <PaymentSheet>
                <PaymentSheetDetail />
            </PaymentSheet>
        </OrderSheetbottomContainer>
    );
}

export default OrderSheetbottom;

const OrderSheetbottomContainer = styled.div`

    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;

`;

const ItemSheet = styled.div`

width: 742px;

`;

const PaymentSheet = styled.div`

    position: relative;
    width: 284px;

`;