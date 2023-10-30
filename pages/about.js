import Breadcumb2 from "@/src/components/Breadcumb2";
import Counter from "@/src/components/Counter";
import Faqs2 from "@/src/components/Faqs2";
import LogoSlider from "@/src/components/LogoSlider";
import Layout from "@/src/layout/Layout";
import { testimonial_list_slider } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ProssessBar from "@/src/components/ProssessBar";
import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
const About = () => {
  //
  const [crumbs, setCrumbs] = useState(["Home", "about us"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      <Breadcumb2 pageName={"About Us"} crumbs={crumbs} selected={selected} />

      <div className="process-area style-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-4 pb-lg-5">
                <p className="comtitle"> From Vision to Nexone </p>
                <h1 style={{ fontSize: "33px" }}>
                  {" "}
                  Shaping the Future, <br /> <span>One Line of Code</span> at a
                  Time{" "}
                </h1>
              </div>
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
                  <h3>Vision</h3>
                  <p>
                    To Empower limitless creativity in a codeless world, where
                    innovation knows no bounds and software development becomes
                    effortless for all.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 responsive">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/b.png" alt />
                </div>
                <div className="process-title">
                  <h3> Mission </h3>
                  <p>
                    Our mission is to democratize software development by
                    providing accessible, efficient, and sustainable low-code
                    and no-code platforms, fostering collaboration, innovation,
                    and inclusivity within a codeless ecosystem, while enabling
                    individuals and organizations to bring their ideas to life
                    effortlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="process-single-box2 upper">
                <div className="process-icon-thumb">
                  <img src="assets/images/resource/c.png" alt />
                </div>
                <div className="process-title">
                  <h3> Intention </h3>
                  <p>
                    At Nexone, we intend to revolutionize software development
                    by making it accessible to everyone. Our goal is to foster
                    innovation, collaboration, and inclusivity within a codeless
                    ecosystem, allowing individuals and organizations to
                    effortlessly bring their ideas to life. We aim to empower
                    limitless creativity and drive digital transformation for
                    enduring success.
                  </p>
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
      {/* Vision-mission ends */}

      <div className="process-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="row process-bg">
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {/* Idea <span> Generate </span> */}
                        Innovation Catalyst
                      </h3>
                      <p>
                        No-Code, Low-Code, Infinite Possibilities. Unleash
                        innovation with our no-code and low-code solutions. We
                        turn your ideas into reality at the speed of thought.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        {/* System <span> Design </span> */}
                        Expert Guidance
                      </h3>
                      <p>
                        Navigating Complexity with Ease. Our seasoned experts
                        are your compass in the ever-evolving tech world. We
                        simplify complexities and guide you to success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        {/* 24/7 <span> Support </span> */}
                        Tailored Solutions
                      </h3>
                      <p>
                        Your Vision, Our Blueprint. We understand that every
                        business is unique. Our solutions are meticulously
                        tailored to fit your distinct needs and goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        {/* Sales <span> Generate </span> */}
                        Global Reach
                      </h3>
                      <p>
                        Bringing the World Closer Through Technology. Nexone
                        serves a global clientele, embracing diversity and
                        bridging geographical boundaries with cutting-edge
                        technology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-shape">
                  <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div>
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2>
                  {" "}
                  Crafting Digital Symphony, <br />
                  <span> Code-Free </span>{" "}
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  {" "}
                  Introducing <span>Nexone</span>{" "}
                </h4>
                <p>
                  At Nexone, we don't just embrace the future; we build it.
                  We're the architects of digital transformation, the conjurers
                  of codeless wonders, and the catalysts of innovation. With
                  over a decade of experience as pioneers in the no-code and
                  low-code domains, we've mastered the art of turning visions
                  into reality. We're not here to follow trends but to set them.
                </p>
                <p>
                  Nexone is your passport to a world of limitless possibilities,
                  where complex challenges become simple triumphs. We invite you
                  to embark on a journey with us, where the ordinary is
                  transformed into the extraordinary, and where we redefine the
                  very essence of technology. Join Nexone, where innovation has
                  no limits.
                </p>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="casestudies.html">
                  <a>
                    {" "}
                    Success Stories <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=================================================*/}

      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6"></div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <p className="counter">
                        {" "}
                        3<span>/</span>3{" "}
                      </p>
                      {/* <span>X</span> */}
                      <p>
                        {" "}
                        No-Code <span>&</span> Low-Code Mastery{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <p className="counter">
                        {" "}
                        3<span>/</span>3{" "}
                      </p>
                      {/* <span></span> */}
                      <p> Customized Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>

          <div className="row testi-rotate align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title">
                <p className="comtitle"> Why Choose Nexone</p>
                <h2 className="all">
                  {" "}
                  Igniting Innovation, &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                  <span> Beyond the Code </span>
                </h2>
                <p className="about-text1 all">
                  {" "}
                  At Nexone, we understand the relentless demands faced by IT
                  departments in today's organizations. The imperative to
                  rapidly develop and deploy software applications often
                  collides with the challenges of limited resources and a
                  mounting backlog of operational and maintenance tasks. This is
                  precisely where Nexone shines.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ color: "#FF9201" }}
                    />{" "}
                    <span>
                      {" "}
                      Our low-code and no-code solutions simplify, accelerate,
                      and streamline application development, offering a
                      lifeline to overburdened IT functions.{" "}
                    </span>
                  </li>
                  <li>
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ color: "#FF9201" }}
                    />{" "}
                    <span>
                      {" "}
                      As the digital workplace evolves, the adoption of low-code
                      and no-code applications becomes the technology of choice.{" "}
                    </span>
                  </li>
                  <li>
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ color: "#FF9201" }}
                    />{" "}
                    <span>
                      {" "}
                      Professional developers find that they can complete tasks
                      two to three times faster using our technologies compared
                      to traditional developer tools.{" "}
                    </span>
                  </li>
                  <li>
                    <i
                      className="bi bi-arrow-right-circle"
                      style={{ color: "#FF9201" }}
                    />{" "}
                    <span>
                      {" "}
                      Nexone's solutions enable business users and developers to
                      focus on their areas of expertise, fostering seamless
                      collaboration and expediting digital transformation.{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              {/* Hero */}
              <Tab.Container defaultActiveKey={"t1"}>
                <div className="tab">
                  <Nav as="ul" className="tabs">
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t1"}>
                        Expertise
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t2"}>
                        Agility
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link className="c-pointer" as="a" eventKey={"t3"}>
                        Impact
                      </Nav.Link>
                    </li>
                  </Nav>{" "}
                  {/* / tabs */}
                  <Tab.Content className="tab_content">
                    <Tab.Pane eventKey={"t1"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-1.png"
                        alt="business image"
                      />
                      <ul className="tabs-inner-list pt-4 ">
                        <li className="all">
                          <i className="fas fa-check" />
                          <span>
                            Deep Industry Knowledge
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Seasoned Professionals
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Proven Track Record &nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span> Cutting-Edge Solutions</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t2"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-2.png"
                        alt="business image"
                      />

                      <ul className="tabs-inner-list pt-4 ">
                        <li className="all">
                          <i className="fas fa-check" />
                          <span>
                            Rapid Development &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Scalable Solutions &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Adaptive Approach</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Swift Time-to-Market &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp;
                          </span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                    <Tab.Pane eventKey={"t3"} className="tabs_item">
                      <img
                        src="assets/images/resource/img-3.png"
                        alt="business image"
                      />
                      <ul className="tabs-inner-list pt-4">
                        <li className="all">
                          <i className="fas fa-check" />
                          <span>Tangible Results</span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Enhanced Productivity &nbsp; &nbsp; &nbsp; &nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>
                            Competitive Advantage &nbsp; &nbsp;&nbsp;&nbsp;
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check" />
                          <span>Empowered Innovation</span>
                        </li>
                      </ul>
                    </Tab.Pane>{" "}
                    {/* / tabs_item */}
                  </Tab.Content>{" "}
                  {/* / tab_content */}
                </div>
              </Tab.Container>
              {/* / tab */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}

      <div className="about-area style-three upper1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <ProssessBar />
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <div className="consen-section-title white mb-5">
                  <h2>
                    {" "}
                    <span>Our Commitment to Excellence</span>{" "}
                  </h2>
                </div>
                <img
                  src="assets/images/resource/key-metrics.png"
                  alt="Key Mettics About"
                />
                {/* thumb content */}
                <div className="skill-thumb-content">
                  <div className="skill-title">
                    <p className="counter"> 12 </p>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div>
                </div>
                {/* skill shape */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* START  feture-area Section */}
      {/*=================================================*/}

      {/*==================================================*/}

      {/* Start consen Skills Area Css */}
      {/*==================================================*/}
      <div className="skill-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="extra-animation-div">
                <div className="consen-section-title white">
                  <h2>
                    {" "}
                    Delivering Value Beyond <span>Measure</span>{" "}
                  </h2>
                  {/* <h2>
                    {" "}
                    Software <span>Trailblazers</span>
                  </h2> */}
                </div>
                <div className="lines style-three upper pt-30 pb-10">
                  <div className="line" />
                </div>
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i
                        className="bi bi-arrow-right-circle"
                        style={{ color: "#FF9201" }}
                      />{" "}
                      <span>
                        {" "}
                        When you choose Nexone, you choose a partner that
                        provides secure, licensed solutions built upon years of
                        expertise and continuous improvement.{" "}
                      </span>
                    </li>
                    <li>
                      <i
                        className="bi bi-arrow-right-circle"
                        style={{ color: "#FF9201" }}
                      />{" "}
                      <span>
                        {" "}
                        However, we understand that one size does not fit all.
                        That's why we go beyond off-the-shelf solutions. We
                        offer full customization, tailoring our solutions to
                        your specific needs, and ensuring a seamless fit with
                        your objectives and processes.{" "}
                      </span>
                    </li>
                    <li>
                      <i
                        className="bi bi-arrow-right-circle"
                        style={{ color: "#FF9201" }}
                      />{" "}
                      <span>
                        {" "}
                        Our commitment to cost-effectiveness, quality, speed,
                        and future-proofed innovation sets us apart. With
                        Nexone, you're not just investing in software; you're
                        investing in a partnership that guarantees value that
                        extends far beyond expectations.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="slill-single-thumb mt-4 mt-lg-0 pl-50 ml-1">
                <img
                  src="assets/images/resource/key-metrics.png"
                  alt="Key Mettics About"
                />
                {/* thumb content */}
                <div className="skill-thumb-content">
                  <div className="skill-title">
                    <p className="counter"> 12 </p>
                    <span>+</span>
                    <h5> YEARS EXPERIENCE </h5>
                  </div>
                </div>
                {/* skill shape */}
                <div className="skill-shape dance">
                  <img src="assets/images/resource/skill-shape.png" alt />
                </div>
                <div className="skill-shape1 bounce-animate2">
                  <img src="assets/images/resource/all-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen Skill Area Css */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/*  Start  Counter Section */}
      {/*===================================================*/}
      <div className="counter-section style-33 pt-30 pb-80">
        <div className="container">
          <div className="counter-container">
            <div className="row hr pt-40">
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h2>
                        <span className="counter">
                          <Counter end={20} />
                        </span>
                      </h2>
                      <span />
                      <div className="counter-title">
                        <span> Success </span>
                        <p>Stories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h2>
                        <span className="counter">
                          <Counter end={150} />
                        </span>
                      </h2>

                      <span />
                      <div className="counter-title">
                        <span>Projects</span>
                        <p>Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="counter-single-item-inner d-flex">
                  <div className="counter-content">
                    <div className="counter-text">
                      <h2>
                        <span className="counter">
                          <Counter end={10} />
                        </span>
                      </h2>
                      <span />
                      <div className="counter-title">
                        <span>Successful </span>
                        <p>Mergers and Acquisitions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start consen Team Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End consen Team Area */}
      {/*==================================================*/}
      {/* {consen about starts} */}
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img
                  src="assets/images/about/solution-about.png"
                  alt="Solution About "
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2>
                  {" "}
                  No-Code, Low-Code <br />
                  <span> Revolution </span>{" "}
                </h2>
                <h2> </h2>
                <p>
                  In a world that often associates development with complexity
                  and time-consuming processes, Nexone believes in rewriting the
                  rules. We're here to debunk the myth that quality development
                  requires endless resources and unwarranted delays. Our mission
                  is to make development quick yet powerful, simple yet
                  versatile, and solution-oriented while being adaptable to your
                  evolving needs.
                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>

              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" style={{ color: "#FF9201" }} />{" "}
                    <span>
                      {" "}
                      you can unleash the potential of rapid application
                      development, modernization, and seamless integration.
                    </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" style={{ color: "#FF9201" }} />{" "}
                    <span>
                      {" "}
                      It's not just about building applications; it's about
                      building more, faster.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3> Accomplishments of Nexone over the years </h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={25} />
                  </h4>
                  <span>%</span>
                  <p>
                    Boosted Employee Productivity by through Effective
                    Performance Management
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={40} />
                  </h4>
                  <span>%</span>
                  <p>
                    Streamlined Processes and Achieved Efficiency Improvement
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={30} />
                  </h4>
                  <span>%</span>
                  <p>Average Increase in Revenue for Our Clientele</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={3} />
                  </h4>
                  <span>X</span>
                  <p>Profit Maximization and Wealth Creation for Our Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-section">
        <div className="container">
          <div className="row">
            <LogoSlider />
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start  FAQ Section */}
      {/*===================================================*/}
      <div className="faq-sectiions ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <p className="comtitle"> Benefits </p>
                <h2>
                  {" "}
                  Seamless <span>Integration</span> Across Your Ecosystem{" "}
                </h2>
                <p className="study-text1">
                  {" "}
                  Nexone isn't just software; we're your catalyst for rapid
                  innovation and sustainable growth. Our suite of no-code and
                  low-code solutions expedites development, streamlines
                  operations, and instills the confidence to embrace the digital
                  future. Whether you're a startup, an enterprise, or anywhere
                  in between, Nexone empowers you to unlock your full digital
                  potential.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span>
                      We remove the barriers to technology, making it accessible
                      to all, unrestricted by conventional limits.{" "}
                    </span>
                  </li>

                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span>
                      {" "}
                      We empower individuals and organizations, ensuring that
                      technology's benefits are accessible to everyone.{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-0">
              {/* Start Accordion */}
              <div className="tab_container pl-30 pt-20">
                <Faqs2 />
              </div>
              {/* End Accordion */}
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
      {/*==================================================*/}
      {/* End consen Subscribe Area */}
      {/*==================================================*/}
    </Layout>
  );
};
export default About;
