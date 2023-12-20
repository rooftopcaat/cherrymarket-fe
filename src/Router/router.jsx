import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import Detail from "../pages/Detail";
import Newest from "../pages/Newest";
import Order from "../pages/Order";
import Mypage from "../pages/Mypage";
import Kakao from "../components/Callback/Kakao";
import Naver from "../components/Callback/Naver";
import Notice from "../pages/Notice";
import Faq from "../pages/Faq";
import Qna from "../pages/Qna";
import QnaInsert from "../pages/QnaInsert";
import BestItem from "../pages/BestItem";
import DetailItem from "../pages/DetailItem";
import QnaUpdate from "../pages/QnaUpdate";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="auth/kakao/callback" element={<Kakao />} />
          <Route path="auth/naver/callback" element={<Naver />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newest" element={<Newest />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<Order />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/qnaInsert" element={<QnaInsert />} />
          <Route path="/qnaUpdate" element={<QnaUpdate />} />
          <Route path="/bestitem" element={<BestItem />} />
          <Route path="/detailitem/:goodsCode" element={<DetailItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
