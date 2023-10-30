import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 4 });
  const [crumbs, setCrumbs] = useState([
    "Home",
    "services",
    "Reporting and Analytics Tools",
    "Embedded Analytics in Applications ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      {/* <Breadcumb1
        pageName={"Embedded Analytics in Applications"}
        title={"Embedded Analytics in Applications"}
      /> */}
      <Breadcumb2
        pageName={"Embedded Analytics in Applications "}
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
                            Dashboard Design and Creation: Visualize Data with
                            Ease
                          </h2>
                          <p style={{ textAlign: "justify" }}>
                            In today's data-driven world, the ability to turn
                            complex datasets into actionable insights is a
                            critical advantage for IT professionals. Nexone
                            Tech's Dashboard Design and Creation tools, powered
                            by no-code and low-code solutions, revolutionize the
                            way data is visualized and leveraged.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            No-Code Simplicity, Low-Code Flexibility
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            Our innovative approach combines the simplicity of
                            no-code with the flexibility of low-code to bring
                            you a dashboard design experience like no other.
                          </p>
                          <b>No-Code Interface</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            With our intuitive no-code interface, you don't need
                            to be a coding expert to create stunning dashboards.
                            The drag-and-drop functionality allows you to
                            arrange elements effortlessly. This means that even
                            if you're new to dashboard design, you can get
                            started quickly and produce professional results.
                          </p>
                          <b>Low-Code Customization</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For those who require more advanced and tailored
                            dashboards, our low-code options offer customization
                            capabilities. Dive into the code when needed to
                            implement complex features or unique design
                            elements. This flexibility ensures that your
                            dashboards can meet even the most specific
                            requirements.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Unlock the Power of Data Visualization
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            Our Dashboard Design and Creation tools enable IT
                            teams to:
                          </p>
                          <b>Monitor System Performance</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Keep a close eye on your IT systems and applications
                            with real-time performance dashboards. Identify
                            bottlenecks, track resource utilization, and ensure
                            optimal system health.
                          </p>
                          <b>Track Key Metrics</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Whether it's business KPIs or IT performance
                            metrics, our tools let you build dashboards that
                            track the numbers that matter most. Visualize
                            trends, set thresholds, and receive alerts when
                            important metrics deviate from the norm.
                          </p>
                          <b>Visualize Data Trends</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Turn data into insights by creating visual
                            representations of trends and patterns. Identify
                            correlations, anomalies, and opportunities for
                            optimization.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Dashboard Design and Creation?
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
                        <h4>Accessibility</h4>
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
                        <h4> Actionable Insights</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          At Nexone Tech, we empower IT professionals to
                          visualize data with ease. Our Dashboard Design and
                          Creation tools simplify the process of turning data
                          into insights, offering both no-code simplicity and
                          low-code flexibility. Whether you're monitoring system
                          performance, tracking key metrics, or visualizing data
                          trends, our tools give you the power to harness the
                          potential of your data effortlessly.
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
                          href="dashboard-design-creation.html"
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
                            Dashboard Design and Creation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="real-time-data-analytics.html"
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
                            Real-time Data Analytics
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="interactive-data-visualization.html"
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
                            Interactive Data Visualization{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="embedded-analytics-in-applications.html"
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
                            Embedded Analytics in Applications{" "}
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
                            Real-time Data Analytics: Act on Insights as They
                            Happen
                          </h2>
                          <p style={{ textAlign: "justify" }}>
                            In today's fast-paced business environment, having
                            access to real-time data analytics can mean the
                            difference between seizing opportunities and
                            reacting too late. Nexone Tech's Real-time Data
                            Analytics solutions, driven by no-code and low-code
                            capabilities, put the power of instant insights into
                            the hands of IT professionals.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Real-Time Insights, No-Code Simplicity, Low-Code
                            Flexibility
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            Our Real-time Data Analytics solutions combine the
                            immediacy of real-time insights with the simplicity
                            of no-code and the flexibility of low-code.
                          </p>
                          <b>No-Code Interface</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our intuitive no-code interface provides a wide
                            range of predefined analytical functions. Whether
                            it's tracking KPIs, monitoring system performance,
                            or detecting anomalies, you can create real-time
                            analytics dashboards without the need for extensive
                            coding.
                          </p>
                          <b>Low-Code Customization</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For those who require tailored and complex
                            analytics, our low-code options allow you to build
                            custom analytics functions. Dive into the code to
                            implement specialized calculations or unique data
                            processing.
                          </p>
                        </div>
                      </div>
                    </div>

                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Real-Time Data Analytics?
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
                        <h4> No-Code Simplicity</h4>
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
                        <h4> Low-Code Flexibility </h4>
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
                        <h4>Proactive Insights</h4>
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
                        <h4> Immediate Action</h4>
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
                          <span> Instant Insights </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Anomaly Detection </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> On-the-Fly Decision-Making </span>
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Nexone Tech's Real-time Data Analytics solutions
                          empower IT professionals to act on insights as they
                          happen. With a combination of no-code simplicity and
                          low-code flexibility, you can monitor critical
                          metrics, detect anomalies, and make informed decisions
                          in real-time. Stay ahead of the competition and drive
                          proactive decision-making with our real-time analytics
                          capabilities.
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
                          href="dashboard-design-creation.html"
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
                            Dashboard Design and Creation{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="real-time-data-analytics.html"
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
                            Real-time Data Analytics
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="interactive-data-visualization.html"
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
                            Interactive Data Visualization{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="embedded-analytics-in-applications.html"
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
                            Embedded Analytics in Applications{" "}
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
                            Interactive Data Visualization: Explore and Present
                            Data Visually
                          </h2>
                          <p style={{ textAlign: "justify" }}>
                            In the realm of data-driven decision-making, the
                            ability to explore and present data visually is a
                            game-changer. Nexone Tech's Interactive Data
                            Visualization tools, powered by both no-code
                            simplicity and low-code flexibility, redefine how IT
                            professionals interact with data.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Visualize Data Effortlessly
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            Our Interactive Data Visualization solutions make
                            data exploration and presentation a breeze:
                          </p>
                          <b>No-Code Templates</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our no-code interface provides access to a range of
                            pre-built templates for common visualizations.
                            Whether it's pie charts, bar graphs, or heatmaps,
                            you can quickly create compelling visual
                            representations of your data without any coding.
                          </p>
                          <b>Low-Code Customization</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For those who require unique and intricate
                            visualizations, our low-code options offer the
                            flexibility to design custom visualizations. You can
                            dive into the code to craft bespoke charts and
                            graphs tailored to your specific data and
                            requirements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Interactive Data Visualization?
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
                        <h4> No-Code Simplicity</h4>
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
                        <h4> Low-Code Flexibility </h4>
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
                        <h4>Enhanced Understanding</h4>
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
                        <h4> Effective Communication</h4>
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
                          <span> Deeper Insights </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Effective Communication</span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> On-the-Fly Exploration </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Customized Visuals </span>
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Nexone Tech's Interactive Data Visualization tools
                          empower IT professionals to explore and present data
                          visually with ease. Whether you're looking for quick
                          and effective visualizations using no-code templates
                          or want to craft custom visuals with low-code
                          flexibility, our solutions are designed to enhance
                          data exploration, communication, and decision-making.
                          Unlock the potential of your data through interactive
                          visualizations with Nexone Tech.
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
                          href="dashboard-design-creation.html"
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
                            Dashboard Design and Creation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="real-time-data-analytics.html"
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
                            Real-time Data Analytics
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="interactive-data-visualization.html"
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
                            Interactive Data Visualization{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="embedded-analytics-in-applications.html"
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
                            Embedded Analytics in Applications{" "}
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
                          src="assets/images/resource/orags/embedded-analytics-service.svg"
                          alt="Embedded Analytics Service"
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Embedded Analytics in Applications: Seamlessly
                            Integrate Insights
                          </h2>
                          <p style={{ textAlign: "justify" }}>
                            In the digital age, access to data-driven insights
                            is vital for making informed decisions. Nexone
                            Tech's Embedded Analytics solutions, driven by both
                            no-code simplicity and low-code flexibility, empower
                            IT teams to seamlessly integrate analytics directly
                            into their applications.
                          </p>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px", color: "black" }}>
                            Unlock the Power of Embedded Analytics
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            With our Embedded Analytics solutions, you can
                            effortlessly integrate insights into your
                            applications:
                          </p>
                          <b>No-Code Widgets</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            Our no-code interface provides pre-built widgets for
                            common analytics functions. These widgets are ready
                            to use, requiring no coding expertise. You can
                            easily add charts, graphs, or reports to your
                            applications.
                          </p>
                          <b>Low-Code Customization</b>
                          <p style={{ textAlign: "justify" }}>
                            <i class="bii fas fa-check"></i>
                            For those who need tailored analytics, our low-code
                            options provide the flexibility to integrate custom
                            analytics seamlessly. You can dive into the code to
                            create advanced analytics features that match your
                            specific application requirements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Embedded Analytics?
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
                        <h4> No-Code Simplicity</h4>
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
                        <h4> Low-Code Flexibility </h4>
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
                        <h4>Real-Time Insights</h4>
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
                        <h4> Enhanced User Experience</h4>
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
                          <span> Real-Time Decision-Making </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Enhanced User Experience</span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Actionable Insights </span>
                        </p>{" "}
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Customized Analytics </span>
                        </p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          Nexone Tech's Embedded Analytics solutions empower IT
                          professionals to seamlessly integrate actionable
                          insights directly into their applications. Whether you
                          prefer quick and easy integration with no-code widgets
                          or want to develop custom analytics with low-code
                          flexibility, our solutions are designed to enhance
                          user experiences and enable data-driven
                          decision-making. Elevate your applications with
                          Embedded Analytics from Nexone Tech.
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
                          href="dashboard-design-creation.html"
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
                            Dashboard Design and Creation{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="real-time-data-analytics.html"
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
                            Real-time Data Analytics
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="interactive-data-visualization.html"
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
                            Interactive Data Visualization{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="embedded-analytics-in-applications.html"
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
                            Embedded Analytics in Applications{" "}
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
