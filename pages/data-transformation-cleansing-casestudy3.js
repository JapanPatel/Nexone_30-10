import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Reporting And Analytics Tools",
    "Data Transformation and Cleansing ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      <Breadcumb2
        pageName={"Data Transformation and Cleansing "}
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
                        Data Transformation Excellence at InfoAnalytics Inc.{" "}
                      </span>{" "}
                    </li>
                    <li>
                      <strong>Category</strong>{" "}
                      <span>Reporting and Analytics Tools</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Subcategory </strong>{" "}
                      <span>
                        {" "}
                        Data Transformation and Cleansing: Elevating Data
                        Quality with Ease
                      </span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>
                        Nexone worked with InfoAnalytics Inc., an emerging IT
                        company, to elevate their data transformation and
                        cleansing processes.
                      </span>{" "}
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
                    InfoAnalytics Inc. encountered challenges related to data
                    quality and consistency. They needed a solution to
                    streamline data transformation and cleansing processes.
                    Nexone was selected to address these issues.
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
                      Implement a data transformation and cleansing solution to
                      enhance data quality.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Simplify and automate data-related tasks for InfoAnalytics
                      Inc.{" "}
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
                      Nexone assessed InfoAnalytics Inc.'s data processes and
                      implemented a data transformation and cleansing solution.
                      This solution streamlined data-related tasks, ensuring
                      data quality and ease of use.
                    </span>
                  </p>
                </div>
              </div>

              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h2>Results:</h2>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      InfoAnalytics Inc. significantly improved data quality,
                      reducing errors and inconsistencies.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Nexone's data transformation and cleansing solution saved
                      time and enhanced productivity.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The collaboration highlighted Nexone's expertise in
                      elevating data quality for emerging IT companies.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    The partnership between Nexone and InfoAnalytics Inc.
                    demonstrates the importance of data transformation and
                    cleansing in maintaining high data quality.
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
