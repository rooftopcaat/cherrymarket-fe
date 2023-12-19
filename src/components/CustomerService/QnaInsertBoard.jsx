import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import {
    FlexWrapper,
    Container,
    TitleWraper,
    Title,
    TitleHead,
} from './Style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from 'axios';




const OPTIONS = [
    { value: "문의유형을 선택해주세요", name: "문의유형을 선택해주세요" },
    { value: "CANCEL", name: "CANCEL" },
    { value: "MEMBER", name: "MEMBER" },
    { value: "GOODS", name: "GOODS" },
    { value: "DELIVERY", name: "DELIVERY" },
    { value: "ORDER", name: "ORDER" },
    { value: "SERVICE", name: "SERVICE" },
];


const DETAIL_OPTIONS = {
    "문의유형을 선택해주세요": [
        { value: "상세유형을 선택해주세요", name: "상세유형을 선택해주세요" }
    ],
    "CANCEL": [
        { value: "상세유형을 선택해주세요", name: "상세유형을 선택해주세요" },
        { value: "CANCEL", name: "CANCEL" },
        { value: "EXCHANGE", name: "EXCHANGE" },
        { value: "REFUND", name: "REFUND" },
    ],
    "MEMBER": [
        { value: "상세유형을 선택해주세요", name: "상세유형을 선택해주세요" },
        { value: "MEMBER_INFO", name: "MEMBER_INFO" },
        { value: "POINT", name: "POINT" },
        { value: "COUPON", name: "COUPON" },
    ],
    "GOODS": [
        { value: "상세유형을 선택해주세요", name: "상세유형을 선택해주세요" },
        { value: "PRODUCT_QUALITY", name: "PRODUCT_QUALITY" },
        { value: "FOREIGN_SUBSTANCE", name: "FOREIGN_SUBSTANCE" },
        { value: "PRODUCT_INFO", name: "PRODUCT_INFO" },
    ],
    "DELIVERY": [
        { value: "상세유형을 선택해주세요", name: "상세유형을 선택해주세요" },
        { value: "DIFFERENT_PRODUCT_RECEIPT", name: "DIFFERENT_PRODUCT_RECEIPT" },
        { value: "UNRECEIVED_PRODUCT", name: "UNRECEIVED_PRODUCT" },
        { value: "DELIVERY_IMPROVEMENT", name: "DELIVERY_IMPROVEMENT" },
        { value: "DELIVERY_SCHEDULE_INFO", name: "DELIVERY_SCHEDULE_INFO" }
    ],
    "ORDER": [
        { value: "상세유형을 선택해주세요", name: "상세유형을 선택해주세요" },
        { value: "INFO_CHANGE", name: "INFO_CHANGE" },
        { value: "ORDER_HISTORY_RECEIPT", name: "ORDER_HISTORY_RECEIPT" },
        { value: "ORDER_PAYMENT_METHOD", name: "ORDER_PAYMENT_METHOD" },
    ],
    "SERVICE": [
        { value: "SYSTEM_ERROR", name: "SYSTEM_ERROR" },
        { value: "OTHER", name: "OTHER" },
        { value: "SERVICE_SUGGESTION", name: "SERVICE_SUGGESTION" }
    ]
};



const SelectBox = ({ options, selectedOption, setSelectedOption }) => {


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <DropdownContainer>
            <StyledSelect
                onChange={handleSelectChange}
                value={selectedOption}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}
                        disabled={option.value === "문의유형을 선택해주세요" && selectedOption !== "" && selectedOption !== "문의유형을 선택해주세요"}>
                        {option.name}
                    </option>
                ))}
            </StyledSelect>
            <DropdownIcon />
        </DropdownContainer>
    );
};

const SelectDetailBox = ({optionsDetail, selectedOption, handleSelectDetailChange }) => {
    return (
        <DropdownContainer>
        <StyledSelect 
            style={{ marginLeft : "20px" ,  opacity: selectedOption ? "1" : "0.3", pointerEvents: selectedOption ? "auto" : "none" }}
            disabled={!selectedOption || selectedOption === "상세유형을 선택해주세요"}
            onChange={handleSelectDetailChange}
        >
          {optionsDetail.map((optionsDetail) => (
            <option key={optionsDetail.value} value={optionsDetail.value}>
              {optionsDetail.name}
            </option>
          ))}
        </StyledSelect>
        <DropdownIcon style={{
            marginRight : "-10px",
        }} />
      </DropdownContainer>
    );
};  



