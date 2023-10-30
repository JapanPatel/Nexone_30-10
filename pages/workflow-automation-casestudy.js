import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import React, { useState } from "react";

const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Business Process Automation",
    "Workflow Automation ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      <Breadcumb2
        pageName={"Workflow Automation "}
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
                        Empowering Startup Success through Workflow Automation
                        with Nexone{" "}
                      </span>{" "}
                    </li>
                    <li>
                      <strong>Category</strong>{" "}
                      <span>Business Process Automation</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Subcategory </strong>{" "}
                      <span>Workflow Automation</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>Nexone and ProWorkflow Systems</span>{" "}
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
                    ProWorkflow Systems, a startup company, faced the challenge
                    of competing with larger players in the industry. To do so,
                    they needed to enhance their operational efficiency and
                    client service. The solution lay in workflow automation.
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
                    <span>
                      {" "}
                      Enhance operational efficiency and productivity.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Compete with larger players in the industry.</span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Improve client service through streamlined processes.
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
                      ProWorkflow Systems partnered with Nexone to implement
                      workflow automation solutions that would address their
                      specific needs. Nexone's expertise in workflow automation
                      was crucial in achieving their objectives.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The collaboration began with a thorough analysis of
                      ProWorkflow Systems' existing processes. Nexone's team
                      then developed a tailored strategy for the implementation
                      of workflow automation, focusing on critical areas.{" "}
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
                      The implementation of Nexone's workflow automation
                      solutions brought about significant results for
                      ProWorkflow Systems:
                    </span>
                  </p>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Operational Efficiency:</b>
                      ProWorkflow Systems witnessed a remarkable improvement in
                      operational efficiency. Automation reduced manual tasks
                      and bottlenecks, enabling faster project completion.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Competitive Edge:</b> Automation allowed ProWorkflow
                      Systems to compete with larger industry players by
                      delivering services more efficiently and cost-effectively.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Client Service:</b> Streamlined processes improved
                      client service, leading to higher client satisfaction and
                      retention rates.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    Nexone's expertise in workflow automation empowered
                    ProWorkflow Systems, a startup company, to level the playing
                    field and compete effectively with larger industry players.
                    The collaboration resulted in enhanced operational
                    efficiency, a competitive edge, and improved client service.
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
