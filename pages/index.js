import Counter from "@/src/components/Counter";
import React, { useState, useEffect } from "react";
import Breadcumb2 from "@/src/components/Breadcumb2";
import Faqs from "@/src/components/Faqs";
import ProgressBar from "@/src/components/ProgressBar";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider, brandListProps2 } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Bot from "./Bot";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const CaseStudies = dynamic(
  () => import("@/src/components/isotope/CaseStudies"),
  {
    ssr: false,
  }
);
const Landing1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const Mname = e.target.firstName.value;
    const Email = e.target.email.value;
    const Fon = e.target.phone.value;
    const Web = e.target.lastName.value;
    const YourMessage = e.target.yourMessage.value;

    if (Mname.trim() == "") {
      toast.error("Please Enter Your Name");
      return false;
    }

    var reg = /^\S+@\S+\.\S+$/;
    if (Email.trim() == "") {
      toast.error("Email must be filled out", "error");
      return false;
    } else if (reg.test(Email)) {
    } else {
      toast.error("Please enter valid email", "error");
      return false;
    }

    var regex = /^[1-9]\d{9}$/;
    if (Fon.trim() == "") {
      toast.error("Phone Number must be filled out", "error");
      return false;
    } else if (regex.test(Fon)) {
    } else {
      toast.error("Please enter a valid 10 digit contact number", "error");
      return false;
    }
    if (Web.trim() == "") {
      toast.error("Please Enter Your Company Name");
      return false;
    }

    if (YourMessage == "") {
      toast.error("Message must be filled out", "error");
      return false;
    }
    toast.success("Message send sucessfully");

    const firstName = e.target.firstName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const lastName = e.target.lastName.value;
    const yourMessage = e.target.yourMessage.value;

    let formData = {
      firstName: firstName,
      email: email,
      phone: phone,
      lastName: lastName,
      yourMessage: yourMessage,
    };

    axios
      .post(
        "https://api.codecolonies.com/api/CodupMail/CodupSendMail",
        formData
      )

      .then((response) => {
        if (response != null && response.data != null) {
          if (response.data.Success) {
            console.log(response.data.message);
          } else {
            console.log(response.data.message);
          }
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout header={4}>
      <div className="slider-area slider2 d-flex align-items-center" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="slider-content">
                <h1 style={{ color: "white" }}>
                  {" "}
                  Crafting the <br />
                  <span>Codeless</span> Future{" "}
                </h1>{" "}
                <p>
                  Nexone is on a relentless mission to revolutionize the tech
                  industry, driving innovation, and simplifying digital
                  transformation through its groundbreaking low-code and no-code
                  solutions
                </p>
              </div>
              <div className="slider-button mt-5">
                <Link legacyBehavior href="/service.html">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> Discover More{" "}
                  </a>
                </Link>
                <Bot />
              </div>
            </div>
            {/* slider shape */}
            <div className="slider-shape">
              <div className="slider-shape-thumb2">
                <img src="assets/images/slider/shape2.png" alt="" />
              </div>
              <div className="slider-shape-thumb4">
                <img src="assets/images/slider/shape3.png" alt="" />
              </div>
              <div className="slider-shape-thumb5 dance">
                <img src="assets/images/slider/circle1.png" alt="" />
              </div>
              <div className="slider-shape-thumb6 bounce-animate">
                <img src="assets/images/slider/circle2.svg" alt="" />
              </div>
              <div className="slider-shape-thumb7 bounce-animate2">
                <img src="assets/images/slider/circle3.svg" alt="" />
              </div>
              <div className="slider-shape-thumb8 bounce-animate3">
                <img src="assets/images/slider/white-dot.png" alt="" />
              </div>
              <div className="slider-shape-thumb9 ">
                <img src="assets/images/slider/line.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className="feature-area">
        <div className="container">
          <div className="row feature-bg">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/resource/main.png" alt="" />
                  </div>
                  <div className="feature-title">
                    <h3>
                      {" "}
                      White Label <br />
                      Solutions{" "}
                    </h3>
                  </div>
                  <div className="feature-text">
                    <p>
                      {" "}
                      Under this model, Nexone provides its low-code and no-code
                      solutions to IT companies, allowing them to rebrand and
                      resell these products as their own.{" "}
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <span> Embark</span>
                    <p className="small"> Empowering </p>
                  </div>
                  <div className="feature-back-icon">
                    <a href="details.html">+</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box uppp-1">
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/resource/main2.png" alt="" />
                  </div>
                  <div className="feature-title">
                    <h3> Consulting and Implementation Services </h3>
                  </div>
                  <div className="feature-text">
                    <p>
                      {" "}
                      Nexone extends its expertise through consulting services
                      to help IT companies identify opportunities for deploying
                      low-code and no-code solutions.{" "}
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <span> Establish</span>
                    <p className="small"> Nurturing </p>
                  </div>
                  <div className="feature-back-icon">
                    <a href="details.html">+</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box uppp-1">
                <div className="feature-box-inner">
                  <div className="feature-icon1">
                    <img src="assets/images/resource/main3.png" alt="" />
                  </div>
                  <div className="feature-title">
                    <h3> Custom Development and Integration </h3>
                  </div>
                  <div className="feature-text">
                    <p>
                      {" "}
                      Nexone collaborates closely with IT companies on custom
                      development projects that demand the prowess of low-code
                      or no-code solutions.{" "}
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <span> Elevate </span>
                    <p className="small"> Supporting </p>
                  </div>
                  <div className="feature-back-icon">
                    <a href="details.html">+</a>
                  </div>
                </div>
              </div>
            </div>
            {/* feature shape */}
            <div className="feature-shape bounce-animate2">
              <img
                src="assets/images/resource/all-shape4.png"
                alt="all-shape4"
              />
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb mr-lg-4">
                <img src="assets/images/about/our-story.svg" alt="Our Story" />
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
                <p className="comtitle"> Our Story </p>
                <h2> Nexone: A Journey Defined by Innovation </h2>
                {/* <h2>
                  {" "}
                  Over 2000+ <span> Companies </span>
                </h2> */}
                <p className="about-text1" style={{ textAlign: "justify" }}>
                  {" "}
                  Nexone's remarkable journey began over twelve years ago with a
                  pioneering mission: to lead the charge in the low-code,
                  no-code revolution. Our founders envisioned a world where
                  technology would empower businesses without the need for
                  complex coding. Since those early days, we've been on a
                  relentless quest to turn this vision into reality.{" "}
                </p>
                <p className="about-text1" style={{ textAlign: "justify" }}>
                  {" "}
                  Our history is marked by innovation, collaboration, and a
                  steadfast commitment to simplifying digital transformation.
                  Today, Nexone proudly stands as a trailblazer in the low-code,
                  no-code landscape, shaping the future of IT solutions one
                  breakthrough at a time.{" "}
                </p>
              </div>

              {/* progress bar */}
              <div className=" progress-box ">
                <ProgressBar value1={9.5} />

                <div className="circle-progress-title">
                  <span>
                    {" "}
                    Clients <br />
                    Retention{" "}
                  </span>
                </div>
                <div className="extra-progress">
                  <ProgressBar value1={9.5} />
                  <div className="circle-progress-title">
                    <span>
                      {" "}
                      Clients <br /> Satisfaction{" "}
                    </span>
                  </div>
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

      <div className="service-area">
        <div className="container">
          <div className="row align-items-center mb-90">
            <div className="col-lg-7 col-md-8 pl-0">
              <div className="consen-section-title mobile-center">
                <h2>
                  {" "}
                  Our comprehensive <br />
                  <span>solution</span> suites
                </h2>{" "}
              </div>
            </div>
            <div className="col-lg-5 col-md-4">
              <div className="consen-button text-right">
                <Link legacyBehavior href="/services.html">
                  <a>
                    {" "}
                    All Services <i className="bi bi-plus" />{" "}
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
                    <h2> Business Process Automation</h2>
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
                    <h2> Data Integration Solutions</h2>
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
                    <h2> Reporting and Analytics Tools</h2>
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
      {/* End consen feature Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="why-choose-us-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consen-section-title">
                <p className="comtitle">Why Choose Us? </p>
                <h2 style={{ fontSize: "30px" }}>
                  {" "}
                  Experience Nexone's Unmatched <span>Potential</span> and{" "}
                  <span>Innovation</span>
                </h2>
                <p className="choose-text1">
                  {" "}
                  Experience excellence through Nexone's no-code, low-code
                  mastery, and ignite unparalleled efficiency and innovation.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <img src="assets/images/feature/1.svg" />

                    <span>
                      {" "}
                      <b>Nurture | Navigate | Next-generation</b>{" "}
                    </span>
                  </li>
                  <li>
                    <img src="assets/images/feature/2.svg" />
                    <span>
                      {" "}
                      <b>Empower | Efficiency | Elevate</b>{" "}
                    </span>
                  </li>
                  <li>
                    <img src="assets/images/feature/3.svg" />
                    <span>
                      {" "}
                      <b>eXperience | eXcellence | eXpertise</b>
                    </span>
                  </li>
                  <li>
                    <img src="assets/images/feature/4.svg" />
                    <span>
                      {" "}
                      <b>Optimize | Outstanding | Openness</b>{" "}
                    </span>
                  </li>

                  <li>
                    <img src="assets/images/feature/5.svg" />
                    <span>
                      {" "}
                      <b>Niche | Nuance | Network</b>{" "}
                    </span>
                  </li>

                  <li>
                    <img src="assets/images/feature/6.svg" />
                    <span>
                      {" "}
                      <b>Engage | Exceed | Ecosystem</b>{" "}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link legacyBehavior href="/about.html">
                  <a>
                    {" "}
                    <i className="bi bi-gear" /> More About{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-thumb">
                <img
                  src="assets/images/resource/Why choose us.svg"
                  alt="Consulting Services"
                />
                {/* choose shape thumb */}
                <div className="why-choose-us-image">
                  <div className="why-choose-us-shape-thumb bounce-animate">
                    <img src="assets/images/resource/all-shape2.png" alt />
                  </div>
                  <div className="why-choose-us-shape-thumb2 rotateme">
                    <img src="assets/images/resource/val.svg" alt />
                  </div>
                  <div className="why-choose-us-shape-thumb3 bounce-animate2">
                    <img src="assets/images/resource/case-shape2.png" alt />
                  </div>
                  <div className="why-choose-us-shape-thumb4">
                    <img src="assets/images/about/about-shape4.png" alt />
                  </div>
                </div>
                {/* end choose shape thumb */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50">
                <p className="comtitle"> Testimonials </p>
                <h2>
                  {" "}
                  What they say <br />
                  About <span> Us </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={30} />{" "}
                      </h3>
                      <span>+</span>
                      <p>Satisfied Clients Served by Our Dedicated Team</p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={95} />{" "}
                      </h3>
                      <span>%</span>
                      <p>Client Satisfaction and Positive Feedback </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="testimonial_list owl-carousel"
            >
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Bubble </h4>
                        <p>No-Code Development Platform</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Custom Data Modeling</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Seamless API Integration </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Solid Foundation for Prototyping</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> User-Centric Design</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Advanced Business Logic </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Efficient Prototyping and Testing</span>
                      </p>
                    </div>

                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Zoho </h4>
                        <p>No-Code Low-Code Application Builder</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Flexible Data Modeling</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Custom Workflow Automation </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> User-Friendly Interface</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Customized Data Management</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Enhanced Backend Capabilities </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Community Support and Resources</span>
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/6.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Kissflow </h4>
                        <p>No-Code with the Power of Low-Code</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Templates and Pre-built Apps</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Security Features </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Analytics and Reporting</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Rapid App Development</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Visual Workflow Design </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Collaborative Environment</span>
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/9.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Mendix </h4>
                        <p>Low-Code Development Platform </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Cross-Platform Compatibility</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Version Control </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span>Support and Training</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Seamless Integrations</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Monitoring and Analytics </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Extensive Widget Library</span>
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/2.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Bubble </h4>
                        <p>No-Code Development Platform</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Custom Data Modeling</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Seamless API Integration </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Solid Foundation for Prototyping</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> User-Centric Design</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Advanced Business Logic </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Efficient Prototyping and Testing</span>
                      </p>
                    </div>

                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/3.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Zoho </h4>
                        <p>No-Code Low-Code Application Builder</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Flexible Data Modeling</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Custom Workflow Automation </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> User-Friendly Interface</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Customized Data Management</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Enhanced Backend Capabilities </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Community Support and Resources</span>
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/6.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Kissflow </h4>
                        <p>No-Code with the Power of Low-Code</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Templates and Pre-built Apps</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Security Features </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Analytics and Reporting</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Rapid App Development</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Visual Workflow Design </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Collaborative Environment</span>
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/images/testi/9.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Mendix </h4>
                        <p>Low-Code Development Platform </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Features</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Cross-Platform Compatibility</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Version Control </span>
                      </p>{" "}
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span>Support and Training</span>
                      </p>
                    </div>
                    <div className="em-testimonial-text1">
                      <div className="service-page-title2">
                        <span>Solutions</span>
                      </div>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Seamless Integrations</span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Monitoring and Analytics </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Extensive Widget Library</span>
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className="owl-dots"></div>
            </Swiper>
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
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="case-study-area style-three" id="portfolio">
        <div className="container">
          <CaseStudies />
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Brand starts */}
      <div className="brand-section new-style">
        <div className="container">
          <div className="row">
            <Swiper {...brandListProps2} className="brand-list2 owl-carousel">
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/1.svg" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/2.svg" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/3.svg" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/4.png" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/1.svg" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/2.svg" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/3.svg" alt />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-single-box">
                  <div className="brand-thumb">
                    <img src="assets/images/resource/4.png" alt />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* Brand ends */}
      {/*==================================================*/}
      <div className="process-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-4 pb-lg-5">
                <p className="comtitle"> Value proposition </p>
                <h2>
                  {" "}
                  Tap into the <br />
                  Potential of <span> Rebranding </span>{" "}
                </h2>
              </div>
            </div>
          </div>
          {/* process shape */}
          <div className="process-shape">
            <div className="service-shape">
              <img src="assets/images/resource/all-shape3.png" alt />
            </div>
            <div className="process-shape-thumb bounce-animate2">
              <img src="assets/images/resource/all-shape6.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div className="process-extra-area style-two">
        <div className="container">
          <div className="row justify-content-center process-bg">
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/a.png" alt />
                </div>
                <div className="process-title">
                  <h3>
                    White Label <br />
                    Solutions
                  </h3>
                  <p>Unlock the Potential of Rebranding</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 responsive">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/b.png" alt />
                </div>
                <div className="process-title">
                  <h3> Consulting and Implementation Services </h3>
                  <p>Guiding Your Low-Code and No-Code Journey</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 upper">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/c.png" alt />
                </div>
                <div className="process-title">
                  <h3> Custom Development and Integration</h3>
                  <p>Bespoke Solutions Crafted for You</p>
                </div>
              </div>
            </div>
            <div className="process-shape">
              <div className="process-shape-thumb3 bounce-animate3">
                <img src="assets/images/resource/all-shape2.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-area" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 pl-0">
              {/* Start Accordion */}
              <div className="tab_container">
                <div className="consen-section-title white pb-40 mb-1">
                  <p className="comtitle"> Collaboration </p>
                  <h2>
                    {" "}
                    Let's Start Simplifying IT with Nexone's{" "}
                    <span>Low-Code and No-Code Solutions!</span>
                  </h2>
                </div>
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contract-form-bg">
                <div className="contact-form-title">
                  <h4> Schedule Consultant </h4>
                </div>
                <div className="contact_from">
                  <form onSubmit={handleSubmit} id="dreamit-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="text"
                            name="firstName"
                            placeholder="Name*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your E-Mail*"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <input
                            type="text"
                            name="lastName"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_box mb-20">
                          <textarea
                            name="yourMessage"
                            id="OurMessage"
                            cols={30}
                            rows={10}
                            placeholder="Write a Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="quote_button">
                          <button className="btn" type="submit">
                            {" "}
                            <i className="bi bi-gear" /> Schedule Consultant{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <div className="form-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h3>Get your free consulting session</h3>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="mailto:connect@codup.tech" className="subscribe-icon">
                  <i className="bi bi-envelope" />
                </a>
                <div className="subscribe-title2">
                  <h3> Requirement Submission </h3>
                  <p>
                    {" "}
                    <a
                      href="mailto:consulting@codup.tech"
                      style={{ color: "white" }}
                    >
                      consulting@codup.tech{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </Layout>
  );
};
export default Landing1;
