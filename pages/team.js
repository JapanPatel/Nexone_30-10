import Breadcumb2 from "@/src/components/Breadcumb2";
import ProgressBar1 from "@/src/components/ProgressBar1";
import Layout from "@/src/layout/Layout";
import { brandListProps } from "@/src/sliderProps";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
const Team = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState(1);
  useEffect(() => {}, []);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");
  const [crumbs, setCrumbs] = useState(["Home", "our team"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      {/* <Breadcumb pageName={"Our Team"} title={"Our Team"} /> */}
      <Breadcumb2 pageName={"Our Team"} crumbs={crumbs} selected={selected} />

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area style-three upper1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h5> Teamwork shaping success </h5>
                <h2>
                  {" "}
                  Seasoned <span>advisors</span> and a talented{" "}
                  <span>team</span>{" "}
                  {/* <span> IT and Software companies </span> */}
                </h2>
                <p className="about-text1">
                  {" "}
                  We pride ourselves on our highly experienced advisory board,
                  composed of industry veterans who bring invaluable insights
                  and guidance.{" "}
                </p>
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span>
                        {" "}
                        Our core foundation team, comprising founders,
                        co-founders, chief consultants, and lead counsel,
                        possesses extensive expertise in driving organizational
                        growth and success.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span>
                        {" "}
                        Our team of highly skilled and dedicated consultants is
                        committed to delivering exceptional results and
                        exceeding client expectations.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar1 value={1} />
                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Highly skilled <br />
                    consulting experts{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar1 value={2} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      Dedicated <br />
                      associates{" "}
                    </h4>
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
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img
                  src="assets/images/about/talented-team.png"
                  alt="Talented Team"
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
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Brand Section */}
      {/*===================================================*/}
      {/* <div className="brand-section upper1">
        <div className="container">
          <div className="row">
            <Swiper {...brandListProps} className="brand-list owl-carousel">
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-1.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-2.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-3.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-4.png" alt="Brand" />
              </SwiperSlide>
              <SwiperSlide className="single-brand">
                <img src="assets/images/resource/brand-5.png" alt="Brand" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* Team review starts */}
      <div className="ceo-cod-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h1 style={{ fontSize: "33px" }}>
                  {" "}
                  Meet our <span>Chief Consultant</span>{" "}
                </h1>
                {/* <h2>
                  {" "}
                  Chief <span> Consultant </span>
                </h2> */}
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {" "}
                  “With a shared vision for success, we cultivate an ecosystem
                  where client organizations and our group companies synergize,
                  leading to sustained growth and a significant industry
                  influence”{" "}
                </p>
                <p className="about-text2">
                  Leading Team Codup with a wealth of experience exceeding 14
                  years, Dr. Sagar is a seasoned professional in the consulting
                  industry. His dedication to excellence fuels the Codup team in
                  empowering businesses to achieve their objectives in the
                  ever-changing landscape of the IT and software industry. He
                  along with our dynamic and highly experience team offers
                  invaluable strategic insights, innovative solutions, and
                  expert guidance to our clients.{" "}
                </p>
              </div>
              <div className="dreamit-ceo-title">
                <h4> Dr. Mahipatsinh Sagar </h4>
                {/* <span>Chief Consultant</span> */}
              </div>
              {/* <div className="about-button">
                <Link legacyBehavior href="/testimonial">
                  <a>
                    {" "}
                    Clients Review <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div> */}
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img
                  style={{ width: "72%", marginTop: "25px" }}
                  src="assets/images/about/mahipatsinh-sagar-codup.png"
                  alt="Mahipatsinh Sagar"
                />
              </div>
              {/* <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img
                    style={{ width: "23%" }}
                    src="assets/images/about/ab-shape.png"
                    alt
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* Team reeview ends */}
      {/* Start consen Team Area */}
      {/*==================================================*/}
      <div className="team_area style-two upp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center pb-60">
                <h5> Team Nexone </h5>
                <h2>
                  {" "}
                  Let’s meet with our <span> people </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="portfolio_nav">
              <div className="portfolio_menu">
                <ul className="menu-filtering">
                  <li
                    className={`c-pointer ${activeBtn(1)}`}
                    onClick={handleFilterKeyChange(1)}
                  >
                    {" "}
                    Advisory Board{" "}
                  </li>
                  <li
                    className={`c-pointer ${activeBtn(2)}`}
                    onClick={handleFilterKeyChange(2)}
                  >
                    {" "}
                    Core Team{" "}
                  </li>
                  <li
                    className={`c-pointer ${activeBtn(3)}`}
                    onClick={handleFilterKeyChange(3)}
                  >
                    {" "}
                    Executive Team{" "}
                  </li>
                  {/* <li
                    className={`c-pointer ${activeBtn(4)}`}
                    onClick={handleFilterKeyChange(4)}
                  >
                    {" "}
                    Functional{" "}
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          {filterKey == 1 && (
            <div className="row">
              <div className="row justify-content-center">
                <div className="col-lg-3 col-sm-6">
                  <div className="single_team">
                    <div className="single_team_thumb1">
                      <img
                        src="assets/images/resource/team/ramesh-marand-codup.png"
                        alt="Ramesh Marand"
                      />
                    </div>
                    <div className="single_team_content">
                      <div className="team-title">
                        <h4>Mr. Ramesh Marand</h4>
                        <span>Advisory Board</span>
                      </div>
                      <div className="single_team_icon">
                        <a
                          href="https://linkedin.com/in/rameshahir"
                          target="_blank"
                        >
                          {" "}
                          <i class="fab fa-linkedin"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_team">
                    <div className="single_team_thumb1">
                      <img
                        src="assets/images/resource/team/dipen-shah-codup.png"
                        alt="Dipen Shah"
                      />
                    </div>
                    <div className="single_team_content">
                      <div className="team-title">
                        <h4> Mr. Dipen Shah </h4>
                        <span> Advisory Board</span>
                      </div>
                      <div className="single_team_icon">
                        <a
                          href="https://linkedin.com/in/ca-dipen-d-shah-621ba5278"
                          target="_blank"
                        >
                          {" "}
                          <i class="fab fa-linkedin"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="single_team">
                    <div className="single_team_thumb1">
                      <img
                        src="assets/images/resource/team/ketan-kumar-codup.png"
                        alt="Ketan Kumar"
                      />
                    </div>
                    <div className="single_team_content">
                      <div className="team-title">
                        <h4>Mr. Ketan Kumar</h4>
                        <span>Advisory Board</span>
                      </div>
                      <div className="single_team_icon">
                        <a
                          href="https://linkedin.com/in/ketankumar1"
                          target="_blank"
                        >
                          {" "}
                          <i class="fab fa-linkedin"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filterKey == 2 && (
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/resource/team/mahipatsinh-sagar-codup.png"
                      alt="Mahipatsinh Sagar"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Dr. Mahipatsinh Sagar</h4>
                      <span>Chief Consultant</span> &nbsp;
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a> */}
                      <a
                        href="https://linkedin.com/in/mahipatsinh-sagar"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                      <i className="bi bi-dribbble" />
                    </a> */}
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/resource/team/bhaumik-shah-codup.png"
                      alt="Bhaumik Shah"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4> Mr. Bhaumik Shah </h4>
                      <span> Lead Counsel </span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/bhaumik-shah-62755b49"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/resource/team/nilesh-malsana-codup.png"
                      alt="Nilesh Malsana"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Mr. Nilesh Malsana</h4>
                      <span>Founder</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/nileshmalsana"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/resource/team/riddhi-pandya-codup.png"
                      alt="Riddhi Pandya"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Miss Riddhi Pandya</h4>
                      <span>Co-founder </span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/riddhi-pandya-052547266"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filterKey == 3 && (
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/yuti-acharya-codup.png"
                      alt="Yuti Acharya"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Yuti Acharya </h4>
                      <span>Sr. Consultant</span> &nbsp;
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-facebook" />{" "}
                    </a> */}
                      <a
                        href="https://linkedin.com/in/yuti-acharya-541238196"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                      <i className="bi bi-dribbble" />
                    </a> */}
                      {/* <a href="#">
                      {" "}
                      <i className="bi bi-instagram"> </i>{" "}
                    </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/ayushkumar-singh-codup.png"
                      alt="AyushKumar Singh"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4> AyushKumar Singh</h4>
                      <span> Consulting Division</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/ayush-singh-2835b8232"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/kunjan-nagar-codup.png"
                      alt="Kunjan Nagar"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Kunjan Nagar</h4>
                      <span>Consulting Division</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/kunjan-nagar-405630222"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/khushi-kapoor-codup.png"
                      alt="Khushi Kapoor"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Khushi Kapoor</h4>
                      <span>Consulting Division</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/khushi-kapoor-5999701a1"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/abhishek-gupta-codup.png"
                      alt="Abhishek Gupta"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Abhishek Gupta</h4>
                      <span>Consulting Division</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/abhishek-gupta-a52a41183"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/yash-raj-codup.png"
                      alt="Yash Raj"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Yash Raj</h4>
                      <span>Consulting Division</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/yash-raj-88008415b"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/payal-sayariya-codup.jpeg"
                      alt="Payal Sayariya"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Payal Sayariya </h4>
                      <span>Consulting Division</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/payal-sayariya-643596231"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="single_team">
                  <div className="single_team_thumb1">
                    <img
                      src="assets/images/team/khushi-shamsukha-codup.png"
                      alt="Khushi Shamsukha"
                    />
                  </div>
                  <div className="single_team_content">
                    <div className="team-title">
                      <h4>Khushi Shamsukha </h4>
                      <span>Consulting Division</span>
                    </div>
                    <div className="single_team_icon">
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a href="#">
                        {" "}
                        <i className="bi bi-twitter" />{" "}
                      </a> */}
                      <a
                        href="https://linkedin.com/in/khushi-shamsukha-474875228"
                        target="_blank"
                      >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                      </a>
                      {/* <a href="#">
                        {" "}
                        <i className="bi bi-instagram"> </i>{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Team;
