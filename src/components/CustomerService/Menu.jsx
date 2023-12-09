import React from 'react';
import styled from 'styled-components';
import style, { FlexWrapper } from './Style';

function Menu() {
        return (
        <>
        
                <Container>
                    <Title><h2>고객센터</h2></Title>
                    <Customerul>
                        <ul style={{listStyle : 'none'}}>
                        <Customerli> 
                            <li><a href = "notice">공지사항</a></li>
                            <li><a href = "faq">자주하는질문</a></li>
                            <li><a href = "qna">1:1문의</a></li>
                            <li><a>대량 주문 문의</a></li>
                        </Customerli>
                        </ul>
                    </Customerul>
                    <Customera>
                        <a>
                            <div>
                                <span>도움이 필요하신가요?</span>
                                <span>1:1 문의하기</span>
                            </div>
                        </a>
                    </Customera>
                </Container>
                 
        </>
    );
};

export default Menu;

export const Container = styled.div`
    width: 200px;
    height : 100%;
    margin-top : -30px;
    padding: 40px 0px;
    box-sizing: border-box;
`;
export const Title = styled.h2`
    height : 75px;
    padding : 5px 0 35px 1px;
    font-size: 20px;
    font-weight: 500;
    line-height: 35px;
    color : #333;
    letter-spacing: -1px;
`;
export const Customerul = styled.ul`
    border: 1px solid #f2f2f2;
    list-style: none;
    margin: 0px;
    padding: 0px;
`;

export const Customerli = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    & a {
        cursor: pointer;
        border-bottom: 1px solid #f2f2f2;
        padding: 15px 13px 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 19px;
        letter-spacing: 0.3px;
        font-size: 14px;
        text-decoration:none !important;
        color : inherit
        ;
    }
    & a:hover, active{
        background-color: #fafafa;
        color: #950526;
        font-weight: bold;
    }
`;

export const Customera = styled.a`
    cursor: pointer;
    width : 100%;
    height : 60px;
    padding : 0px 14px 0px 20px;
    margin-top : 20px;
    display : flex;
    -webkit-box-pack : justify;
    justify-content : space-between;
    -webkit-box-align : center;
    align-items : center;
    background-color : rbg(250, 250, 250);
    lien-height : 19px;
    text-decoration:none !important;
    color : inherit;
    & div {
        display: flex;
        flex-direction: column;
        color: rgb(51, 51, 51);
    }
    & div span:first-child {
        font-size: 14px;
        font-weight: 500;
    }
    & div span:last-child {
        font-size: 12px;
        color: rgb(153, 153, 153);
    }
`;