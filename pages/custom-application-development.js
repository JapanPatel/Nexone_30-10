import Breadcumb1 from "@/src/components/Breadcumb1";
import Breadcrumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetails = () => {
  const [service, setService] = useState({ ser: 1 });
  const [crumbs, setCrumbs] = useState([
    "Home",
    "services",
    "Application Development",
    "Custom Application Development ",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      <Breadcrumb2
        pageName={"Custom Application Development "}
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
                          src="assets/images/resource/orags/custom-application-development.svg"
                          alt="Custom Application Development"
                        />
                      </div>
                      <div className="service-details-content">
                        <div className="service-page-title">
                          <h2 style={{ fontSize: "25px" }}>
                            {" "}
                            Custom Application Development with Low-Code Agility
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Transforming Your Unique Ideas into Powerful
                            Applications
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            In today's fast-paced business landscape, staying
                            ahead requires innovative and customized software
                            solutions that align perfectly with your unique
                            needs. At Nexone Tech Private Limited, we bring your
                            vision to life through our expertise in Custom
                            Application Development, enhanced with the agility
                            of low-code and no-code solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Custom Application Development?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          src="assets/images/resource/details-icon1.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Expertise in Customization </h4>
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
                          src="assets/images/resource/details-icon2.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Agility with Low-Code </h4>
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
                          style={{ marginTop: "-10px" }}
                          src="assets/images/resource/details-icon3.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4>Scalability at Heart </h4>
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
                          style={{ marginTop: "-10px" }}
                          src="assets/images/resource/details-icon4.png"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Client-Centric Approach </h4>
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
                        Embracing the Future: Rapid Application Prototyping
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Rapid Application Prototyping</b> is where your
                        vision begins to take shape. Our no-code rapid
                        prototyping process accelerates the transformation of
                        your ideas into tangible, interactive prototypes. This
                        critical step allows you to visualize your application's
                        concept swiftly and efficiently, making it easier to
                        gather feedback and iterate on design. With Nexone Tech,
                        you can witness your vision come to life quickly,
                        enabling a collaborative approach that ensures the end
                        product aligns perfectly with your objectives.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Crafting Tailor-Made Solutions: Custom Application
                        Building
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Custom Application Building</b> is where your unique
                        business needs are at the center of our development
                        process. We specialize in crafting tailor-made
                        applications that precisely match your requirements. Our
                        approach blends traditional custom coding with the
                        efficiency of low-code, delivering solutions that are
                        not only powerful but also flexible and adaptable. With
                        Nexone Tech, your application is designed to grow with
                        your business, ensuring that it remains a valuable asset
                        well into the future.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Breathing New Life into Legacy Systems: Legacy System
                        Modernization
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Legacy System Modernization</b> is about revitalizing
                        your existing systems, enhancing their functionality,
                        and transforming the user experience. We understand the
                        challenges of working with legacy systems, and our
                        low-code approach is the key to overcoming them. Our
                        focus is on front-end modernization, which means we
                        improve the user interface and user experience without
                        requiring an extensive overhaul of the backend. This
                        approach not only saves time and resources but also
                        ensures a smoother transition to modernized systems.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Seamless Integration for Enhanced Efficiency: Enterprise
                        App Integration
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Enterprise App Integration</b> is where we seamlessly
                        connect your various enterprise applications, automating
                        data flow, and optimizing your business processes. Our
                        low-code integration solutions simplify the complex task
                        of integrating disparate systems, saving you time and
                        reducing the risk of errors associated with manual data
                        transfer. With Nexone Tech, you can improve the
                        efficiency of your operations by automating routine
                        tasks, ensuring that your applications work together
                        harmoniously.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                    <div className="service-details-thumb">
                      <img
                        src="assets/images/resource/orags/key-features-app-development.png"
                        alt="Key Features Application Development"
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
                          <span> Explore Rapid Application Prototyping</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Custom Application Building </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Legacy System Modernization</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Enterprise App Integration</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Transform Your Ideas into Reality?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          When you partner with Nexone Tech Private Limited for
                          Custom Application Development, you're partnering with
                          a team dedicated to transforming your unique ideas
                          into powerful, efficient, and scalable solutions. We
                          invite you to explore how our Custom Application
                          Development services can empower your business.
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
                        <Link
                          legacyBehavior
                          href="custom-application-development.html"
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
                            Custom Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="mobile-app-development.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Mobile App Development
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="web-application-development.html"
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
                            Web Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="cloud-based-application-development.html"
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
                            Cloud-Based Application Development{" "}
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
                            Mobile App Development for the Future
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Creating Seamless Mobile Experiences with Low-Code
                            Solutions
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            In a world driven by mobile technology, your
                            business's success often hinges on the quality and
                            efficiency of your mobile applications. Nexone Tech
                            Private Limited is your partner in Mobile App
                            Development, combining innovative thinking with the
                            power of low-code and no-code solutions to build
                            apps that meet the demands of the future.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Mobile App Development?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Cross-Platform Expertise </h4>
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
                        <h4> Native Excellence </h4>
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
                        <h4>Testing Efficiency </h4>
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
                        <h4> Staying Current </h4>
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
                        Reaching Across Platforms: Cross-Platform Mobile App
                        Development
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Cross-Platform Mobile App Development </b> is the
                        bridge to reaching wider audiences. We recognize the
                        importance of running applications harmoniously on both
                        iOS and Android devices. Our cross-platform low-code
                        development approach allows you to expand your user base
                        without doubling development efforts. With Nexone Tech,
                        your applications will be accessible to a broader
                        audience, all while benefiting from the efficiency and
                        flexibility of low-code solutions.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Elevating User Experience: Native Mobile App Development
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Native Mobile App Development </b> is the pinnacle of
                        user experience. Native apps are known for their smooth
                        performance and seamless integration with the device's
                        features. However, this doesn't mean sacrificing
                        efficiency. At Nexone Tech, we excel in crafting native
                        apps that provide exceptional user experiences while
                        harnessing the speed and convenience of low-code
                        solutions. This approach ensures that your apps not only
                        impress users but also reach the market faster.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Quality Assurance and Rapid Deployment: Mobile App
                        Testing and Deployment
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Mobile App Testing and Deployment </b> are crucial
                        phases in the mobile app development journey. Ensuring
                        your apps are error-free and rapidly deployed is
                        essential for success. Our approach utilizes automated
                        testing driven by low-code automation tools. This
                        accelerates the testing process, reduces the likelihood
                        of errors slipping through, and expedites the deployment
                        of your mobile apps. Nexone Tech is dedicated to
                        ensuring your applications are reliable and ready for
                        your audience.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Staying Competitive in a Dynamic Market: Mobile App
                        Maintenance and Updates
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        When you choose Nexone Tech Private Limited for Mobile
                        App Development, you're choosing a partner dedicated to
                        creating high-quality, efficient, and future-proof
                        mobile applications. Explore how our Mobile App
                        Development services can elevate your business in the
                        ever-evolving mobile landscape.
                      </p>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Mobile App Development?
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      When you choose Nexone Tech Private Limited for Mobile App
                      Development, you're choosing a partner dedicated to
                      creating high-quality, efficient, and future-proof mobile
                      applications. Explore how our Mobile App Development
                      services can elevate your business in the ever-evolving
                      mobile landscape.
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
                          <span>
                            {" "}
                            Explore Cross-Platform Mobile App Development
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Native Mobile App Development </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Learn About Mobile App Testing and Deployment
                          </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span>
                            {" "}
                            Explore Mobile App Maintenance and Updates
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Elevate Your Mobile Presence?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss your mobile app development
                          project or have questions, our team is here to assist
                          you. Contact us today to initiate the conversation.
                          This detailed explanation on a separate webpage
                          provides a comprehensive overview of "Mobile App
                          Development for the Future," emphasizing the use of
                          low-code and no-code solutions to create high-quality
                          mobile apps that meet evolving user needs while
                          addressing your target market's specific requirements.
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
                        <Link
                          legacyBehavior
                          href="custom-application-development.html"
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
                            Custom Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="mobile-app-development.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Mobile App Development
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="web-application-development.html"
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
                            Web Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="cloud-based-application-development.html"
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
                            Cloud-Based Application Development{" "}
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
                            Web Application Development with Low-Code Efficiency
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Empowering Your Digital Presence with Low-Code
                            Solutions
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            In today's digital landscape, web applications play
                            a pivotal role in engaging customers and
                            streamlining business operations. At Nexone Tech
                            Private Limited, we bring efficiency and innovation
                            to the forefront of Web Application Development,
                            leveraging the power of low-code and no-code
                            solutions to create user-friendly and robust web
                            experiences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Web Application Development?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Efficiency with Low-Code</h4>
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
                        <h4> Engaging User Interfaces </h4>
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
                        <h4>Reliable Back-Ends </h4>
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
                        <h4> Smooth Operations</h4>
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
                        Visualizing Excellence: Web App Prototyping and Design
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Web App Prototyping and Design</b> is where the
                        blueprint of your web application takes shape. Our
                        low-code prototyping approach enables rapid
                        visualization of your application's user interface. This
                        swift visual representation allows for quicker
                        iterations and valuable feedback, ensuring that your
                        vision aligns seamlessly with the final product. With
                        Nexone Tech, you can witness your web application come
                        to life efficiently and with precision.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Engaging User Experiences: Front-End Development
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Front-End Development</b> is the art of crafting
                        engaging user interfaces and client-side functionality
                        efficiently. We leverage low-code components to
                        accelerate development without compromising quality. Our
                        team excels in designing intuitive, responsive, and
                        visually appealing user interfaces that enhance user
                        experiences. With Nexone Tech, your web application's
                        front-end will captivate your audience while benefiting
                        from the efficiency of low-code solutions.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Robust Foundations: Back-End Development with Low-Code
                        Efficiency
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Back-End Development</b> is where the robust
                        server-side logic and database components are
                        implemented. We harness the power of low-code solutions
                        where applicable to expedite development without
                        sacrificing reliability. Our experts ensure that your
                        web application's back-end is as efficient as it is
                        secure. With Nexone Tech, you can trust that your web
                        application's foundations are built for success,
                        combining flexibility with performance.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Smooth Operations: Web App Testing and Maintenance
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Web App Testing and Maintenance</b> are the
                        cornerstones of ensuring your web applications run
                        smoothly and efficiently. We employ automated testing
                        driven by low-code automation tools to streamline the
                        testing process. This not only reduces the likelihood of
                        errors but also enables quick bug resolution. Nexone
                        Tech is committed to keeping your web applications in
                        top-notch condition, ensuring that they consistently
                        meet user expectations.
                      </p>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Elevate Your Digital Presence with Nexone Tech
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      When you partner with Nexone Tech Private Limited for Web
                      Application Development, you're choosing a partner
                      dedicated to creating efficient, visually appealing, and
                      user-friendly web applications. Explore how our Web
                      Application Development services can elevate your digital
                      presence.
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
                          <span> Explore Web App Prototyping and Design</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Front-End Development </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Learn About Back-End Development</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Web App Testing and Maintenance</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Elevate Your Digital Presence?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss your web application
                          development project or have questions, our team is
                          here to assist you. Contact us today to initiate the
                          conversation. This detailed explanation on a separate
                          webpage provides a comprehensive overview of "Web
                          Application Development with Low-Code Efficiency,"
                          highlighting the use of low-code and no-code solutions
                          to create user-friendly and robust web applications
                          while addressing your target market's specific
                          requirements.
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
                        <Link
                          legacyBehavior
                          href="custom-application-development.html"
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
                            Custom Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="mobile-app-development.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Mobile App Development
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="web-application-development.html"
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
                            Web Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="cloud-based-application-development.html"
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
                            Cloud-Based Application Development{" "}
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
                            Cloud-Based Application Development for Scalability
                          </h2>
                        </div>
                        <div className="serivce-details-desc mt-4">
                          <b style={{ fontSize: "18px" }}>
                            Unleashing the Power of Scalable Cloud Solutions
                            with Low-Code Expertise
                          </b>
                          <p style={{ textAlign: "justify" }}>
                            In a digitally connected world, the ability to scale
                            your applications effortlessly is essential for
                            business growth and success. At Nexone Tech Private
                            Limited, we specialize in Cloud-Based Application
                            Development, harnessing the scalability of cloud
                            environments while optimizing efficiency with
                            low-code and no-code components.
                          </p>
                        </div>
                      </div>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Why Choose Nexone Tech for Cloud-Based Application
                      Development?
                    </b>
                  </div>

                  <div className="col-lg-6 col-sm-6 mt-2">
                    <div
                      className="service-details-box"
                      style={{ width: "100%", height: "85%" }}
                    >
                      <div className="service-details-icon">
                        <img
                          style={{ marginTop: "-14px" }}
                          src="assets/images/resource/details-icon1.jpg"
                          alt
                        />
                      </div>
                      <div className="service-details-title">
                        <h4> Optimized for Scalability</h4>
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
                        <h4> Simplified Serverless </h4>
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
                        <h4>Efficiency with DevOps </h4>
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
                        <h4> Flexibility with Scalable Solutions</h4>
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
                        Building for the Future: Cloud-Native App Development
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Cloud-Native App Development</b> is where your
                        applications are optimized for cloud environments,
                        ensuring scalability and efficiency. We embrace the
                        power of low-code and no-code components to create
                        cloud-native applications that adapt seamlessly to
                        varying workloads. With Nexone Tech, your applications
                        are built with scalability at their core, ready to grow
                        with your business.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Simplified and Efficient: Serverless Architecture with
                        Low-Code
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Serverless Architecture</b> simplifies application
                        deployment by abstracting server management. Our
                        expertise in serverless function design, driven by
                        low-code solutions, streamlines the development process.
                        At Nexone Tech, we make serverless implementation
                        accessible and efficient, ensuring that your
                        applications are ready to respond to demand without the
                        complexity of traditional server management.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Efficiency Meets Continuous Integration: DevOps for
                        Cloud Apps
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>DevOps for Cloud-Based Applications</b> is the key to
                        streamlining deployment, scaling, and monitoring. Our
                        approach integrates DevOps principles with low-code
                        solutions, ensuring efficient and continuous delivery.
                        With Nexone Tech, you can embrace DevOps for your
                        cloud-based applications, reducing time to market and
                        enhancing overall operational efficiency.
                      </p>
                      <b
                        className="mt-40 mb-0"
                        style={{ color: "black", fontSize: "18px" }}
                      >
                        <i class="bii fas fa-check"></i>
                        Adapt and Conquer: Scalable Cloud Solutions with
                        Low-Code Modules
                      </b>
                      <p style={{ textAlign: "justify" }}>
                        <b>Scalable Cloud Solutions</b> empower your
                        applications to adapt effortlessly to varying workloads.
                        We leverage low-code modules and interfaces to ensure
                        your applications can scale up or down as needed. Nexone
                        Tech provides you with the flexibility to respond to
                        changing demands without extensive redevelopment.
                      </p>
                    </div>
                    <b style={{ fontSize: "18px" }}>
                      Unlock the Full Potential of Scalable Cloud Solutions
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      When you partner with Nexone Tech Private Limited for
                      Cloud-Based Application Development, you're partnering
                      with a team dedicated to unlocking the full potential of
                      scalable cloud solutions. Explore how our Cloud-Based
                      Application Development services can empower your
                      business.
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
                          <span> Explore Cloud-Native App Development</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Discover Serverless Architecture </span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Learn About DevOps for Cloud Apps</span>
                        </p>
                        <p>
                          <i className="bi bi-check-lg" />{" "}
                          <span> Explore Scalable Cloud Solutions</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Scale Your Digital Presence?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss your cloud-based
                          application development project or have questions, our
                          team is here to assist you. Contact us today to
                          initiate the conversation.
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
                        <Link
                          legacyBehavior
                          href="custom-application-development.html"
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
                            Custom Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link legacyBehavior href="mobile-app-development.html">
                          <a
                            onClick={() =>
                              setService({
                                ...service,
                                ["ser"]: 2,
                              })
                            }
                          >
                            {" "}
                            Mobile App Development
                          </a>
                        </Link>
                      </li>
                      <li style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="web-application-development.html"
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
                            Web Application Development{" "}
                          </a>
                        </Link>
                      </li>
                      <li className="active" style={{ fontSize: "15px" }}>
                        <Link
                          legacyBehavior
                          href="cloud-based-application-development.html"
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
                            Cloud-Based Application Development{" "}
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
