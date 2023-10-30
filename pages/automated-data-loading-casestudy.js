import Breadcumb2 from "@/src/components/Breadcumb2";
import { useState } from "react";
import Layout from "@/src/layout/Layout";
const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Data Integration Solutions",
    "Automated Data Loading ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Automated Data Loading "}
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
                        Efficient Automated Data Loading for Accelerated
                        Processes{" "}
                      </span>{" "}
                    </li>
                    <li>
                      <strong>Category</strong>{" "}
                      <span>
                        Data Integration Solutions: Empowering IT Efficiency
                      </span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Subcategory </strong>{" "}
                      <span>
                        {" "}
                        Automated Data Loading: Efficiency Through Seamless
                        Automation
                      </span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>
                        Nexone collaborated with DataTech Solutions, an emerging
                        IT company, to accelerate processes through efficient
                        automated data loading.
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
                    DataTech Solutions aimed to accelerate its processes by
                    automating data loading. Nexone's expertise in data
                    integration solutions was the ideal choice.
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
                      Accelerate processes through efficient automated data
                      loading.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Leverage Nexone's expertise in no-code and low-code
                      solutions.{" "}
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
                      Nexone worked closely with DataTech Solutions to assess
                      their automation needs. They implemented no-code and
                      low-code solutions to streamline data-loading processes.
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
                      DataTech Solutions achieved efficient automated data
                      loading.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Nexone's no-code and low-code solutions significantly
                      accelerated their processes.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The collaboration highlighted Nexone's proficiency in data
                      integration.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    The collaboration between Nexone and DataTech Solutions
                    showcased how efficient automated data loading can
                    accelerate processes for emerging IT companies.
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
