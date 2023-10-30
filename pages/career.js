import Counter from "@/src/components/Counter";
import Faqs1 from "@/src/components/Faqs1";
import ProssessBar from "@/src/components/ProssessBar";
import Layout from "@/src/layout/Layout";
import {
  brandListProps2,
  heroSlider,
  testimonial_list_slider,
} from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const CaseStudies2 = dynamic(
  () => import("@/src/components/isotope/CaseStudies2"),
  {
    ssr: false,
  }
);
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <Swiper {...heroSlider} className="banner-list">
        <SwiperSlide>
          <div className="banner-area d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">
                    <span> The Place to Make Your Mark</span>
                    <h1> Ignite Your Career Journey</h1>
                    <p> Build an extraordinary career with team Nexone </p>
                  </div>
                  <div className="banner-button">
                    <Link legacyBehavior href="contact.html">
                      <a> Apply Now </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="assets/images/slider/career-growth.svg" alt />
                  </div>
                  <div className="banner-thumb">
                    <img src="assets/images/slider/banner-img.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}
      <div className="feature-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/car111.svg" alt />
                </div>
                <div className="single-feature-content">
                  <p>01</p>
                  <span>Novitiate</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/car222.svg" alt />
                </div>
                <div className="single-feature-content">
                  <p>02</p>
                  <span>Proficiency</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="single-feature-icon">
                  <img src="assets/images/resource/car333.svg" alt />
                </div>
                <div className="single-feature-content">
                  <p>03</p>
                  <span>Eminence</span>
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
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area new-style">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-thumb">
                <img
                  src="assets/images/about/recognized-team-nexone.svg"
                  alt="Recognized Team"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="consen-section-title">
                <p className="comtitle"> Embrace Your Authentic Self at Work</p>
                <h2>
                  {" "}
                  Be Part of a <span>Valued</span> and <span>Recognized</span>{" "}
                  Team &nbsp;
                </h2>

                <p className="about-text2 pt-3">
                  {" "}
                  Join a team where your ideas are valued, and your expertise is
                  recognized. We foster an inclusive environment that empowers
                  you to bring your authentic self to work.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="about-icon-box pt-3">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab1.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>Meaningful Work </span>
                      <p style={{ textAlign: "justify" }}>
                        Be a part of projects and initiatives that make a real
                        impact on businesses, industries, and society. At Nexone
                        Technologies, we empower our team members to contribute
                        their unique skills and ideas to drive meaningful
                        change.
                      </p>
                    </div>
                  </div>
                  <div className="about-icon-box border-non">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab2.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>Career Growth Opportunities </span>
                      <p style={{ textAlign: "justify" }}>
                        Nexone Technologies is committed to the growth and
                        development of our team members. We provide a clear
                        career progression path, mentorship programs, and
                        opportunities to work on challenging projects that
                        enhance skills and expertise.
                      </p>
                    </div>
                  </div>
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
      {/* End Consen Service Area */}
      {/*==================================================*/}
      <div className="service-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title upper text-center mb-40">
                <p className="comtitle"> Team Work</p>

                <h2>
                  Embracing <span>collaboration</span> and{" "}
                  <span>innovation</span> for success
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                <div className="service-box-thumb">
                  <img
                    src="assets/images/resource/collaborative-environment-nexone.jpg"
                    alt="Collaborative Environment"
                  />
                </div>
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv1.svg" alt />
                </div>
                <div className="service-content">
                  <span>Collaborative Environment </span>
                  <p>
                    Join a team of highly skilled professionals who are
                    passionate about what they do. Our collaborative work
                    environment encourages open communication, knowledge
                    sharing, and teamwork, fostering innovation and personal
                    growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                <div className="service-box-thumb">
                  <img
                    src="assets/images/resource/diverse-inclusive-nexone.jpg"
                    alt="Diverse and Inclusive"
                  />
                </div>
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv2.svg" alt />
                </div>
                <div className="service-content">
                  <span>
                    Diverse and &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    Inclusive{" "}
                  </span>
                  <p>
                    We value diversity and believe in creating an inclusive
                    workplace where every team member feels respected, valued,
                    and empowered. We celebrate different perspectives and
                    backgrounds, fostering creativity and a sense of belonging.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-service-box">
                <div className="service-box-thumb">
                  <img
                    src="assets/images/resource/cutting-edge-technology.jpg"
                    alt="Cutting-Edge Technology"
                  />
                </div>
                <div className="service-icon-thumb">
                  <img src="assets/images/resource/srv3.svg" alt />
                </div>
                <div className="service-content">
                  <span>Cutting-Edge Technology </span>
                  <p>
                    As a technology-driven organization, we stay at the
                    forefront of industry advancements. You'll have the
                    opportunity to work with cutting-edge technologies, tools,
                    and platforms, expanding your knowledge and expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Consen Service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Skills Area Css */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Call Do Action Area Css */}
      {/*==================================================*/}
      <div className="call-do-action-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="consen-section-title white upper text-center mb-40">
                <p className="comtitle"> Join Team Nexone</p>

                <h2> Let's shape the future together</h2>
              </div>
              <div className="new-button text-center">
                <Link legacyBehavior href="contact.html">
                  <a>Apply Now</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Call Do Action Area Css */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="portfolio-area">
        <div className="container-fluid">
          <CaseStudies2 />
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}

      {/* Start consen Faq Area */}
      {/*==================================================*/}
      <div className="faq-area new-style" style={{ marginBottom: "105px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6" />
            <div className="col-lg-6">
              {/* Start Accordion */}
              <div className="tab_container">
                <div className="consen-section-title white pb-40 mb-1">
                  <p className="comtitle"> Our Hiring Process </p>
                  <h2>
                    {" "}
                    Our hiring process typically includes the following steps:
                  </h2>
                </div>
                <Faqs1 />
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* END consen Faq Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default Index3;
