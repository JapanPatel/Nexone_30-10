import Breadcumb2 from "@/src/components/Breadcumb2";
import React, { useState } from "react";
import Layout from "@/src/layout/Layout";
const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Application Development",
    "Web Application Development ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Web Application Development "}
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
                        Competing in the Digital Space with User-Friendly Web
                        Apps{" "}
                      </span>{" "}
                    </li>
                    <li>
                      <strong>Category</strong>{" "}
                      <span>
                        Application Development with Low-Code and No-Code
                        Expertise
                      </span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Subcategory </strong>{" "}
                      <span>
                        {" "}
                        Web Application Development with Low-Code Efficiency
                      </span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>
                        Nexone collaborated with WebCraft Innovations, an
                        emerging IT company, for their web application
                        development needs.
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
                    WebCraft Innovations, an emerging IT company, aimed to
                    compete effectively in the digital space by offering
                    user-friendly web apps. They partnered with Nexone for web
                    application development.
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
                      Compete effectively in the digital space by developing
                      user-friendly web apps.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Deliver value to clients through innovative web
                      applications.{" "}
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
                      Nexone closely worked with WebCraft Innovations to
                      understand their objectives. Leveraging their expertise in
                      web application development, Nexone efficiently developed
                      user-friendly web applications, enabling the company to
                      compete effectively.
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
                      WebCraft Innovations successfully competed in the digital
                      space with user-friendly web apps.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The web applications delivered value to clients through
                      innovation.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Nexone's web application development solutions empowered
                      WebCraft Innovations to achieve their goals.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    The collaboration between Nexone and WebCraft Innovations
                    demonstrates how low-code efficiency can help emerging IT
                    companies compete effectively in the digital space. It
                    resulted in the successful development of user-friendly web
                    apps, enabling WebCraft Innovations to deliver value to
                    their clients.
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
