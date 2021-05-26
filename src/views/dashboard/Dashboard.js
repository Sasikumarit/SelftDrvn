import React, { useState } from "react";
import { CChartDoughnut } from "@coreui/react-chartjs";
import Avatarlist from "./Avatarlist";

import {
  CCardFooter,
  CCol,
  CRow,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
   CBadge,
  CCardTitle,
  CCardText,
  CWidgetIcon,
} from "@coreui/react";

import {
  AccessTime as AccessTimeIcon,
  FilterTiltShift as FilterTiltShiftIcon,
  School as  SchoolIcon ,
} from "@material-ui/icons";

const Dashboard = () => {
  const [activeKey, setActiveKey] = useState(0);
  const tabHeader = ["All", "In Review", "Complete", "Moderator", "Admin"];

  const TabContent = () => {
    return (
      <CRow>
        <CCol xs="12" sm="6" md="12">
          <CCard className="Hometab">
            <CCardBody className="Homebody">
            <CCardTitle className="Homeheader">  Advance Yourself. Earn Recognition Points.
                <br />
                And Help Others Too.</CCardTitle>
              <CCardText className="Homeheader-sub">
              Meet your goals. Learn something new. Collaborate with others.
                This week there are <strong>12</strong> new quests available.
              </CCardText>
             
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="8">
          <CCard>
            <CCardBody>
              <CCardTitle>Start Azure demo Project</CCardTitle>
              <CCardText>
                Microsoft Azure has decided to partner with us and supply us
                with a company wide support for our engineer with active
                support. Begin your jouurney to upskill youself to be an Azure
                cloud engineer.
              </CCardText>
            </CCardBody>

            <CCardBody>
              <CRow>
                <CCol xs="12" sm="6" lg="3">
                  <CWidgetIcon
                    text="Badge"
                    header="Cyber Defender"
                    color="primary"
                    className="cardwidgeticon"
                    iconPadding={false}
                  >
                    <FilterTiltShiftIcon />
                  </CWidgetIcon>
                </CCol>

                <CCol xs="12" sm="6" lg="3">
                  <CWidgetIcon
                    text="Time Left"
                    header="2 Days"
                    color="danger"
                    className="cardwidgeticon"
                    iconPadding={false}
                  >
                    <AccessTimeIcon />
                  </CWidgetIcon>
                </CCol>

                <CCol xs="12" sm="9" lg="6" className="colimage">
                  <CWidgetIcon
                    text="Moderators"
                    header="4 People"
                    className="cardwidgeticon"
                    // color="white"
                    iconPadding={false}
                  >
                    <Avatarlist />
                  </CWidgetIcon>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CCardText>Created : 12 January 2019</CCardText>
            </CCardFooter>
          </CCard>

          
    
          <CCard>
            <CCardBody>
              <CCardTitle>Start Azure demo Project</CCardTitle>
              <CCardText>
                Microsoft Azure has decided to partner with us and supply us
                with a company wide support for our engineer with active
                support. Begin your jouurney to upskill youself to be an Azure
                cloud engineer.
              </CCardText>
            </CCardBody>

            <CCardBody>
              <CRow>
                <CCol xs="12" sm="6" lg="3">
                  <CWidgetIcon
                    text="Badge"
                    header="Cyber Defender"
                    color="primary"
                    className="cardwidgeticon"
                    iconPadding={false}
                  >
                    <FilterTiltShiftIcon />
                  </CWidgetIcon>
                </CCol>

                <CCol xs="12" sm="6" lg="3">
                  <CWidgetIcon
                    text="Time Left"
                    header="2 Days"
                    color="danger"
                    className="cardwidgeticon"
                    iconPadding={false}
                  >
                    <AccessTimeIcon />
                  </CWidgetIcon>
                </CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <CCardText>
                <AccessTimeIcon width={20} /> 12 January 2019
              </CCardText>
            </CCardFooter>
          </CCard>
     
    

        </CCol>

        <CCol xs="12" sm="4" md="4">
          <CCard>
            <CCardBody>
              <CCardTitle>Points</CCardTitle>
              <CCardText>
                <CChartDoughnut
                  datasets={[
                    {
                      backgroundColor: ["#007bff", "#333333"],
                      data: [785283, 214717],
                    },
                  ]}
                  labels={["My Points"]}
                  options={{
                    tooltips: {
                      enabled: true,
                    },
                    cutoutPercentage: 80,
                    legend: {
                      position: "bottom",
                      padding: 5,
                      labels: { pointStyle: "circle", usePointStyle: true },
                      display: false,
                    },
                    responsive: true,
                    centerText: { display: true, text: "7" },
                  }}
                />
                <div class="label-text">
                  <span>
                    {" "}
                    My Points <br /> 785283 <br /> / 1000000
                  </span>
                </div>
              </CCardText>
            </CCardBody>

            <CCardBody>
              <CCardTitle>Skills</CCardTitle>
              <CCardText>
                <CRow>
                  <CCol xs="12" sm="6" lg="12">
                    <CWidgetIcon
                      text="17 Relevant Quest"
                      header="Agile Methodology"
                      color="primary"
                      className="cardwidgeticon"
                      iconPadding={false}
                    >
                      <SchoolIcon />
                    </CWidgetIcon>
                  </CCol>
                  <CCol xs="12" sm="6" lg="12">
                    <CWidgetIcon
                      text="17 Relevant Quest"
                      header="User Experience Analytics"
                      color="primary"
                      className="cardwidgeticon"
                      iconPadding={false}
                    >
                 
                      <SchoolIcon />
                    </CWidgetIcon>
                  </CCol>
                </CRow>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>

    
      </CRow>
    );
  };

  return (
    <>
      <CRow>
        <CCol xs="12" md="12" className="mb-12">
          <CCard className="Hometab">
            <CCardBody>
              <CTabs>
                <CNav variant="tabs">
                  {tabHeader.length !== 0 &&
                    tabHeader.map((item, idx) => {
                      return (
                        <CNavItem>
                          <CNavLink
                            href="#"
                            active={activeKey === idx}
                            onClick={() => setActiveKey(idx)}
                          >
                            <span className="tabheader">{item}</span>{" "}
                            <CBadge
                              color={activeKey === idx ? "primary" : "light"}
                              className="float-right tabheader-badge"
                              style={{
                                color: activeKey === idx ? "#ffff" : "#2008ef",
                                background: activeKey === idx ? "#2008ef": "#d5dade",
                              }}
                            >
                              2
                            </CBadge>
                          </CNavLink>
                        </CNavItem>
                      );
                    })}
                </CNav>
                <CTabContent>
                  <CTabPane>{TabContent()}</CTabPane>
                  <CTabPane>{TabContent()}</CTabPane>
                  <CTabPane>{TabContent()}</CTabPane>
                  <CTabPane>{TabContent()}</CTabPane>
                  <CTabPane>{TabContent()}</CTabPane>
                </CTabContent>
              </CTabs>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
