import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import React, { useState } from "react";

const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Business Process Automation",
    "Data Entry and Processing Automation ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      <Breadcumb2
        pageName={"Data Entry and Processing Automation "}
        crumbs={crumbs}
        selected={selected}
      />
      <div className="case-study-details">
        <div className="container">
          <div className="case-study-intro">
            <div className="row align-items-center">
              <div className=" col-sm-12 col-md-6 col-lg-6">
                <div className="csd-thumb">
                  <img
                    src="assets/images/resource/portfolio-details.jpg"
                    alt="thumb"
                  />
                </div>
              </div>
              <div className=" col-sm-12 col-md-6 col-lg-6">
                <div className="csd-info">
                  <div className="csd-title pt-30 mb-4"></div>
                  <ul>
                    <li>
                      <strong>Case Study Title</strong>{" "}
                      <span>
                        Enhancing Data Entry and Processing Efficiency with
                        Nexone's Business Process Automation{" "}
                      </span>{" "}
                    </li>
                    <li>
                      <strong>Category</strong>{" "}
                      <span>Business Process Automation</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Subcategory </strong>{" "}
                      <span>Data Entry and Processing Automation</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>Nexone and StreamlineTech Solutions</span>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="case-study-intro upp">
            <div className="csd-content">
              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h1 style={{ fontSize: "40px" }}>Background :</h1>
                  <p style={{ textAlign: "justify" }}>
                    StreamlineTech Solutions, an emerging IT company, recognized
                    the need to streamline their data entry and processing
                    operations. They aimed to handle data with greater speed and
                    precision while freeing up valuable resources for
                    innovation.
                  </p>

                  <img
                    className="my-4"
                    src="assets/images/case/1.jpg"
                    alt="Case image"
                  />
                </div>
              </div>
              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h2>Objectives:</h2>
                </div>
                <div className="widget-service-details-icon mt-3">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Improve data entry and processing efficiency.</span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Enhance data accuracy and speed.</span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Allocate more resources to innovation and growth.
                    </span>
                  </p>
                </div>
              </div>

              <div className="service-details-icon-box">
                <div className="service-page-title2 ">
                  <h2>Approach:</h2>
                </div>

                <div className="widget-service-details-icon mt-3">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      StreamlineTech Solutions partnered with Nexone to
                      implement business process automation tailored to their
                      data entry and processing needs. Nexone's expertise in
                      automation played a pivotal role in achieving these
                      objectives.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The collaboration began with a comprehensive assessment of
                      StreamlineTech's existing data entry and processing
                      workflows. Nexone's team then developed a customized
                      strategy for automation, focusing on optimizing critical
                      areas.{" "}
                    </span>
                  </p>
                </div>
              </div>

              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h2>Results:</h2>
                  <p>
                    <span style={{ fontSize: "18px", marginTop: "7px" }}>
                      {" "}
                      The implementation of Nexone's business process automation
                      solutions yielded substantial results for StreamlineTech
                      Solutions:
                    </span>
                  </p>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Efficiency Improvement:</b>
                      Data entry and processing operations became significantly
                      more efficient, reducing manual efforts and accelerating
                      data handling.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Enhanced Accuracy:</b> Automation led to improved data
                      accuracy and speed, reducing errors and ensuring data
                      integrity.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Resource Allocation:</b> With streamlined processes,
                      StreamlineTech Solutions could reallocate resources to
                      innovation and growth initiatives, fostering company-wide
                      innovation.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    Nexone's expertise in business process automation empowered
                    StreamlineTech Solutions, an emerging IT company, to
                    revolutionize their data entry and processing operations.
                    The collaboration resulted in improved efficiency, enhanced
                    data accuracy, and the ability to allocate more resources to
                    innovation and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PortfolioDetails;
