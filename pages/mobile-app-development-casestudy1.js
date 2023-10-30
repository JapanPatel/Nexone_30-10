import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import React, { useState } from "react";

const PortfolioDetails = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Application Development",
    "Mobile App Development ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      <Breadcumb2
        pageName={"Mobile App Development "}
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
                        Transforming Innovative Ideas into Scalable Mobile Apps{" "}
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
                      <span> Mobile App Development for the Future</span>{" "}
                    </li>
                    <li className="hr-4">
                      <strong>Collaboration </strong>{" "}
                      <span>
                        Nexone collaborated with InnovApp Labs to transform
                        their innovative app idea into a scalable mobile
                        application.
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
                    InnovApp Labs, a startup with a groundbreaking app idea,
                    faced the challenge of limited resources and a tight
                    timeline. They needed a partner who could turn their
                    innovative concept into a functional and scalable mobile app
                    swiftly.
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
                      Bring their innovative app idea to life within a short
                      timeframe.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Develop a scalable mobile app that exceeded their
                      expectations.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      Leverage low-code expertise to streamline development and
                      maximize efficiency.
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
                      Nexone's team of experts collaborated closely with
                      InnovApp Labs to understand their vision. They utilized
                      their low-code expertise to design and develop the mobile
                      app, focusing on speed, scalability, and innovation. The
                      team provided continuous guidance and support throughout
                      the development process.
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
                      Nexone's low-code expertise allowed InnovApp Labs to turn
                      their innovative idea into a fully functional mobile app
                      swiftly.
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The collaborative efforts led to the creation of a
                      scalable mobile app that exceeded expectations.{" "}
                    </span>
                  </p>
                  <p>
                    <i className="bi bi-check-lg" />{" "}
                    <span>
                      {" "}
                      The app's speed, efficiency, and innovative features
                      positioned InnovApp Labs for success in the competitive
                      startup landscape.{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="service-details-icon-box pt-1">
                <div className="service-page-title2">
                  <h2>Conclusion:</h2>
                  <p style={{ textAlign: "justify", marginTop: "7px" }}>
                    Nexone's partnership with InnovApp Labs demonstrated the
                    transformative power of low-code expertise in turning
                    innovative ideas into scalable mobile applications. The
                    successful collaboration highlighted how startups can
                    leverage Nexone's capabilities to bring their visions to
                    life efficiently.
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
