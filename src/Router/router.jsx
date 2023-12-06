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

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/detail/:productId" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/newest" element={<Newest />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/order" element={<Order />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
