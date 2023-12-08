import React from 'react';
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
const NoticeBoard = () => {
   

    return (
        <>
            <FlexWrapper>
                <Menu />
                <Container>
                    <TitleWraper>
                        <Title>
                            <TitleHead>공지사항</TitleHead>
                            <TitleSpan>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</TitleSpan>
                        </Title>
                    </TitleWraper>
                    <SubTitle>     
                        <SubTitleNo>번호</SubTitleNo>
                        <SubTitleLine>제목</SubTitleLine>
                        <SubTitleWriter>작성자</SubTitleWriter>
                        <SubTitleWriter>작성일</SubTitleWriter>
                    </SubTitle>
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

export default NoticeBoard;



const SubTitleNo = styled.th`
    flex-basis: 50px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

const SubTitleLine = styled.th` 
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;

const SubTitleWriter = styled.th`
    flex-basis: 100px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;



