import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { useState } from "react";
const Testimonial = () => {
  const [crumbs, setCrumbs] = useState(["Home", "testimonial"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      {/* <Breadcumb pageName={"Testimonial"} /> */}
      <Breadcumb2
        pageName={"Testimonial"}
        crumbs={crumbs}
        selected={selected}
      />

      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area style-two">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-12">
              <div className="consen-section-title pb-50 text-center upper">
                <h5> Testimonials </h5>
                <h2> Codup Trusted Clients </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi1.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4>Philip Anthorpy</h4>
                      <p>UI Designer</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div> */}
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/1.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4>Strategic Consulting </h4>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Codup has been an invaluable partner in our
                      organization's digital transformation journey. Their
                      strategic consulting services helped us align our business
                      objectives with technology solutions, resulting in
                      improved efficiency and accelerated growth”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi3.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Shilpa Shethy </h4>
                      <p> CEO, Founder </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div> */}
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/2.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Optimization Consulting </h4>
                      <p>COO</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “We are extremely grateful for the exceptional guidance
                      and expertise provided by Codup's optimization consulting
                      team. Their insights and recommendations have helped us
                      streamline our processes, reduce costs, and enhance
                      overall operational efficiency”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi2.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> David Alexon </h4>
                      <p> MH Manager </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div> */}
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/3.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Functional Consulting </h4>
                      <p>CTO </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Working with Codup's functional consulting team was a
                      game-changer for our company. Their deep understanding of
                      our industry and hands-on approach to solving complex
                      challenges enabled us to optimize our internal systems and
                      drive tangible business results”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi3.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Shilpa Shethy </h4>
                      <p> CEO, Founder </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div> */}
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/4.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Organization Consulting </h4>
                      <p> HR Director </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Codup's organization consulting services have been
                      instrumental in reshaping our company culture and driving
                      organizational excellence. Their expert guidance and
                      tailored solutions have empowered our teams to collaborate
                      effectively and deliver exceptional results”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi2.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> David Alexon </h4>
                      <p> MH Manager </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div> */}
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/5.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Strategic Consulting </h4>
                      <p> VP of Sales </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “The strategic consulting services provided by Codup have
                      transformed our business trajectory. Their in-depth market
                      analysis, competitor insights, and growth strategies have
                      helped us identify new opportunities and expand our market
                      presence”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/resource/testi1.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4>Philip Anthorpy</h4>
                      <p>UI Designer</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Holisticly pursue market-more synerg through innovative
                      paradi. Enthusia productivate media”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div> */}
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/6.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Organization Consulting </h4>
                      <p> Founder </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Codup's start-up consulting expertise played a crucial
                      role in our company's success. Their comprehensive
                      business plan, market entry strategies, and investor pitch
                      support were instrumental in securing funding and
                      launching our innovative software product”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/7.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4>Organization Consulting</h4>
                      <p>CEO</p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “We are immensely impressed by Codup's management
                      consulting services. Their guidance in strategic
                      decision-making, project management, and business process
                      optimization has helped us achieve operational excellence
                      and drive sustainable growth”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/8.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Optimization Consulting </h4>
                      <p> General Counsel </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “Codup's legal and compliance consulting team has been a
                      reliable partner in navigating complex regulatory
                      landscapes. Their expert advice and meticulous approach to
                      compliance have ensured our company's adherence to
                      industry standards and mitigated potential risks”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="testimonial-single-box">
                <div className="testimonial-content1">
                  <div className="single-quote-icon">
                    <div className="quote-thumb">
                      <img src="assets/images/testi/9.png" alt />
                    </div>
                    <div className="quote-title">
                      <h4> Strategic Consulting </h4>
                      <p> CEO </p>
                    </div>
                  </div>
                  <div className="em-testimonial-text">
                    <p>
                      “We owe our successful merger and acquisition to the
                      expertise of Codup's consulting team. Their meticulous due
                      diligence, integration strategies, and post-merger support
                      were pivotal in achieving a seamless transition and
                      maximizing synergies”.
                    </p>
                  </div>
                  <div className="em-testi-start-icon">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-half" />
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
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Get your Free Business Consolution</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="tel:09837393403" className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1> Requirement Submission </h1>
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
    </Layout>
  );
};
export default Testimonial;
