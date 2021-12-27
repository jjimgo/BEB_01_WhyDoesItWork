import React from "react";
import "./clcContentsList.css";
import Content from "./Content";
//import Nav from "./Nav";
export const ContentsListPage = ({data}) => {
  // 로그인후 나오는 페이지
  return (
    <>
      <Nav data={data} />
      <Content />
    </>
  );
}