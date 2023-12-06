import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Join from "../pages/Join";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Admin from "../pages/Admin";
import Detail from "../pages/Detail";
import Newest from "../pages/Newest";
import Kakao from "../components/Callback/Kakao";
import Naver from "../components/Callback/Naver";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
