import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import React, { useState } from "react";

const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Business Process Automation",
    "Emerging IT Company ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Emerging IT Company "}
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
                        Optimizing Business Processes with Nexone's Workflow
                        Automation{" "}
                      </span>{" "}
                    </li>
                    <li>
                      <strong>Category</strong>{" "}
                      <span>Business Process Automation</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Subcategory </strong>{" "}
                      <span>Emerging IT Company</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>Nexone and ProcessMasters Inc.</span>{" "}
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
                    ProcessMasters Inc., an emerging IT company, faced the
                    challenge of optimizing their business processes to achieve
                    better efficiency and cost-effectiveness. They recognized
                    the need to streamline workflows, save time and resources,
                    and enhance their overall operations.
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
                      Streamline and automate key business processes.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Reduce operational costs and save resources. </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span> Improve overall efficiency and productivity.</span>
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
                      ProcessMasters Inc. partnered with Nexone to harness their
                      expertise in workflow automation. Nexone's solutions were
                      tailored to meet the unique requirements of emerging IT
                      companies like ProcessMasters Inc.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Nexone's team collaborated closely with ProcessMasters
                      Inc. to analyze their existing processes and identify
                      areas for automation. Together, they developed a
                      comprehensive strategy for implementing workflow
                      automation effectively.{" "}
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
                      solutions delivered significant results for ProcessMasters
                      Inc.:
                    </span>
                  </p>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Efficiency Enhancement:</b>
                      By automating critical business processes, ProcessMasters
                      Inc. achieved a remarkable improvement in operational
                      efficiency. Tasks were completed faster and with fewer
                      errors, leading to increased productivity.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Cost Savings:</b> Automation reduced the need for
                      manual intervention, resulting in cost savings for
                      ProcessMasters Inc. They could reallocate resources more
                      effectively to drive growth.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      <b>Resource Optimization:</b> The streamlined workflows
                      allowed ProcessMasters Inc. to optimize their workforce,
                      ensuring that employees could focus on more strategic and
                      value-added tasks.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    Nexone's workflow automation solutions played a crucial role
                    in enhancing the operational efficiency of ProcessMasters
                    Inc., an emerging IT company. The collaboration resulted in
                    streamlined processes, cost savings, and resource
                    optimization, positioning ProcessMasters Inc. for continued
                    growth and success.
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
