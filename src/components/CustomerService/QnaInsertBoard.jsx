import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { FlexWrapper,
        Container,
        TitleWraper,
        Title,
        TitleHead,
} from './Style';
import { useState } from 'react';




const OPTIONS = [
    {value : "문의유형을 선택해주세요", name : "문의유형을 선택해주세요"},
    {value : "취소/교환/반품", name : "취소/교환/반품"},
    {value : "회원/이벤트/쿠폰", name : "회원/이벤트/쿠폰"},
    {value : "상품(식품/비식품/티켓)", name : "상품(식품/비식품/티켓)"},
    {value : "배송", name : "배송"},
    {value : "주문/결제", name : "주문/결제"},
    {value : "서비스/오류/기타", name : "서비스/오류/기타"},

];


const SelectBox = ({options}) => {
    return (
        <select style= {{
            width: "200px",
            height: "44px",
            padding: "0px 10px",
            border: "1px solid rgb(204, 204, 204)",
            borderRadius: "3px",
            color: "rgb(51, 51, 51)",
            backgroundColor: "rgb(255, 255, 255)",
            fontSize: "14px",
            lineHeight: "22px",
            outline: "none",
            appearance: "none",
            cursor: "pointer",
            }}>
            {options.map((option) => (
                <option
                   key = {option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};  

const QnaInsertBoard = () => {  

    return (
        <>
            <FlexWrapper>
                <Menu />
                <Container>
                    <TitleWraper>
                        <Title>
                            <TitleHead>1:1 문의</TitleHead>
                        </Title>
                    </TitleWraper>
                    <FormWrapper>
                        <form>
                            <LineWrapper>
                                <SubTitleWrapper>유형<Required>*</Required></SubTitleWrapper>
                                <SelectBox options = {OPTIONS} />
                            </LineWrapper>
                            <LineWrapper>
                                <SubTitleWrapper>제목<Required>*</Required></SubTitleWrapper>
                                <InputWrapper>
                                    <Input 
                                        type="text"
                                        name="title"
                                        placeholder="제목을 입력해주세요"
                                    />
                                </InputWrapper>
                            </LineWrapper>
                            <LineWrapper>
                                <SubTitleWrapper>내용<Required>*</Required></SubTitleWrapper>
                                <TextAreaWrapper>
                                    <TextArea
                                        placeholder= ""                                >
                                    </TextArea>
                                </TextAreaWrapper>
                            </LineWrapper>
                            <LineWrapper>
                                    <CameraWrapper>
                                        <CameraButton>
                                            <Camera />
                                        </CameraButton>
                                    </CameraWrapper>
                                    <ContextWrapper>
                                        <SpanWrapper>
                                            <span>30MB 이하의 이미지만 업로드 가능합니다.</span>
                                        </SpanWrapper>
                                    </ContextWrapper>
                            </LineWrapper>

                        </form>
                    </FormWrapper>

                </Container>
            </FlexWrapper>  
            
        </>
    );
};

export default QnaInsertBoard;

const FormWrapper = styled.div`
    width: 820px;
    padding: 4px 20px;
    border-top: 2px solid rgb(51, 51, 51);
`;

const LineWrapper = styled.div`
    display: flex;
    padding: 12px 0px;
    -webkit-box-align: start;
    align-items: start;
`;

const SubTitleWrapper = styled.div`
    width: 140px;
    font-size: 14px;
    line-height: 44px;
    padding : 0px;
    font-weight: bold;
    color : #333;
`;

const Required = styled.span`
    color: red;
`;

const InputWrapper = styled.div` 
    position: relative;
    width : 500px;
    height: 44px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 16px;
    line-height: 42px;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;

    &input:focus {

`;
const Input = styled.input`
  height: ${(props) => props.height || "44px"};
  width: ${(props) => props.width || "100%"};
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  font-size: ${(props) => props.fontSize || "16px"};
  line-height: 1.5;
  color: rgb(51, 51, 51);
  outline: none;
  box-sizing: border-box;

  &:focus {
    outline: 1px solid;
  }
`;

const TextAreaWrapper = styled.div`
    position: relative;
    width : 500px;
    height: 500px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 42px;
    color: rgb(51, 51, 51);
    outline: none;
    box-sizing: border-box;
`;

const TextArea = styled.textarea`
    display: block;
    width: 100%;
    height: 100%;
    padding: 15px 16px;
    font-size: 16px;
    line-height: 21px;
    word-break: break-all;
    z-index: 1;
    background: none;
    border-radius: 4px;
    color: rgb(51, 51, 51);
    outline: none;
    resize: none;
    border: none;
`;


const CameraWrapper = styled.div`
    padding-top : 3px;
    margin-left : 140px;
    width: 72px;
    height: 72px;
`;

const CameraButton = styled.button`
    width: 100%;
    height: 100%;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 6px;
    cursor: pointer;
`

const Camera = styled.span`
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMzB2MzBIMHoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0Ljc3OSA2LjExMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjMiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTEuNzkyIDBjLjM5OSAwIC43MTcuMDU2Ljk1NS4xNy4xNzkuMDg0LjM0Ni4xOTkuNTAzLjM0NGwuMTUzLjE1NS42MzEuNzAzYy4xMjIuMTMuMjM0LjIzMy4zMzcuMzFhLjk1Ljk1IDAgMCAwIC4zNC4xNmMuMTI1LjAzMS4yOTIuMDQ3LjUwMy4wNDdsMi45MDYtLjAwM2MxLjI4NCAwIDIuMzI0IDEuMDYyIDIuMzI0IDIuMzd2MTEuMTUxYzAgMS4zMS0xLjA0IDIuMzctMi4zMjQgMi4zN0gyLjMyNGMtMS4yODMgMC0yLjMyNC0xLjA2LTIuMzI0LTIuMzdWNC4yNTdjMC0xLjMxIDEuMDQtMi4zNyAyLjMyNC0yLjM3aDIuOTgzYy4yNDUtLjAwOS40MzItLjA0NS41NTktLjEwOC4xMS0uMDU1LjIzLS4xNDUuMzYtLjI3bC4xMzQtLjEzNy42MzEtLjcwM2MuMi0uMjIuNDE4LS4zODcuNjU3LS41LjE5LS4wOS40MzItLjE0NC43MjUtLjE2Mkw4LjYwMyAwaDMuMTg5eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMC4xNDIiIGN5PSI5LjUyOSIgcj0iMy41NTYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

const ContextWrapper = styled.div`
    margin: 11px 0px 7px;
    line-height: 16px;
    font-size: 13px;
    color: rgb(153, 153, 153);
`;

const SpanWrapper = styled.div`
    margin-left : 140px;
    display: flex;
    flex-direction: row;
    margin-top: 7px;
`;

const InsertButton = styled.button`
    position: absolute;
    bottom: 0px;
    right: 0px;
    display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 120px;
    height: 44px;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: #950526;
    border: 0px none;
    cursor: pointer;
`;  



