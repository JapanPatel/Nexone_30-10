import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 3 });
  const [crumbs, setCrumbs] = useState([
    "Home",
    "services",
    "Business Process Automation",
    "Document Management and Workflow Automation ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Document Management and Workflow Automation "}
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
                          src="assets/images/resource/orags/startup-consulting-service.jpg"
                          alt="Start-up Consulting Service"
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Workflow Automation: Transforming Business Processes
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Efficiency through Streamlined Workflows
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            In today's fast-paced business environment,
                            achieving operational efficiency is key to staying
                            competitive. At Nexone Tech Private Limited, we
                            specialize in Workflow Automation, a solution that
                            can transform your business processes, streamline
                            your operations, and save you valuable time and
                            resources.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Workflow Automation?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Efficiency Through Streamlined Workflows</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Low-Code Expertise </h4>
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
                        <h4>Data-Driven Insights </h4>
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
                        <h4> Seamless Integration</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        The Foundation of Efficiency: Workflow Design and
                        Mapping
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Workflow Design and Mapping</b> serves as the
                        cornerstone of efficient business processes. At Nexone
                        Tech, we empower you to visualize and design your
                        workflows with ease and precision. Our approach involves
                        low-code solutions that expedite workflow prototyping,
                        allowing for quick feedback and iterative improvements.
                        Witness your business processes come to life with
                        accuracy, all while leveraging our expertise in
                        automation.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Effortless Approvals and Routing: Approval and Routing
                        Automation
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Approval and Routing Automation</b> simplifies
                        decision-making and task routing within your workflows.
                        We harness the power of low-code solutions to automate
                        approval processes, ensuring that tasks are routed to
                        the appropriate individuals with minimal manual
                        intervention. With Nexone Tech's expertise, you can
                        streamline your approval workflows, reducing time spent
                        and minimizing errors.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Data-Driven Insights: Process Analytics and Optimization
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Process Analytics and Optimization</b> revolve around
                        leveraging data to enhance your operations continually.
                        We provide the tools necessary to capture and analyze
                        process data, identifying bottlenecks and areas for
                        improvement. Our low-code solutions facilitate rapid
                        optimization, ensuring that your workflows consistently
                        operate at peak efficiency.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Seamless Integration: Integration with Existing Systems
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Integration with Existing Systems</b> is fundamental
                        to creating a connected business ecosystem. Nexone Tech
                        specializes in seamlessly integrating your workflows
                        with your existing systems, whether they're legacy
                        software or modern applications. We ensure that data
                        flows smoothly between systems, enhancing overall
                        efficiency and reducing the need for manual data entry.
                      </p>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Optimize Your Business Processes with Nexone Tech
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      When you partner with Nexone Tech Private Limited for
                      Workflow Automation, you're partnering with a team
                      dedicated to optimizing your business processes for
                      efficiency, accuracy, and growth. Explore how our Workflow
                      Automation services can transform your operations.
                    </p>
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
                        <span>Consulting Results</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Workflow Design and Mapping</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Discover Approval and Routing Automation{" "}
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Learn About Process Analytics and Optimization
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Explore Integration with Existing Systems
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Optimize Your Workflows?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss how Workflow Automation can
                          benefit your business or have questions, our team is
                          here to assist you. Contact us today to initiate the
                          conversation.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-sm-6">
                <div className="service-work-process-box">
                  <div className="service-work-process-number">
                    <span>01</span>
                  </div>

                  <div className="service-work-process-desc">
                    <p>Idea Assessment and Market Analysis</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-work-process-box">
                  <div className="service-work-process-number">
                    <span>02</span>
                  </div>

                  <div className="service-work-process-desc">
                    <p>Business Plan Development</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="service-work-process-box">
                  <div className="service-work-process-number">
                    <span>03</span>
                  </div>

                  <div className="service-work-process-desc">
                    <p>Implementation and Support</p>
                  </div>
                </div>
              </div> */}
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
                        <Link legacyBehavior href="workflow-automation.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-entry-processing-automation.html"
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
                            Data Entry and Processing Automation
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="document-management-workflow-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Document Management and Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="compliance-records-management.html"
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
                            Compliance and Records Management{" "}
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
                            Data Entry and Processing Automation: Accuracy and
                            Speed Combined
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Efficiency Through Data Automation
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            In today's data-centric business world, ensuring the
                            accuracy and speed of data entry and processing is
                            vital. Nexone Tech Private Limited specializes in
                            Data Entry and Processing Automation, a solution
                            designed to eliminate errors, save time, and enhance
                            data integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Data Entry and Processing
                      Automation?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Efficient Data Management</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Low-Code Efficiency </h4>
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
                        <h4>Data Quality Assurance </h4>
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
                        <h4> Seamless Data Exchange</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Swift and Accurate Data Entry: Data Capture and
                        Extraction
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Data Capture and Extraction</b> is the linchpin of
                        efficient data entry. At Nexone Tech, we deploy low-code
                        solutions to automate data capture processes,
                        significantly reducing errors and saving valuable time.
                        Our approach streamlines the collection of data from
                        diverse sources, ensuring not only accuracy but also
                        consistency across your organization.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Data Quality Assurance: Data Validation and
                        Transformation
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Data Validation and Transformation</b> is
                        indispensable for maintaining data quality standards. We
                        harness the capabilities of low-code tools to validate
                        and transform data, ensuring that it aligns perfectly
                        with your specific requirements. Nexone Tech plays a
                        crucial role in maintaining data integrity throughout
                        your business processes.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Seamless Data Exchange: Data Import and Export
                        Automation
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Data Import and Export Automation</b> simplifies the
                        exchange of data between systems. Our low-code solutions
                        automate the import and export processes, reducing
                        manual effort and mitigating the risk of errors. With
                        Nexone Tech, your data flows seamlessly between systems,
                        contributing significantly to overall operational
                        efficiency.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Insights Through Visualization: Reporting and Data
                        Visualization
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Reporting and Data Visualization</b> put the power of
                        data-driven decision-making in your hands. We offer
                        sophisticated tools for creating insightful reports and
                        visualizing data, enabling you to gain profound insights
                        into your business processes. Nexone Tech ensures that
                        you are well-equipped with the information needed to
                        optimize your operations continually.
                      </p>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Enhance Your Data Processes with Nexone Tech
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      When you partner with Nexone Tech Private Limited for Data
                      Entry and Processing Automation, you're partnering with a
                      team committed to elevating your data management
                      capabilities. Explore how our Data Entry and Processing
                      Automation services can make your data work for you.
                    </p>
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
                        <span>Consulting Results</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Data Capture and Extraction</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Explore Data Validation and Transformation{" "}
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Learn About Data Import and Export Automation
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Reporting and Data Visualization</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Elevate Your Data Management?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss how Data Entry and
                          Processing Automation can benefit your business or
                          have questions, our team is here to assist you.
                          Contact us today to initiate the conversation.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-sm-6">
              <div className="service-work-process-box">
                <div className="service-work-process-number">
                  <span>01</span>
                </div>

                <div className="service-work-process-desc">
                  <p>Idea Assessment and Market Analysis</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-work-process-box">
                <div className="service-work-process-number">
                  <span>02</span>
                </div>

                <div className="service-work-process-desc">
                  <p>Business Plan Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-work-process-box">
                <div className="service-work-process-number">
                  <span>03</span>
                </div>

                <div className="service-work-process-desc">
                  <p>Implementation and Support</p>
                </div>
              </div>
            </div> */}
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
                        <Link legacyBehavior href="workflow-automation.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-entry-processing-automation.html"
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
                            Data Entry and Processing Automation
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="document-management-workflow-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Document Management and Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="compliance-records-management.html"
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
                            Compliance and Records Management{" "}
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
                          src="assets/images/resource/orags/document-management-automation-service.svg"
                          alt="Document Management Automation Service"
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Document Management and Workflow Automation
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Efficiency in Document Handling and Workflow
                            Streamlining
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            Efficient document management and streamlined
                            workflows are at the core of a well-organized and
                            productive organization. Nexone Tech Private Limited
                            specializes in Document Management and Workflow
                            Automation, offering solutions that enhance document
                            handling, automate workflows, and improve overall
                            efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Document Management and
                      Workflow Automation?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Efficient Document Handling</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Workflow Efficiency </h4>
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
                        <h4>Improved Accessibility</h4>
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
                        <h4> Reduced Manual Intervention</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        The Foundation of Document Management: Document Capture
                        and Storage
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Document Capture and Storage</b> serves as the
                        foundation for efficient document management. At Nexone
                        Tech, we provide automated solutions that facilitate the
                        capture and storage of documents, ensuring they are
                        easily accessible and well-organized. Our approach
                        simplifies document management, making sure you have the
                        documents you need when you need them.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Streamlined Workflow Processes: Document Workflow
                        Automation
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Document Workflow Automation</b> optimizes the flow
                        of documents throughout your organization. We automate
                        document routing, approvals, and notifications,
                        significantly reducing the need for manual intervention.
                        With Nexone Tech, your workflows become more efficient,
                        allowing your team to focus on higher-value tasks.
                      </p>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Optimize Your Document Management with Nexone Tech
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      When you partner with Nexone Tech Private Limited for
                      Document Management and Workflow Automation, you're
                      partnering with a team dedicated to making your document
                      management processes more efficient and your workflows
                      streamlined.
                    </p>
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
                        <span>Consulting Results</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Document Capture and Storage</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Document Workflow Automation </span>
                        </p>
                        {/* <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Learn About Data Import and Export Automation
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Reporting and Data Visualization</span>
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Optimize Document Management?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss how Document Management and
                          Workflow Automation can benefit your organization or
                          have questions, our team is here to assist you.
                          Contact us today to initiate the conversation.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-sm-6">
              <div className="service-work-process-box">
                <div className="service-work-process-number">
                  <span>01</span>
                </div>

                <div className="service-work-process-desc">
                  <p>Idea Assessment and Market Analysis</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-work-process-box">
                <div className="service-work-process-number">
                  <span>02</span>
                </div>

                <div className="service-work-process-desc">
                  <p>Business Plan Development</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service-work-process-box">
                <div className="service-work-process-number">
                  <span>03</span>
                </div>

                <div className="service-work-process-desc">
                  <p>Implementation and Support</p>
                </div>
              </div>
            </div> */}
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
                        <Link legacyBehavior href="workflow-automation.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-entry-processing-automation.html"
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
                            Data Entry and Processing Automation
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="document-management-workflow-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Document Management and Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="compliance-records-management.html"
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
                            Compliance and Records Management{" "}
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
                            Compliance and Records Management
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Strengthening Compliance and Records Handling
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            Ensuring regulatory compliance and efficient records
                            management are essential components of a
                            well-structured and compliant organization. Nexone
                            Tech Private Limited specializes in Compliance and
                            Records Management, providing solutions to automate
                            compliance processes, streamline record-keeping, and
                            enhance overall efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Compliance and Records
                      Management?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Streamlined Compliance</h4>
                      </div>
                      <div className="services-detials-desc">
                        {/* <p>Functionalities continually to prospective intellec</p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-6 mt-2">
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
                        <h4> Efficient Records Handling </h4>
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
                        <h4>Reduced Risk</h4>
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
                        <h4>Saves Time</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content">
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Adherence to Regulatory Requirements: Compliance
                        Automation
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Compliance Automation</b> is vital for ensuring your
                        business adheres to regulatory requirements. At Nexone
                        Tech, we specialize in automating compliance checks,
                        record-keeping, and reporting, significantly reducing
                        the risk of non-compliance. Our approach simplifies the
                        complex task of staying compliant with evolving
                        regulations.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Efficient Records Management: Records Storage and
                        Retrieval
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Records Storage and Retrieval</b> is made more
                        efficient through Nexone Tech's low-code solutions. We
                        offer efficient methods for storing and retrieving
                        records, ensuring easy access and reducing
                        administrative overhead. Our solutions empower your
                        organization to maintain organized records while
                        minimizing the time and effort required.
                      </p>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Enhance Your Compliance and Records Management with Nexone
                      Tech
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      When you partner with Nexone Tech Private Limited for
                      Compliance and Records Management, you're partnering with
                      a team dedicated to strengthening your organization's
                      compliance efforts and streamlining records management.
                    </p>
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
                        <span>Consulting Results</span>
                      </div>
                      <div className="widget-service-details-icon">
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Compliance Automation </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Records Storage and Retrieval </span>
                        </p>
                        {/* <p>
                      <i className="bi bi-check-lg" />{" "}
                      <span>
                        {" "}
                        Learn About Data Import and Export Automation
                      </span>
                    </p>
                    <p>
                      <i className="bi bi-check-lg" />{" "}
                      <span> Explore Reporting and Data Visualization</span>
                    </p> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>
                          Ready to Strengthen Your Compliance Efforts?
                        </span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss how Compliance Automation
                          and Records Management can benefit your organization
                          or have questions, our team is here to assist you.
                          Contact us today to initiate the conversation.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-lg-4 col-sm-6">
          <div className="service-work-process-box">
            <div className="service-work-process-number">
              <span>01</span>
            </div>

            <div className="service-work-process-desc">
              <p>Idea Assessment and Market Analysis</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-work-process-box">
            <div className="service-work-process-number">
              <span>02</span>
            </div>

            <div className="service-work-process-desc">
              <p>Business Plan Development</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="service-work-process-box">
            <div className="service-work-process-number">
              <span>03</span>
            </div>

            <div className="service-work-process-desc">
              <p>Implementation and Support</p>
            </div>
          </div>
        </div> */}
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
                        <Link legacyBehavior href="workflow-automation.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 1,
                              })
                            }
                          >
                            {" "}
                            Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="data-entry-processing-automation.html"
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
                            Data Entry and Processing Automation
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="document-management-workflow-automation.html"
                        >
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 3,
                              })
                            }
                          >
                            {" "}
                            Document Management and Workflow Automation{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="compliance-records-management.html"
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
                            Compliance and Records Management{" "}
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
