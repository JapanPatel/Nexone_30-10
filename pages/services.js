import Breadcumb2 from "@/src/components/Breadcumb2";
import LogoSlider from "@/src/components/LogoSlider";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
const Service = () => {
  const [service, setService] = useState({ ser: 1 });
  const [crumbs, setCrumbs] = useState(["Home", "services"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      {/* <Breadcumb pageName={"Our Service"} title={"Services"} /> */}
      <Breadcumb2
        pageName={"Our Consulting Services"}
        crumbs={crumbs}
        selected={selected}
      />
      {/*==================================================*/}
      {/* Start consen service Area */}
      {/*==================================================*/}
      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2>
                  {" "}
                  Our extensive range of
                  <br /> consulting <span> Services </span>{" "}
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/casestudies.html">
                  <a>
                    {" "}
                    Case Studies <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/serlogo/1.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Application Development </h2>
                  </div>
                  <div className="service-number">
                    <h2> 01 </h2>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      We help businesses achieve operational excellence, drive
                      sustainable growth, and thrive synergistically.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/application-development.html">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/serlogo/2.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Business Process Automation </h2>
                  </div>
                  <div className="service-number">
                    <h2> 02 </h2>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      We are committed to helping businesses achieve their goals
                      through strategic planning and execution.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/business-process-automation.html"
                    >
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/serlogo/3.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Data Integration Solutions </h2>
                  </div>
                  <div className="service-number">
                    <h2> 03 </h2>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      We help businesses optimize their operations, enhance
                      customer experience, and maximize profitability.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link
                      legacyBehavior
                      href="/data-integration-solutions.html"
                    >
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 p-0">
              <div className="dreamit-service-box">
                <div className="service-box-inner">
                  <div className="em-service-icon">
                    <img src="assets/images/resource/serlogo/4.png" alt />
                  </div>
                  <div className="em-service-title">
                    <h2> Reporting and Analytics Tools </h2>
                  </div>
                  <div className="service-number">
                    <h2> 04 </h2>
                  </div>
                  <div className="em-service-text">
                    <p>
                      {" "}
                      We provide comprehensive functional consulting services to
                      businesses of all sizes, fostering growth and innovation.{" "}
                    </p>
                  </div>
                  <div className="service-button">
                    <Link legacyBehavior href="/reporting-analytics-tools.html">
                      <a>
                        {" "}
                        Read More <i className="bi bi-plus" />{" "}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three upper sr-page">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb mr-lg-4">
                <img
                  src="assets/images/about/it-sector-codup.png"
                  alt="IT sector"
                />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shpe.png" alt />
                </div>
                <div className="about-shape-thumb3 bounce-animate4">
                  <img src="assets/images/about/about-shape4.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <p className="comtitle"> Enabler </p>
                <h2>
                  {" "}
                  Nurturing Innovation <br />
                  in the <span>IT sector</span>{" "}
                </h2>

                <p className="about-text1">
                  {" "}
                  Nexone stands as a pillar of support for IT startups,
                  fostering innovation in Emerging Ventures, and providing
                  guidance to Corporate Enterprises.{" "}
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Empowering new IT Start-Ups</span>
                    </li>
                    <br />
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Nurturing Emerging Start-Ups </span>
                    </li>
                    <br />
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span> Supporting Corporate Enterprises </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="about-button">
                <Link legacyBehavior href="/about.html">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start call do action Section */}
      {/*===================================================*/}
      <div className="call-do-action-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="col-lg-12">
                <div className="consen-section-title white upper text-center mb-40">
                  <p className="comtitle"> Let's Connect</p>
                  <h2>
                    Reach out to us today at <span>Nexone</span> <br />
                    and let's collaborate to achieve
                    <br />
                    your business success together
                  </h2>
                </div>
                <div className="new-button text-center">
                  <Link legacyBehavior href="/contact.html">
                    <a>Contact US Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area style-two">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-12">
              <div className="consen-section-title pb-50 text-center upper">
                <p className="comtitle"> Elevation </p>
                <h2> Nexone Technologies: </h2>
                <h2>
                  Your Pathway to <br /> <span>IT</span> and{" "}
                  <span> Software </span>Success{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box" style={{ height: "90%" }}>
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb1">
                      <img src="assets/images/resource/10.png" alt />
                    </div>
                    <div className="quote-title">
                      <span>
                        Tailored Consulting Solutions for the IT and Software
                        Industry
                      </span>
                      {/* <p>UI Designer</p> */}
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      At Nexone Technologies, our expertise lies in providing
                      consulting services exclusively designed for the IT and
                      software sector. We understand the unique challenges and
                      opportunities that businesses face in this dynamic
                      industry, and our tailored solutions are crafted to
                      address specific needs and objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box" style={{ height: "90%" }}>
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb1">
                      <img src="assets/images/resource/11.png" alt />
                    </div>
                    <div className="quote-title">
                      <span>
                        {" "}
                        Measurable and Sustainable Outcomes for Your Journey
                      </span>
                      {/* <p> CEO, Founder </p> */}
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      Our consulting approach centers on delivering measurable
                      and sustainable outcomes. Whether you're a new start-up
                      seeking guidance, an emerging venture aiming for rapid
                      growth, or a corporate enterprise looking to optimize
                      performance, our solutions are designed to drive tangible
                      results at every stage of your business journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box" style={{ height: "90%" }}>
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb1">
                      <img src="assets/images/resource/12.png" alt />
                    </div>
                    <div className="quote-title">
                      <span>
                        {" "}
                        Empowering Organizations with Comprehensive Solutions{" "}
                      </span>
                      {/* <p> MH Manager </p> */}
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      We take pride in offering a comprehensive suite of
                      consulting solutions that empower organizations across
                      different stages of development. Our experienced
                      consultants provide guidance, strategies, and support,
                      ensuring that you can navigate the complexities of the
                      industry with confidence and achieve your goals of
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* testi shape */}
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Brand Section */}
      {/*===================================================*/}
      <div className="brand-section srv-page">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Service;
