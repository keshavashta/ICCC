import React, { FC, useState } from "react";
import { Card, Col, Layout, Row, Divider, Image, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./index.css";
import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { NavLink } from "react-router-dom";

import schools from "../../assets/schools.png";
import students from "../../assets/students.png";
import teachers from "../../assets/teachers.png";
import QuestionWithIframe from "../../components/QuestionWIthIframe";

import FooterLogo from "../../assets/footer_logo.png";
import FooterRightLogo from "../../assets/footer_Samarth_Himachal_logo.png";
import { Button } from "antd/lib/radio";
import MapComponent from "../../components/MapComponent/MapComponent.jsx";
import config from "./config.json";

const sample_data = {
  schools: {
    GPS: 10601,
    GMS: 1947,
    GHS: 932,
    GSSS: 1868,
  },
};

const StudentAssessmentPerformanceGrade4_8 = (props: any) => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [selected, setSelected] = useState("SA1");
  const [marker, setMarker] = useState("Districts");
  const onButtonClick = (id: any) => {
    console.log(id);
    setSelectedButton(id);
  };
  const onSetMarker = (id: any) => {
    console.log(id);
    setMarker(id);
  };
  return (
    <Layout className={"layout-wrapper home-wrapper"}>
      <Content style={{ padding: "10px" }}>
        <Row>
          <Col span={7}>
            <Row>
              {/* <Col span={8}>
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
              </Col> */}
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={84}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={85}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={86}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={87}
                    width="100%"
                    height="300"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  District-wise Assessment Performance (SA 1 & SA2)
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={97}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class-4</Button>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={98}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class 5</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={99}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class 6</Button>
                </div>
              </Col>
              <Col span={12}>
                <div>
                  <QuestionWithIframe
                    questionId={100}
                    width="100%"
                    height="400"
                  />
                  <Button className="navButtonSelected">Class 7</Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={101}
                  width="100%"
                  height="400"
                />
                <Button className="navButtonSelected">Class 8</Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Row>
                  <Col span={4}>
                    <Select
                      onSelect={(e: any) => setSelected(e)}
                      defaultValue={"SA1"}
                      style={{ width: "100%" }}
                    >
                      <Select.Option value={"SA1"}>{"SA-1"}</Select.Option>
                      <Select.Option value={"SA2"}>{"SA-2"}</Select.Option>
                    </Select>
                  </Col>
                  <Col span={5}>
                    <Button
                      className={
                        marker == "Districts"
                          ? "navButtonSelected"
                          : "navButton"
                      }
                      onClick={() => {
                        setMarker("Districts");
                      }}
                    >
                      Districts
                    </Button>
                  </Col>
                  <Col span={5}>
                    <Button
                      className={
                        marker == "Blocks" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        props.getMarkerData("Blocks");
                        setMarker("Blocks");
                      }}
                    >
                      Blocks
                    </Button>
                  </Col>
                  {/* <Col span={5}>
                    <Button
                      className={
                        marker == "Clusters" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        props.getMarkerData("Districts");
                        setMarker("Clusters");
                      }}
                    >
                      Clusters
                    </Button>
                  </Col> */}
                  <Col span={5}>
                    <Button
                      className={
                        marker == "Schools" ? "navButtonSelected" : "navButton"
                      }
                      onClick={() => {
                        props.getMarkerData("Schools");
                        setMarker("Schools");
                      }}
                    >
                      Schools
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <div style={{ width: "100%" }}>
                      <MapComponent
                        at={selected}
                        config={config}
                        markers={props.markerData}
                        type={2}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <Row>
              {/* <Col span={24}>
                <div>
                  <div className="NIPUNheading">
                    Class-wise Assessment Performance
                  </div>
                  <QuestionWithIframe
                    questionId={106}
                    width="100%"
                    height="350"
                  />
                  <Button className="navButtonSelected">
                    Average Grade-wise Performance distribution (SA-1 & SA-2)
                  </Button>
                  <Col span={24} style={{ display: "flex" }}>
                    <Col span={12}>
                      <QuestionWithIframe
                        questionId={120}
                        width="100%"
                        height="350"
                      />
                      <Button className="navButtonSelected">Class 1</Button>
                    </Col>
                    <Col span={12}>
                      <QuestionWithIframe
                        questionId={121}
                        width="100%"
                        height="350"
                      />
                      <Button className="navButtonSelected">Class 2</Button>
                    </Col>
                  </Col>
                  <Col span={24}>
                    <QuestionWithIframe
                      questionId={122}
                      width="100%"
                      height="350"
                    />
                    <Button className="navButtonSelected">Class 3</Button>
                  </Col>
                </div>
              </Col> */}
            </Row>
            <Row>
              <Col span={24}>
              <div className="NIPUNheading">
              Class-wise Assessment Performance

                </div>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={104}
                  width="100%"
                  height="510"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 4)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={105}
                  width="100%"
                  height="510"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 5)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={107}
                  width="100%"
                  height="510"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 6)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={108}
                  width="100%"
                  height="510"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 7)
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={110}
                  width="100%"
                  height="510"
                />
                <Button className="navButtonSelected">
                  Comparative Performance in SA-1 and SA-2 (Class 8)
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Row>
              <Col span={24}>
                <div className="NIPUNheading">
                  Subject-wise Assessment Performance
                </div>
              </Col>
            </Row>
            <Row>
              {/* <Col span={24}>
                <QuestionWithIframe
                  questionId={117}
                  width="100%"
                  height="560"
                />
                <Button className="navButtonSelected">
                  Subject wise change in average score across SAs
                </Button>
              </Col> */}
              <Col span={24}>
                <QuestionWithIframe
                  questionId={111}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 4)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={112}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 5)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={113}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 6)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={111}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 7)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={115}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Subject wise average score across SAs (Class 8)
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Col span={24}>
              <div className="NIPUNheading">
                Class-wise weakest Learning Outcomes across SAs
              </div>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={152}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Weakest Learning Outcomes (Class 4)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={153}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Weakest Learning Outcomes (Class 5)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={154}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Weakest Learning Outcomes (Class 6)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={155}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                Weakest Learning Outcomes (Class 7)
                </Button>
              </Col>
              <Col span={24}>
                <QuestionWithIframe
                  questionId={156}
                  width="100%"
                  height="500"
                />
                <Button className="navButtonSelected">
                  Weakest Learning Outcomes (Class 8)
                </Button>
              </Col>
            </Col>
          </Col>
        </Row>
      </Content>
      {/* <Content>
          <Row justify={'center'} align={'middle'} className="container">
            <Title level={3}>INTEGRATED EDUCATION DASHBOARD</Title>
            <Divider>एकीकृत शिक्षा डैशबोर्</Divider>
            <Row gutter={30}>
              <Col> */}
      {/*@ts-ignore*/}
      {/* <Tile thumbnail={schools} titleEN="SCHOOLS" titleHI="विद्यालय" data={sample_data.schools} count={15330} />
              </Col>
              <Col> */}
      {/*@ts-ignore*/}
      {/* <Tile thumbnail={students} titleEN="STUDENTS" titleHI="विद्यालय" data={sample_data.schools} count={15330} />
              </Col>
              <Col> */}
      {/*@ts-ignore*/}
      {/* <Tile thumbnail={teachers} titleEN="TEACHERS" titleHI="विद्यालय" data={sample_data.schools} count={15330} />
              </Col>
            </Row>
          </Row>
        </Content>
        <Row align="middle" justify="space-between" className="footer">
          <Image src={FooterLogo} height={"50px"} />
          <Image src={FooterRightLogo} height={"50px"} />
        </Row> */}
    </Layout>
  );
};

const Tile: FC = (props: any) => {
  return (
    <Card hoverable bordered className="card">
      <Row gutter={20} align="middle">
        <Col>
          <img alt={"broken"} src={props.thumbnail} className="thumbnail" />
        </Col>
        <Col>
          <Title level={3}>
            {props.titleEN}
            <div className="subtitle">{props.titleHI}</div>
          </Title>
        </Col>
      </Row>
      <Divider dashed className="divider" />
      <Title level={2}>
        <div className="count">{props.count}</div>
      </Title>
      <Row gutter={20} justify="space-between">
        {Object.keys(props.data).map((i, index) => (
          //@ts-ignore
          <Col key={index} align="middle">
            <b>{i}</b>
            <div>{props.data[i]}</div>
          </Col>
        ))}
      </Row>
      <br />
      <Row justify="end">
        <NavLink to="/education-dashboard">
          <u>View More</u> <ArrowRightOutlined />
        </NavLink>
      </Row>
    </Card>
  );
};

export default StudentAssessmentPerformanceGrade4_8;
