import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Customer Success and Consulting Division",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Customer Success Manager"}
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
                      <strong>Job Title</strong>{" "}
                      <span>Customer Success Manager</span>{" "}
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
                    As a Customer Success Manager at Nexone, you will be
                    responsible for ensuring our clients' satisfaction and
                    success with our solutions. Your role involves building
                    strong client relationships, understanding their needs, and
                    providing exceptional support.
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
                      Serve as the main point of contact for clients and build
                      lasting relationships.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Understand clients' goals and challenges, and provide
                      tailored solutions.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Collaborate with internal teams to ensure client success.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Monitor client satisfaction and gather feedback for
                      continuous improvement.
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
                      Bachelor's degree in Business, Marketing, or related
                      field.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Proven experience in customer success or account
                      management.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Strong communication and interpersonal skills.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Ability to understand and address clients' needs
                      effectively.
                    </span>
                  </p>

                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Exceptional problem-solving and client management skills.
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
