
import {
    Container,
    Title,
    Customerul,
    Customerli,
    Customera
} from '../CustomerService/Menu';


const MypageMenu = () => {  

    return (

<>
    <Container>
    <Title><h2>마이체리</h2></Title>
    <Customerul>
        <ul style={{listStyle : 'none'}}>
        <Customerli> 
            <li><a href = "/mypage/order">주문내역</a></li>
            <li><a href = "/mypage/pick">찜한상품</a></li>
            <li><a href = "/mypage/address">배송지관리</a></li>
            <li><a href = "/mypage/review">상품후기</a></li>
            <li><a href = "/mypage/inquiry/products">상품문의</a></li>
            <li><a href = "/mypage/point">적립금</a></li>
            <li><a href = "/mypage/coupon">쿠폰</a></li>
            <li><a href='/mypage/info'>개인정보수정</a></li>
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

    )

}

export default MypageMenu;

