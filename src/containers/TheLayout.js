import React from "react";
import TheContent from "./TheContent";
import TheSidebar from "./TheSidebar";
import TheFooter from "./TheFooter";
import TheHeader from "./TheHeader";
import { CAlert } from "@coreui/react";

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <CAlert color="info" className="text-center" closeButton>
        Starting from 18 March 2020, all employee of Nettium and Selfdrvn must work from home due to Covid-19
        </CAlert>

        <TheHeader />
        <div className="c-body">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
