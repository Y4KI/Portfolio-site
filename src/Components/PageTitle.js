import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="pagetitle">
      <h1 className="pagetitle__title">{title}</h1>
      <div className="pagetitle__underlineBox">
        <div className="pagetitle__underline"></div>
      </div>
    </div>
  );
};

export default PageTitle;
