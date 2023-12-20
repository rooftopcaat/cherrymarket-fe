
import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";

const FixedCard = (props) => {

  function generateImageUrl() {
    const imageUrlBase = "https://kr.object.ncloudstorage.com/cherry-product/";
    const imageUrl = `${imageUrlBase}${props.item.goodsCode}/${props.item.goodsCode}_0.png`;
    return imageUrl;
  }


  return (
    <React.Fragment>
      <DivSt>
        <CardSt>
          <ImageSt>
            <img
              style={{ width: "250px", height: "300px" }}
              src={generateImageUrl()}
            />
          </ImageSt>
          <ButtonSt>
          <BsCart /> 담기
          </ButtonSt>
          <h3 style={{ marginLeft: "4px", fontSize: "16px" }}>
            {props.item.goodsName}
          </h3>
          <OriginalPriceSt>
          {props.item.price}원
           </OriginalPriceSt>

          <span
            style={{ marginLeft: "4px", fontSize: "16px", color: "#FA622F" }}
          >
            {props.item.discountRate}%
          </span>
          <span style={{ marginLeft: "4px", fontSize: "16px" }}>
            {props.item.discountedPrice
}원
          </span>
        </CardSt>
      </DivSt>
    </React.Fragment>
  );
};

const DivSt = styled.div`
  width: 68%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CardSt = styled.div`
  /* background-color: gray; */
  width: 267px;
  height: 411px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0px 9px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImageSt = styled.div`
  /* background-color: yellow; */
  width: 100%;
  height: 305px;
  margin: auto;
`;

const ButtonSt = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  margin-top: 0px;
  padding-bottom: 1px;
  font-size: 16px;
  line-height: 29px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3; 
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* 버튼 내부 요소 사이의 간격을 8px로 설정 */
`;

const OriginalPriceSt = styled.span`
  display: block;
  padding-top: 2px;
  color: rgb(181, 181, 181);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-decoration: line-through;
`;

export default FixedCard;