const QnaInsertBoard = () => {
    const [clicked, setClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [title, setTitle] = useState("");
    const [selectedDetailOption, setSelectedDetailOption] =
        useState(DETAIL_OPTIONS["문의유형을 선택해주세요"] || "[]");
    const [inquiryData, setInquiryData] = useState(null);
    const [detailOption, setDetailOption] = useState([]);
    const [selectedQna, setSelectedQna] = useState({
        type: "",
        detailType: "",
        subject: "",
        content: "",
    });

    const { type, detailType, subject, content } = selectedQna;

    // insert
    const handleSubmit = async (event) => {
       
        event.preventDefault();
        if (!isFormValid()) {
            alert("모든 항목을 입력해주세요");
            return;
        }

        try {
            const token = sessionStorage.getItem("accessToken");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            };
            console.log("selectedOption", selectedOption);
            console.log("selectedDetailOption", selectedDetailOption);

            setInquiryData(inquiryData);
            await axios.post("https://server.marketcherry.store/api/inquiry/add", selectedQna ,  config);
            alert("문의가 등록되었습니다.");
        } catch (error) {
            console.error(error);
            console.log("inquiryData", inquiryData);
            alert("문의 등록에 실패했습니다.");
        }

    }

    const handleSvgClick = () => {
        setClicked(!clicked);
    }

    const handleSelectChange = (selectedValue) => {
        setSelectedOption(selectedValue);
        const details = DETAIL_OPTIONS[selectedValue] || [];
        setSelectedDetailOption(details);
    
        // 첫 번째 상세 옵션을 기본값으로 선택
        const selectedDetail = details.length > 0 ? details[0].value : '';
    
        // 선택된 값을 selectedQna에 저장
        setSelectedQna({ ...selectedQna, type: selectedValue, detailType: selectedDetail });
    };
    
    console.log(selectedDetailOption);
    // 문의 유형, 제목, 내용이 모두 입력되었을 때 등록 버튼 활성화
    

    //--------------------------------------------------여기여기----------------------------------------------
   

    const handleInput = (e) => {
        const { name, value } = e.target;
        setSelectedQna({ ...selectedQna, [name]: value });
    }

   
    const handleSelectDetailChange = (e) => {
        const { value } = e.target;
        setSelectedQna(prevState => ({
            ...prevState,
            detailType: value
        }));
    };
    
    const isFormValid = () => {
        return selectedOption && subject && content;
    };





    console.log("selectedQna", selectedQna);



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
                        <form onSubmit={handleSubmit} item={setSelectedQna}>
                            <LineWrapper>
                                <SubTitleWrapper>유형<Required>*</Required></SubTitleWrapper>
                                <SelectBox
                                    options={OPTIONS}
                                    setSelectedOption={handleSelectChange}
                                    name="type"
                                    value={type}
                                    onChange={handleInput}></SelectBox>
                                <SelectDetailBox optionsDetail = {selectedDetailOption} selectedOption={selectedOption} handleSelectDetailChange={handleSelectDetailChange}></SelectDetailBox>
                            </LineWrapper>
                            <LineWrapper>
                                <SubTitleWrapper>제목<Required>*</Required></SubTitleWrapper>
                                <InputWrapper>
                                    <Input
                                        type="text"
                                        name="subject"
                                        placeholder="제목을 입력해주세요"
                                        value={subject}
                                        onChange={handleInput}
                                    />
                                </InputWrapper>
                            </LineWrapper>
                            <LineWrapper>
                                <SubTitleWrapper>내용<Required>*</Required></SubTitleWrapper>
                                <TextAreaWrapper>
                                    <TextArea
                                        placeholder=""
                                        name="content"
                                        onChange={handleInput}>
                                    </TextArea>
                                </TextAreaWrapper>
                            </LineWrapper>
                            <LineWrapper>
                                <CameraWrapper>
                                    <CameraButton>
                                        <Camera />
                                    </CameraButton>
                                </CameraWrapper>

                            </LineWrapper>
                            <ContextWrapper>
                                <SpanWrapper>
                                    <span><li>30MB 이하의 이미지만 업로드 가능합니다.</li></span>
                                </SpanWrapper>
                                <SpanWrapper>
                                    <span><li>상품과 무관한 내용이거나 음란 및 불법적인 내용은 통보없이 삭제 될 수 있습니다.</li></span>
                                </SpanWrapper>
                                <SpanWrapper>
                                    <span><li>사진은 최대 8장까지 등록가능합니다.</li></span>
                                </SpanWrapper>
                            </ContextWrapper>
                            <QuestionWrapper>
                                <LineWrapper>
                                    <SubTitleWrapper>답변수신</SubTitleWrapper>
                                    <MessageWrapper>

                                        <PhoneNumber>
                                            <PhoneNumberInput
                                                type="text"
                                                disabled={true}
                                                value="010"
                                            />
                                        </PhoneNumber>

                                        <MessageChecked>
                                            <MessageCheckedLabel>
                                                <MessageCheckedInput
                                                    type="checkbox"
                                                    checked={clicked}
                                                    onChange={handleSvgClick}
                                                />
                                                <MessageCheckedImageWrapper onClick={handleSvgClick}>
                                                    {clicked ?
                                                        <FaCheckCircle /> :
                                                        <FaRegCheckCircle />
                                                    }
                                                </MessageCheckedImageWrapper>
                                                <MessageCheckedImageText>문자/알림톡 받기</MessageCheckedImageText>
                                            </MessageCheckedLabel>
                                        </MessageChecked>
                                        <InfoUpdateWrapper>
                                            개인정보수정
                                        </InfoUpdateWrapper>
                                    </MessageWrapper>
                                </LineWrapper>
                                <MessageText>
                                    <MessageTextSpan>※ 야간에도 답변 완료 알림톡이 발송 되는 점 참고 부탁드립니다.</MessageTextSpan>
                                </MessageText>
                            </QuestionWrapper>
                            <InsertButtonWrapper>
                                <Link to="/qna">
                                    <InsertButton disabled={!isFormValid()} onClick={handleSubmit}>등록</InsertButton>
                                </Link>
                            </InsertButtonWrapper>
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
    font-weight: 700;
    color : gray;
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
    &:focus {
    outline: 1px solid;
  }
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
    align-items: flex-start;
`;

const QuestionWrapper = styled.div`
    border-top: 1px solid rgb(221, 221, 221);
    border-bottom: 1px solid rgb(221, 221, 221);
`;

const MessageWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width : 640px;
`;
const PhoneNumberWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;

`;
const PhoneNumber = styled.div`
    position: relative;
    height: 40px;
`;

const PhoneNumberInput = styled.input`
    width: 160px;
    height: 40px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 14px;
    line-height: 42px;
    color : rgb(153, 153, 153);
    outline: none;
    box-sizing: border-box;
    &:disalbed {

    }
`;

const MessageChecked = styled.div`
flex: 1 1 0%;
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
-webkit-box-align: center;
align-items: center;
padding: 0px 16px;
`;
const MessageCheckedLabel = styled.label`
padding: 14px 0px 9px;
position: relative;
display: flex;
-webkit-box-align: center;
align-items: center;
font-size: 16px;
vertical-align: top;
line-height: normal;
color: rgb(51, 51, 51);
cursor: pointer;
`;
const MessageCheckedInput = styled.input`
overflow: hidden;
position: absolute;
clip: rect(0px, 0px, 0px, 0px);
clip-path: inset(50%);
width: 1px;
height: 1px;
`;

const MessageCheckedImageWrapper = styled.div`
margin-right : 12px;
padding-top: 2px;
`;


const MessageCheckedImageText = styled.span`
font-size: 12px;
padding-top: -5px;
`;

const InfoUpdateWrapper = styled.div`
display: inline-block;
cursor: pointer;
font-size: 12px;
color : gray;

::after {
    display: inline-block;
    width: 6px;
    height: 9px;
    margin-left: 4px;
    background: url(https://res.kurly.com/kurly/ico/2021/arrow_right_6_9_black.svg) 0px 0px no-repeat;
    content: "";
}
`;

const MessageText = styled.div`
font-size: 12px;
line-height: 20px;
color: rgb(153, 153, 153);
margin-left : 140px;
`;

const MessageTextSpan = styled.span`
font-size: 12px;
line-height: 20px;
padding: 16px 0px 4px;
color: rgb(153, 153, 153);
`;


const InsertButtonWrapper = styled.div`
display: flex;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
padding-top: 40px;
`;

const InsertButton = styled.button`
width: 160px;
height: 56px;
padding: 0px 10px;
text-align: center;
letter-spacing: 0px;
font-size: 16px;
line-height: 20px;
color: white;
background-color: ${(props) => (props.disabled ? "rgb(221, 221, 221)" : "#950526")}; // 조건부 배경색
cursor: ${(props) => (props.disabled ? "default" : "pointer")}; // 조건부 커서
font-family: "Noto Sans", sans-serif;
font-weight: 500;
border-radius: 3px !important;
&:disabled {
    cursor : default;
}
`;


const DropdownContainer = styled.div`
position: relative;
width: 200px;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 44px;
  padding: 0 10px;
  padding-right: 30px; /* 아이콘을 위한 여유 공간 */
  border: 1px solid rgb(204, 204, 204);
  border-radius: 3px;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 22px;
  outline: none;
  appearance: none; /* 기본 화살표 제거 */
  cursor: pointer;
`;

const DropdownIcon = styled(IoMdArrowDropdown)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* 클릭 시 select가 반응하도록 */
`;




