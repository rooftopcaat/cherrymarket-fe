
import React, { useEffect } from "react";
import Header from "../common/Header/Header";
import './Mypage.css'

const Mypage = () => {

    const MypageUserBox = () => {
        return (
            <div className="mypageUser">
            <div className="userItem1">
                <div className="userLevel">일반</div>
                <div className="userContainer">
                    <strong>김주영 님</strong>
                    <div className="ratingContainer">
                    <button className="ratingBtn">다음달 등급 확인</button>
                    <span className="unber"></span>
                    <button className="ratingBtn">전체 등급 확인</button>
                    </div>
                </div>
            </div>
            {/*컬리멤버스 월 1900원 쿠폰받기*/}
            <div className="userItem2">
                <a className="membersLink">
                    <span className="spanContainer">
                        <span className="newSpan">new</span>
                        <span>컬리멤버스 <small>월 1,900원으로 10배 쿠폰받기 &nbsp;&nbsp;></small></span>
                    </span>
                </a>
            </div>
        </div>
        );
    }

    const MypageCashBox = () => {
        return (
            <div className="mypageCash">
            <div className="mypageCashItem">
                <button className="cashBtn">
                    <div className="cashItem">
                    적립금 · 컬리캐시
                    <span className="cashBtnImage"></span>
                    </div>
                    <div className="barogo">
                    바로가기
                    </div>
                </button>
            </div>
            <div className="mypageCashItem">
                <button className="cashBtn">
                    <div className="cashItem">
                    쿠폰 
                    <span className="cashBtnImage"></span>
                    </div>
                    <div className="barogo">
                    1개
                    </div>
                </button>
            </div>
            <div className="mypageCashItem">
                <button className="cashBtn">
                    <div className="cashItem">
                    나의 컬리 스타일
                    <span className="cashBtnImage"></span>
                    </div>
                    <div className="barogo">
                    등록하기
                    </div>
                </button>
            </div>
        </div>
        );
    }

    const MypageMembersBox = () => {

    return (
        <div className="mypageMembers">
        <div className="mypageMemberItem">
            <button className="mypageMemberItemBtn">
                <div>
                컬리 퍼플 박스
                <span className="mypageMemberItemBtnImage"></span>
                </div>
                <div className="barogo">알아보기</div>
            </button>
        </div>
        <div className="mypageMemberItem">
            <button className="mypageMemberItemBtn">
                <div>
                컬리멤버스
                <span className="mypageMemberItemBtnImage"></span>
                </div>
                <div className="barogo">혜택받기</div>
            </button>
        </div>
    </div>


        );
    }

    return (
        <div>
            <Header />
            <div className="mypageContainer1">
                <div className="mypageContainer">
                    <div className="mypageItem">
                        {/*첫번째 유저박스*/}
                        <MypageUserBox />
                        {/*적립금 컬리캐시 쪽*/}
                        <MypageCashBox />
                        {/*적립금 퍼플박스 멤버십 쪽*/}
                        <MypageMembersBox />
                        {/*쿠폰 배너*/}
                        <a className="couponBanner" href="https://www.kurly.com/shop/event/kurlyEvent.php?htmid=event/2023/1204/yearend">
                            <img className="couponBannerImage" src="https://product-image.kurly.com/cdn-cgi/image/width=1150,quality=85,format=auto/banner/da-banner/6eac9bcd-5594-4aed-86d8-d9aeecf65e80.jpg" alt="couponImage" />
                        </a>
                    </div>
                </div>
            </div>
            <h1>My page</h1>
        </div>
    )
};


export default Mypage;