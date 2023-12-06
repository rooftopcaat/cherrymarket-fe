import styled from "styled-components";

const PaymentSheetDetail = () => {

    return (
        <div>
            <PaymentSheetDetailContainer>
                <Title>적립금</Title>
            </PaymentSheetDetailContainer>
            <div2>
                <span1>적립금</span1>
                <div3>
                    <div4>
                        <div></div>
                        <div></div>
                    </div4>
                    <div5></div5>
                    <div6></div6>
                </div3>
            </div2>
        </div>


    );
}

export default PaymentSheetDetail;

const PaymentSheetDetailContainer = styled.div`
display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 75px;
    border-bottom: 1px solid rgb(51, 51, 51);
    -webkit-box-pack: start;
    justify-content: flex-start;
    gap: 8px;
`;

const Title = styled.h3`
padding: 16px 0px;
    font-weight: 500;
    font-size: 20px;
    color: rgb(51, 51, 51);
    line-height: 29px;
`;