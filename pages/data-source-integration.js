import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 1 });
  const [crumbs, setCrumbs] = useState([
    "Home",
    "services",
    "Data Integration Solutions",
    "Data Source Integration ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      {/* <Breadcumb1
        pageName={"Operations Management"}
        title={"Operations Management"}
      /> */}
      <Breadcumb2
        pageName={"Data Source Integration "}
        crumbs={crumbs}
        selected={selected}
      />
      {/*==================================================*/}
      {/* Start consen service details Area */}
      {/*==================================================*/}
      {service.ser === 1 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img
                          src="assets/images/resource/orags/data-source-integration-service.svg"
                          alt="Data Integration Service "
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Data Source Integration: Simplifying Data
                            Connectivity with No-Code and Low-Code Solutions
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Unlocking the Potential of Data Connectivity
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Ensuring regulatory compliance and efficient records
                            management are essential components of a
                            well-structured and compliant organization. Nexone
                            Tech Private Limited specializes in Compliance and
                            Records Management, providing solutions to automate
                            compliance processes, streamline record-keeping, and
                            enhance overall efficiency.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Effortless Integration with No-Code Ease
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our no-code solutions are designed with IT
                            professionals in mind. They provide a user-friendly
                            interface where data sources can be visually mapped.
                            This intuitive approach allows IT teams to define
                            data transformation rules without the need for
                            extensive coding. With no-code, the integration
                            process becomes a streamlined, visual experience.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Flexibility for Complex Integrations
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For more intricate data integration scenarios, our
                            low-code options offer the flexibility needed to
                            meet unique requirements. While still minimizing the
                            need for extensive manual coding, low-code empowers
                            IT professionals to handle complex data
                            transformations and integrations efficiently.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Creating a Unified IT Ecosystem
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            The ultimate goal of our Data Source Integration
                            services is to create a unified IT ecosystem.
                            Through our no-code and low-code solutions, data
                            flows seamlessly between systems, eradicating data
                            silos that can hinder decision-making. With a
                            harmonious data flow, IT teams can access and
                            utilize data more efficiently, leading to
                            better-informed decisions and enhanced overall
                            productivity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Choose Nexone Tech for Data Source Integration:
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-5px" }}
                          src="assets/images/resource/details-icon1.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Effortless Connectivity</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon2.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Flexibility for Complexity </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 ">
                    <div
                      className="service-details-box"
                      style={{
                        width: "100%",
                        height: "85%",
                      }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon3.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Unified Data Ecosystem</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon4.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Empowered Decision-Making</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img
                        src="assets/images/resource/orags/consulting-results-startup.jpg"
                        alt="Consulting Results Startup"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <span>Benefits</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Efficiency </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Flexibility </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Unified Data Flow </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Enhanced Decision-Making </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          With Nexone Tech's Data Source Integration services,
                          your IT department can simplify data connectivity,
                          optimize data workflows, and enhance data-driven
                          decision-making without the complexities of extensive
                          coding. Unlock the potential of your data with Nexone
                          Tech.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-source-integration.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Data Source Integration{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-transformation-cleansing.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Data Transformation and Cleansing
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="automated-data-loading.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Automated Data Loading{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-warehouse-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Data Warehouse Automation{" "}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/">
                        <a>
                          {" "}
                          <img
                            style={{ width: "113px" }}
                            src="assets/images/logo-white.png"
                            alt
                          />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="contact.html">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {service.ser === 2 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img
                          src="assets/images/resource/orags/startup-consulting-service.jpg"
                          alt="Start-up Consulting Service"
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Data Transformation and Cleansing: Elevating Data
                            Quality with Ease
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Empower Your IT Team to Optimize Data Quality
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            In the ever-expanding realm of data-driven
                            decision-making, data quality is paramount. Nexone
                            Tech Private Limited specializes in Data
                            Transformation and Cleansing, offering a powerful
                            combination of no-code and low-code tools to ensure
                            your data is clean, standardized, and ready for
                            insightful analysis.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Streamlined Data Cleansing with No-Code Simplicity
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our no-code solutions are designed to make data
                            cleansing a straightforward process. IT teams can
                            effortlessly define data cleansing rules using an
                            intuitive, visual interface. With no-code, there's
                            no need for extensive coding or technical expertise.
                            Data cleansing becomes an accessible and efficient
                            task.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Advanced Data Transformations with Low-Code
                            Flexibility
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For situations requiring advanced data
                            transformations, our low-code solutions step in.
                            These tools provide scripting capabilities that
                            allow for intricate data refinement. While still
                            minimizing the need for extensive manual coding,
                            low-code empowers IT professionals to tackle complex
                            data transformations effectively.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Automated Processes for Elevated Data Quality
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            One of the key benefits of our Data Transformation
                            and Cleansing services is automation. By automating
                            these processes, data quality escalates to new
                            heights. Data inconsistencies and inaccuracies are
                            systematically addressed, resulting in a dataset
                            that's well-prepared for precise analysis and
                            reporting.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Choose Nexone Tech for Data Transformation and Cleansing:
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-5px" }}
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Efficiency in Data Cleansing</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon2.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Flexibility for Complexity </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 ">
                    <div
                      className="service-details-box"
                      style={{
                        width: "100%",
                        height: "85%",
                      }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon3.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Automated Data Quality</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon4.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Precision and Insight</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img
                        src="assets/images/resource/orags/consulting-results-startup.jpg"
                        alt="Consulting Results Startup"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <span>Benefits</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Effortless Data Cleansing </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Flexibility for Complex Transformations </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Automated Data Quality </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Precision in Analysis and Reporting </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          With Nexone Tech's Data Transformation and Cleansing
                          services, your IT department can optimize data
                          quality, streamline data processes, and ensure that
                          your data is ready to empower informed
                          decision-making. Elevate your data quality
                          effortlessly with Nexone Tech.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-source-integration.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Data Source Integration{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-transformation-cleansing.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Data Transformation and Cleansing
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="automated-data-loading.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Automated Data Loading{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-warehouse-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Data Warehouse Automation{" "}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/">
                        <a>
                          {" "}
                          <img
                            style={{ width: "113px" }}
                            src="assets/images/logo-white.png"
                            alt
                          />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="contact.html">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {service.ser === 3 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img
                          src="assets/images/resource/orags/startup-consulting-service.jpg"
                          alt="Start-up Consulting Service"
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Automated Data Loading: Efficiency Through Seamless
                            Automation
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Empower Your IT Workflow with Data Loading
                            Automation
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            In today's data-driven landscape, efficiency and
                            accuracy are paramount. Nexone Tech Private Limited
                            specializes in Automated Data Loading, harnessing
                            the power of no-code and low-code automation to
                            streamline your data processes. With our solutions,
                            IT professionals can establish data loading
                            processes that operate autonomously, eliminating the
                            need for manual intervention.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Effortless Data Loading with No-Code Simplicity
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our no-code solutions simplify the creation of data
                            loading workflows. Designed for efficiency and
                            accessibility, the no-code interface enables IT
                            teams to establish straightforward data loading
                            processes effortlessly. With no extensive coding
                            required, you can set up data loading that suits
                            your needs.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Advanced Control for Complex Data Loading with
                            Low-Code Options
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For those scenarios requiring more intricate data
                            loading processes, our low-code options provide
                            advanced control. While still minimizing the need
                            for extensive manual coding, low-code empowers IT
                            professionals to tackle complex data loading
                            scenarios with ease. This flexibility ensures that
                            even the most complex data loading requirements can
                            be met.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Consistently Updated and Accessible Data
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            The outcome of our Automated Data Loading services
                            is a dataset that remains consistently updated and
                            readily available for analysis. With automation in
                            place, data loading processes operate seamlessly in
                            the background, ensuring that your data is current
                            whenever you need it. This accessibility enhances
                            decision-making and empowers your organization to
                            stay responsive to evolving business needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Choose Nexone Tech for Automated Data Loading:
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-5px" }}
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Efficiency and Accuracy</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon2.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Accessibility </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 ">
                    <div
                      className="service-details-box"
                      style={{
                        width: "100%",
                        height: "85%",
                      }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon3.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Responsiveness</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon4.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Precision and Insight</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img
                        src="assets/images/resource/orags/consulting-results-startup.jpg"
                        alt="Consulting Results Startup"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <span>Benefits</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Efficiency Through Automation </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> No-Code Simplicity </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Low-Code Flexibility </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Consistently Updated Data </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          With Nexone Tech's Automated Data Loading services,
                          your IT department can optimize data loading
                          processes, reduce manual intervention, and ensure that
                          your data is consistently updated and accessible,
                          empowering data-driven decision-making with ease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-source-integration.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Data Source Integration{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-transformation-cleansing.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Data Transformation and Cleansing
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="automated-data-loading.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Automated Data Loading{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-warehouse-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Data Warehouse Automation{" "}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/">
                        <a>
                          {" "}
                          <img
                            style={{ width: "113px" }}
                            src="assets/images/logo-white.png"
                            alt
                          />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="contact.html">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {service.ser === 4 && (
        <div className="service-detials-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-lg-12 col-sm-12">
                    <div className="consen-service-details-box">
                      <div className="consen-service-thumb">
                        <img
                          src="assets/images/resource/orags/startup-consulting-service.jpg"
                          alt="Start-up Consulting Service"
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Data Warehouse Automation: Streamlining Centralized
                            Data Management
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Empower Your IT Department with Data Warehousing
                            Ease
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            In today's data-centric world, centralizing and
                            managing your data efficiently is key to informed
                            decision-making. Nexone Tech Private Limited
                            specializes in Data Warehouse Automation, utilizing
                            a combination of no-code and low-code solutions to
                            simplify the setup and management of data
                            warehousing structures.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            No-Code Simplicity for Data Warehousing
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our no-code solutions redefine how data warehousing
                            is approached. Designed with accessibility in mind,
                            our no-code tools simplify the setup of data
                            warehousing structures. With no extensive coding
                            required, IT teams can create a centralized data
                            repository that's accessible to various departments
                            and systems. This centralization enhances data
                            accessibility, breaking down departmental silos, and
                            ensuring data consistency.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Flexibility and Control with Low-Code Solutions
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For organizations requiring customized data
                            warehousing configurations, our low-code solutions
                            offer flexibility and control. These tools provide
                            the capabilities needed to tailor data warehousing
                            structures to unique requirements while minimizing
                            the need for extensive manual coding. The result is
                            a data warehousing system that aligns precisely with
                            your organization's needs.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Automating Data Warehousing for Efficiency
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our Data Warehouse Automation services extend to
                            automation. By automating data warehousing
                            processes, IT teams can establish a centralized
                            repository for structured data. This repository is
                            not only easily accessible but also consistently
                            updated, ensuring that your data remains current and
                            reliable for decision-making.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Choose Nexone Tech for Data Warehouse Automation:
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-5px" }}
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Efficiency</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-3">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon2.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Customization </h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 ">
                    <div
                      className="service-details-box"
                      style={{
                        width: "100%",
                        height: "85%",
                      }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon3.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Centralized Data Management</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon4.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Enhanced Decision-Making</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img
                        src="assets/images/resource/orags/consulting-results-startup.jpg"
                        alt="Consulting Results Startup"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6">
                    <div className="service-details-icon-box">
                      <div className="service-page-title2">
                        <span>Benefits</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> No-Code Simplicity </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Customization with Low-Code </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Automated Centralization </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Enhanced Data Accessibility </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          With Nexone Tech's Data Warehouse Automation services,
                          your IT department can optimize data warehousing
                          processes, enhance data accessibility, and ensure that
                          your data remains consistent and readily available for
                          informed decision-making. Centralized data management
                          has never been easier.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="widget-categories-box">
                  {/* categories title */}
                  <div className="categories-title">
                    <h4> Services </h4>
                  </div>
                  {/* widget categories menu */}
                  <div className="widget-categories-menu">
                    <ul>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-source-integration.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Data Source Integration{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-transformation-cleansing.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Data Transformation and Cleansing
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="automated-data-loading.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Automated Data Loading{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-warehouse-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 4,
                              })
                            }
                          >
                            {" "}
                            Data Warehouse Automation{" "}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* categoreis thumb */}
                <div className="widget-categories-thumb">
                  {/* widget categories content  */}
                  <div className="widget-categories-content text-center">
                    <div className="logo-thumb">
                      <Link legacyBehavior href="/">
                        <a>
                          {" "}
                          <img
                            style={{ width: "113px" }}
                            src="assets/images/logo-white.png"
                            alt
                          />{" "}
                        </a>
                      </Link>
                    </div>
                    <div className="widget-title2">
                      <h3>Need Service?</h3>
                    </div>
                    <div className="widget-button">
                      <Link legacyBehavior href="contact.html">
                        <a>
                          {" "}
                          <i className="bi bi-envelope" /> Contact Us{" "}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default ServiceDetails;
