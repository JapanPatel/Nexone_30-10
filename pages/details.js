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
                    <span> Simplified Tech Solutions for Everyone</span>
                    <h1 style={{ fontSize: "40px" }}>
                      {" "}
                      Your One-Stop Partner <br />
                      Low-Code/No-Code Solutions
                    </h1>
                    <p>
                      {" "}
                      We're your trusted advisor for easy and fast software
                      solutions, even if you're not a tech expert.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="assets/images/slider/1.png" alt />
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
                  <img src="assets/images/resource/car111.png" alt />
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
                  <img src="assets/images/resource/car222.png" alt />
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
                  <img src="assets/images/resource/car333.png" alt />
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
                  src="assets/images/about/white-lable.svg"
                  alt="Recognized Team"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="consen-section-title">
                <p className="comtitle"> Your Solutions, Our Expertise</p>
                <h2>
                  {" "}
                  White Label <span>Solutions</span>
                </h2>

                <p className="about-text2 pt-3">
                  {" "}
                  Under this model, Nexone provides its low-code and no-code
                  solutions to IT companies, allowing them to rebrand and resell
                  these products as their own.
                </p>
                <p>Why Choose White Label Solutions from Nexone Tech?</p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="about-icon-box pt-3">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab1.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>Ready-Made Solutions: </span>
                      <p style={{ textAlign: "justify" }}>
                        Harness Nexone Tech's ready-made solutions, saving your
                        IT company valuable time and resources. Say goodbye to
                        extensive development efforts.
                      </p>
                    </div>
                  </div>
                  <div className="about-icon-box border-non">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab2.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>Rapid Diversification: </span>
                      <p style={{ textAlign: "justify" }}>
                        This model empowers IT companies to rapidly diversify
                        their product offerings, even if they lack in-house
                        development capabilities. Embrace new opportunities
                        confidently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area new-style">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="consen-section-title">
                <p className="comtitle"> Seamless IT Transformation Partner</p>
                <h2>
                  {" "}
                  <span>Consulting</span> and <span>Implementation</span>{" "}
                  Services
                </h2>

                <p className="about-text2 pt-3">
                  {" "}
                  Nexone Tech extends its hand in partnership through
                  comprehensive consulting services. We assist IT companies in
                  identifying strategic opportunities for deploying low-code and
                  no-code solutions effectively.
                </p>
                <p>Our Value Proposition:</p>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <div className="about-icon-box pt-3">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab1.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>End-to-end Support:</span>
                      <p style={{ textAlign: "justify" }}>
                        We offer end-to-end support, ensuring the seamless
                        implementation and customization of our solutions.
                        Tailored precision meets your specific business needs.
                      </p>
                    </div>
                  </div>
                  <div className="about-icon-box border-non">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab2.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>Expertise Unleashed: </span>
                      <p style={{ textAlign: "justify" }}>
                        Leverage Nexone Tech's proficiency to optimize your
                        processes with cutting-edge low-code and no-code
                        technologies. Our guidance is your competitive edge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-thumb">
                <img
                  src="assets/images/about/consulting-implementation.svg"
                  alt="Recognized Team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area new-style">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-thumb">
                <img
                  src="assets/images/about/custom-integration.svg"
                  alt="Recognized Team"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="consen-section-title">
                <p className="comtitle">
                  {" "}
                  Innovative Solutions, Seamless Integration
                </p>
                <h2>
                  {" "}
                  Custom <span>Development</span> and <span>Integration</span>{" "}
                </h2>

                <p className="about-text2 pt-3">
                  {" "}
                  Nexone Tech excels in the art of collaboration. We work
                  closely with IT companies on custom development projects that
                  demand the prowess of low-code or no-code solutions. Our
                  expertise extends to seamlessly integrating our platforms into
                  your existing systems, enhancing functionality, streamlining
                  processes, and supercharging overall efficiency.
                </p>
                <p>Why Nexone Tech for Custom Development and Integration?</p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="about-icon-box pt-3">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab1.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>Tailored Precision:</span>
                      <p style={{ textAlign: "justify" }}>
                        We understand that your requirements are unique. Our
                        solutions cater to your distinctive needs, ensuring a
                        perfect fit.
                      </p>
                    </div>
                  </div>
                  <div className="about-icon-box border-non">
                    <div className="about-icon-thumb">
                      <img src="assets/images/about/ab2.png" alt />
                    </div>
                    <div className="about-box-content">
                      <span>Seamless Integration: </span>
                      <p style={{ textAlign: "justify" }}>
                        Enhance the capabilities of your existing systems
                        effortlessly. Nexone Tech makes complex integrations
                        feel like second nature.
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
    </Layout>
  );
};
export default Index3;
