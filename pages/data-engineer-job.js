import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Data Integration and Analytics Division",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Data Engineer"}
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
                  <div className="csd-title pt-30 mb-4">
                    <h1 style={{ fontSize: "33px" }}>Job Overviews</h1>
                  </div>
                  <ul>
                    <li>
                      <strong>Location</strong> <span>Ahmedabad </span>{" "}
                    </li>
                    <li>
                      <strong>Job Title</strong> <span>Data Engineer</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Hours </strong>{" "}
                      <span>8h / day (5 days working)</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Mail Your Resume </strong>{" "}
                      <span style={{ textTransform: "lowercase" }}>
                        hr@nexone.tech
                      </span>
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
                  <h2>Job Summary :</h2>
                  <p style={{ textAlign: "justify" }}>
                    As a Data Engineer at Nexone, you will be responsible for
                    building and maintaining data pipelines, ensuring data
                    availability and reliability. Your role involves working
                    with big data technologies and optimizing data workflows.
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
                  <h2>Key Responsibilities:</h2>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Collaborate with clients to understand their data
                      engineering requirements.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Design, build, and maintain data pipelines using big data
                      technologies.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Optimize data workflows for scalability and performance.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Troubleshoot and resolve data engineering issues.
                    </span>
                  </p>
                </div>
              </div>

              <div className="service-details-icon-box">
                <div className="service-page-title2">
                  <h2>Qualifications:</h2>
                </div>
                <div className="widget-service-details-icon">
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Bachelor's degree in Computer Science or related field.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Experience in data engineering and big data technologies
                      (e.g., Hadoop, Spark, Apache Kafka).{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Proficiency in programming languages (e.g., Python, Java).{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Strong problem-solving and data optimization skills.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Effective communication skills to work with clients and
                      team members.
                    </span>
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
