import React from "react";
import { PageTitleWr } from "../styles/PageTitleWr";

const PageTitle = ({ title }) => {
  return (
    <PageTitleWr>
      <h1>{title}</h1>
      <div>
        <div></div>
      </div>
    </PageTitleWr>
  );
};

export default PageTitle;
