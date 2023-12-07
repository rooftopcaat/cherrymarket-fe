import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../common/Header/Header";
import MainBanner from "../components/MainBanner/MainBanner";
import Suggest from "../components/Suggest/Suggest";
import LineBanner from "../components/LineBanner/LineBanner";
import SpeacilDeals from "../components/SpecialDeals/SpecialDeals";
import Catergories from "../components/Categories/Categories";

import { getProductAsync } from "../redux/modules/productSlice";
import { getCategoryAsync } from "../redux/modules/categorySlice";
import Footer from "../common/Footer/Footer";
import FixedCard from "../components/Main/FixedCard";
import FixedImg from "../components/Main/CardList";

const Main = () => {
  const [category, setCategory] = useState("추석선물세트");

  const dispatch = useDispatch();

  const CateogryFilter = useSelector((state) => state.category.data);

  const onChangeCategory = useCallback((e) => {
    setCategory(e.target.value);
  }, []);

  useEffect(() => {
    dispatch(getCategoryAsync(category));
  }, [category]);

  useEffect(() => {
    dispatch(getProductAsync());
  }, []);

  const list = useSelector((state) => state.product.data);

  return (
    <>
      <Header />
      <MainBanner />
      <FixedImg />
      <LineBanner />
      <SpeacilDeals>추석특가</SpeacilDeals>
      <Suggest list={CateogryFilter}>
      </Suggest>
      <Footer />
    </>
  );
};

export default Main;
