import React from 'react';
import { useState } from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { FlexWrapper,
    PrevButton,
    NextButton,
    ButtonWrapper,
    Container,
    TitleWraper,
    Title,
    TitleHead,
    TitleSpan,
    SubTitle,
} from './Style';

const OPTIONS = [
    {value : "전체", name : "전체"},
    {value : "배송", name : "배송"},
    {value : "상품", name : "상품"},
    {value : "회원", name : "회원"},
];
const SelectBox = ({options, onChange}) => {
    return (
        <select onChange = {onChange} style={{ 
            display: "block",
            width: "170px",
            height: "40px",
            padding: "0px 15px",
            margin: "0px",
            border: "1px solid rgb(238, 238, 238)",
            borderRadius: "0px",
            appearance: "none",
            background: "white",
            fontSize: "14px",
            color: "rgb(102, 102, 102)",
            outline: "none",
            cursor: "pointer",
            
        }}>
            {options.map((option) => (
                <option style = {{
                }}
                   key = {option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    );
};  



const faqs = [
    {
        id : 1,
        category : "배송",
        title : "배송비는 얼마인가요 ?",
        content : "배송비는 3000원입니다.",
    },
    {
        id : 2,
        category : "상품",
        title : "낚지볶음은 어떻게 조리하나요 ?",
        content : "낚지볶음은 5분간 볶아주세요.",
    },
];

const FaqDetail = styled.div`
        position: relative;
        display: ${({isOpen}) => (isOpen ? "block" : "none")};
        background-color: #f8f8f8;
        border-bottom: 1px solid rgb(244, 244, 244); 
        padding: 30px 30px 30px 70px;
        text-align: left;
        color: rgb(76, 76, 76);
        white-space: pre-line;
    `;




const FaqBoard = () => {
    
        const [isOpen, setIsOpen] = useState(null);
        const [selectCategory, setSelectCategory] = useState("전체");

        
        const toggleFaq = (index) => {
            setIsOpen(isOpen === index ? null : index);          
        };
        
        const handleCategory = (e) => {
            setSelectCategory(e.target.value);
        };

        const filteredFaqs = selectCategory === "전체" ? faqs : faqs.filter((faq) => faq.category === selectCategory);


    
    return (
        <>
            <FlexWrapper>
                <Menu />
                <Container>
                    <TitleWraper>
                        <Title>
                            <TitleHead>자주하는 질문</TitleHead>
                            <TitleSpan>고객님들께서 자주 하시는 질문들을 모두 모았습니다.</TitleSpan>
                        </Title>
                        <SelectBox options={OPTIONS} onChange = {handleCategory} />
                    </TitleWraper>
                    <SubTitle>     
                        <SubTitleNo>번호</SubTitleNo>
                        <SubTitleCategory>카테고리</SubTitleCategory>
                        <SubTitleLine>제목</SubTitleLine>
                    </SubTitle>
                    <UlWrapper>
                     
                        {filteredFaqs.map((faq, index) => (
                            <LiWrapper key={faq.id}>
                                <DivWrapper>
                                    <DivNo>{faq.id}</DivNo>
                                    <DivCategory>{faq.category}</DivCategory>
                                    <DivTitle onClick={() => toggleFaq(index)}>
                                        { faq.title }
                                    </DivTitle>
                                </DivWrapper>
                                <FaqDetail isOpen={isOpen === index}>
                                    <div><Answer/>{faq.content}</div>
                                </FaqDetail>
                            </LiWrapper>
                        ))}
                        
                    </UlWrapper>
                                {/* {notices.map((notice) => (
                                    <tr key={notice.id}>
                                        <td>{notice.id}</td>
                                        <td>{notice.title}</td>
                                        <td>{notice.writer}</td>
                                        <td>{notice.createdAt}</td>
                                        <td>{notice.view}</td>
                                    </tr>
                                ))} */}
                    <ButtonWrapper>
                        <div>
                            <PrevButton></PrevButton>
                            <NextButton></NextButton>
                        </div>
                    </ButtonWrapper>

                </Container>
            </FlexWrapper>  
            
        </>
    );

    
};

export default FaqBoard;

export const SubTitleNo = styled.th`
    flex-basis: 70px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

export const SubTitleCategory = styled.th`
    flex-basis: 135px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

export const SubTitleLine = styled.th`
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;
export const UlWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: bold;
    list-style-type: none;
`;

export const LiWrapper = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    cursor: pointer;
    list-style: none;
`;

export const DivWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgb(244, 244, 244);
`;
export const DivNo = styled.div`
    text-align: center;
    padding: 20px 0px;
    color: rgb(76, 76, 76);
    flex-basis: 70px;
`;

export const DivCategory = styled.div`
    text-align: center;
    padding: 20px 0px;
    color: rgb(76, 76, 76);
    flex-basis: 135px;
`;

export const DivTitle = styled.div`
    padding: 20px 0px 20px 20px;
    color: rgb(76, 76, 76);
    flex: 1 1 0%;
    text-align: left;
`;

export const Answer = styled.div`
    display: inline-block;
    content: "";
    top: 30px;
    padding-left: 30px;
    width: 24px;
    height: 12px;
    background: url(https://res.kurly.com/images/common/icon_faq.gif) 0px 0px no-repeat;
`;



