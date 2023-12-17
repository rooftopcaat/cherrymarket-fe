import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import {
    FlexWrapper,
    Container,
    TitleWraper,
    Title,
    TitleHead,
    SubTitle,
} from './Style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


const QnaBoard = () => {

    const access_token = sessionStorage.getItem('access_token');
    const baseUrl = process.env.REACT_APP_API_URL;
    useEffect(() => {
        async function fetchData() {
            try {
            
                // 요청 URL에 쿼리 문자열 추가
                const response = await axios.get(`https://server.marketcherry.store/api/inquiry/list`, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`,
                    }
                });

                console.log("여기봐야함");
                console.log(response);

            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, []);



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
                    <SubTitle>
                        <SubTitleLine>제목</SubTitleLine>
                        <SubTitleWriter>작성일</SubTitleWriter>
                        <SubTitleWriter>답변상태</SubTitleWriter>
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
                            <Link to="/qnaInsert"> {/* Link 컴포넌트 사용 */}
                                <InsertButton>문의하기</InsertButton>
                            </Link>
                        </div>
                    </ButtonWrapper>

                </Container>
            </FlexWrapper>

        </>
    );
};

export default QnaBoard;



const SubTitleNo = styled.th`
    flex-basis: 50px;
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

export const SubTitleWriter = styled.th`
    flex-basis: 100px;
    text-align: center;
    line-height: 20px;
    font-weight: 400;
    color: rgb(51, 51, 51);
`;
const ButtonWrapper = styled.div`
    position: relative;
    min-height: 44px;
    margin-top: 20px;
    text-align: center;
`;
const PrevButton = styled.button`
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-disabled.svg);
    cursor: default;
    width: 44px;
    height: 44px;
    padding: 0px;
    margin: 0px;
    border: 0px;

    background-color: transparent;
    {/* page가 2 이상일 때만 활성화
        background-image: url(https://res.kurly.com/kurly/ico/2021/paging-prev-activated.svg);
    */}
    background-repeat: no-repeat;
    background-size: cover;
}
`;
const NextButton = styled.button`
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-next-disabled.svg);
    cursor: default;
    width: 44px;
    height: 44px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    cursor: pointer;
    background-color: transparent;
    background-image: url(https://res.kurly.com/kurly/ico/2021/paging-next-activated.svg);
    background-repeat: no-repeat;
    background-size: cover;
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
`;



