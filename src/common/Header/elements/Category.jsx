import React from "react";
import styled from "styled-components";
import SidebarItems from "./SidebarItems";

const Category = ({ showHover }) => {

  return (
    <>
      <CatrgoryIcon></CatrgoryIcon>
      <span>카테고리</span>
      <CategoryNav>
        {showHover && (
          <HeadSideBar>
            <div>
              <ul>
                <HeadSideBarItmes>
                  <SidebarItems imageName="채소" label="채소" />
                  <SidebarItems imageName="과일견과쌀" label="과일·견과·쌀" />
                  <SidebarItems imageName="수산해산건어물" label="수산·해산·건어물" />
                  <SidebarItems imageName="정육가공육계란" label="정육·가공육·계란" />
                  <SidebarItems imageName="국반찬메인요리" label="국·반찬·메인요리" />
                  <SidebarItems imageName="간편식밀키트샐러드" label="간편식·밀키트·샐러드" />
                  <SidebarItems imageName="면양념오일" label="면·양념·오일" />
                  <SidebarItems imageName="생수음료커피" label="생수·음료·커피" />
                  <SidebarItems imageName="간식과자떡" label="간식·과자·떡" />
                  <SidebarItems imageName="베이커리" label="베이커리" />
                  <SidebarItems imageName="유제품" label="유제품" />
                  <SidebarItems imageName="건강식품" label="건강식품" />
                </HeadSideBarItmes>
              </ul>
            </div>
          </HeadSideBar>
        )}
      </CategoryNav>
    </>
  );
};

export default Category;

export const CatrgoryIcon = styled.span`
  width: 16px;
  height: 14px;
  margin-right: 14px;
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==)
    0px 0px / 16px 14px no-repeat;
`;

export const CategoryNav = styled.div`
  max-height: calc(95vh-55px);
  font-weight: Normal;
  min-height: 200px;
  position: absolute;
  display: flex;
  top: 46px;
  padding-top: 10px;
`;

export const HeadSideBar = styled.div`
  max-height: calc(95vh-55px);
  min-height: 200px;
  position: absolute;
  display: flex;
  top: 0px;
  padding-top: 10px;
  & div {
    position: relative;
    z-index: 21;
    width: 249px;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);
    animation: 0 linear 0s 1 normal none running animation-w43n76;
  }
  & ul {
    overflow-x: hidden;
    overflow-y: auto;
    width: 247px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

export const HeadSideBarItmes = styled.li`
  padding: 7px 0px 9px 14px;

  & div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    border: none;
    padding-top: 20px;
  }
  & img {
    flex: 0 1 0%;
    width: 24px;
    height: 24px;
  }
  & span {
    flex: 1 1 0%;
    padding: 1px 20px 0px 10px;
    color: rgb(51, 51, 51);
    font-size: 14px;
    font-weight: 400px;
    line-height: 22px;
  }
`;
