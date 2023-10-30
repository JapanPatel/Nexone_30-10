import Breadcumb2 from "@/src/components/Breadcumb2";
import { useState } from "react";
import Layout from "@/src/layout/Layout";
const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Data Integration Solutions",
    "Data Transformation and Cleansing ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      {/* <Breadcumb
        pageName={"Legal and Regulatory Compliance "}
        title={"Optimization Consulting"}
      /> */}
      <Breadcumb2
        pageName={"Data Transformation and Cleansing "}
        crumbs={crumbs}
        selected={selected}
      />
      ;
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
                        Elevating Data Transformation for DataCraft Innovations{" "}
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
                        Data Transformation and Cleansing: Elevating Data
                        Quality with Ease
                      </span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>
                        Nexone partnered with DataCraft Innovations, an emerging
                        IT company, to enhance their data transformation and
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
                    DataCraft Innovations was struggling with data quality and
                    transformation issues. They needed a solution to ensure
                    their data was accurate and ready for analytics. They turned
                    to Nexone for assistance.
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
                      Improve data quality through effective data transformation
                      and cleansing.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Leverage Nexone's expertise in no-code and low-code
                      solutions for data integration.{" "}
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
                      Nexone conducted a thorough assessment of DataCraft
                      Innovations' data transformation and cleansing needs. They
                      implemented advanced no-code and low-code solutions to
                      streamline the process and enhance data quality.
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
                      DataCraft Innovations achieved significant improvements in
                      data quality, ensuring that their data was accurate and
                      reliable for analytics.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Nexone's no-code and low-code solutions optimized the data
                      transformation and cleansing process, saving time and
                      resources.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The collaboration demonstrated Nexone's capability in data
                      integration for emerging IT companies.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    The partnership between Nexone and DataCraft Innovations
                    highlights the transformative power of data integration
                    solutions, specifically tailored to improve data quality and
                    transformation for emerging IT companies.
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
