import React, { FC, useState, useEffect } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";

import schools from "../../assets/schools.png";
import students from "../../assets/students.png";
import teachers from "../../assets/teachers.png";

import FooterLogo from "../../assets/footer_logo.png";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import { Button } from "antd/lib/radio";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import config from "./config.json";
import API_SERVICE from "../../services/api-service";
import AdministrativeOverview from "./Administrative Overview";
import StudentAssessmentPerformanceGrade1_3 from "./Student Assessment Performance (Grade 1-3)";
import StudentAssessmentPerformanceGrade4_8 from "./Student Assessment Performance (Grade 4-8)";

const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const EducationPortal: FC = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [marker, setMarker] = useState("Districts");
  const onButtonClick = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  const onSetMarker = (id: any) => {
    console.log(id);
    setMarker(id);
  };

  const getMarkerData = async () => {
    const params: any = {};
    if (marker === "Districts") {
      params["district"] = "SIRMAUR";
    }

    if (marker === "Blocks") {
      params["block"] = "SIRMAUR";
    }

    if (marker === "Schools") {
      params["school"] = "SIRMAUR";
    }
    const data = await API_SERVICE.getMarkerData(params);
  };

  useEffect(() => {
    getMarkerData();
  }, [marker]);

  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ padding: "10px" }}>
        <Row>
          <Col span={8}>
            <Button
              className={
                selectedButton == 1 ? "navButtonSelected" : "navButton"
              }
              onClick={() => {
                onButtonClick(1);
              }}
            >
              Student Assessment Performance (Grade 4-8)
            </Button>
          </Col>
          <Col span={8}>
            <Button
              className={
                selectedButton == 2 ? "navButtonSelected" : "navButton"
              }
              onClick={() => {
                onButtonClick(2);
              }}
            >
              Student Assessment Performance (Grade 1-3)
            </Button>
          </Col>
          <Col
            span={8}
            onClick={() => {
              onButtonClick(3);
            }}
          >
            <Button
              className={
                selectedButton == 3 ? "navButtonSelected" : "navButton"
              }
            >
              Administrative Overview
            </Button>
          </Col>
        </Row>
        <Row>
          {selectedButton == 1 && (
            <Col>
              <StudentAssessmentPerformanceGrade1_3 />
            </Col>
          )}
          {selectedButton == 2 && (
            <Col>
              <StudentAssessmentPerformanceGrade4_8 />
            </Col>
          )}
          {selectedButton == 3 && (
            <Col>
              <AdministrativeOverview></AdministrativeOverview>
            </Col>
          )}
        </Row>
      </Content>
    </Layout>
  );
};
export default EducationPortal;
