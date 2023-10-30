import BlogSidebar2 from "@/src/components/BlogSidebar2";
import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const Cname = e.target.commentname.value;
    const Email = e.target.commentemail.value;
    const Fon = e.target.commentphone.value;
    const Web = e.target.commentwebsite.value;
    const YourMessage = e.target.commentmsgbox.value;

    if (Cname.trim() == "") {
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

    const commentname = e.target.commentname.value;
    const commentemail = e.target.commentemail.value;
    const commentphone = e.target.commentphone.value;
    const commentwebsite = e.target.commentwebsite.value;
    const commentmsgbox = e.target.commentmsgbox.value;

    let formData = {
      commentname: commentname,
      commentemail: commentemail,
      commentphone: commentphone,
      commentwebsite: commentwebsite,
      commentmsgbox: commentmsgbox,
    };
  };
  const [crumbs, setCrumbs] = useState([
    "Home",
    "services",
    "Data Integration Solutions Services",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      {/* <Breadcumb1 pageName={"Optimization Consulting"} /> */}
      <Breadcumb2
        pageName={"Data Integration Solutions Services"}
        crumbs={crumbs}
        selected={selected}
      />

      <div className="blog-section style-two details">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="blog-single-items">
                <div className="blog-thumb">
                  <img
                    src="assets/images/resource/data-integration-services.svg"
                    alt="Data Integration Services"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    <div class="consen-section-title">
                      <h1 className="serall">
                        Seamless Data Integration for IT Efficiency
                      </h1>
                    </div>
                    {/* <b className="mt-40 mb-0">
                      <span className="allservice"></span> Unlocking
                      Possibilities in Application Development
                    </b> */}
                    <p style={{ textAlign: "justify" }}>
                      In today's data-driven world, efficient data integration
                      is essential for IT departments to operate smoothly.
                      Nexone Tech Private Limited specializes in Data
                      Integration Solutions, harnessing the power of no-code and
                      low-code technologies to streamline and optimize your data
                      workflows.{" "}
                    </p>

                    {/* <h4 className="mt-40 mb-0">Overview:</h4> */}
                    {/* <div class="consen-section-title ">
                      <h2 className="helloo">
                        Our Approach: Empowering Your Vision with Low-Code and
                        No-Code
                      </h2>
                    </div>
                    <p className="pt-2 pb-1" style={{ textAlign: "justify" }}>
                      At Nexone Tech, we understand that your business is
                      unique, and your software should reflect that. Our
                      approach to application development blends the creativity
                      of custom coding with the efficiency of low-code and
                      no-code solutions. We empower your vision by offering a
                      suite of tailored services within our four core
                      categories:
                    </p> */}
                    <div className="blog-thumb">
                      <img
                        src="assets/images/resource/organization-consulting-form.jpg"
                        alt="Organization Consulting Form"
                      />
                    </div>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">1. </span>
                      Data Source Integration: Unlocking the Potential of Data
                      Connectivity
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>Our no-code and low-code
                      solutions simplify the integration of various data
                      sources, making data connectivity effortless. With our
                      no-code interface, IT professionals can visually map data
                      sources, define data transformation rules, and establish
                      connections seamlessly. For more complex integrations, our
                      low-code options provide flexibility with minimal coding
                      effort. The outcome is a unified IT ecosystem where data
                      flows harmoniously between systems, eradicating data silos
                      and enhancing data-driven decision-making.
                    </p>
                    <div className="block-quote">
                      <div class="consen-section-title ">
                        <h2 className="helloo">
                          Choose Nexone Tech for Data Integration Solutions:
                        </h2>
                      </div>
                      <p>
                        <i class="bii fas fa-check"></i>Simplify Data Source
                        Integration
                      </p>
                      <p>
                        <i class="bii fas fa-check"></i>Elevate Data Quality
                      </p>
                      <p>
                        <i class="bii fas fa-check"></i>Enhance Efficiency
                        Through Automation
                      </p>
                      <p>
                        <i class="bii fas fa-check"></i>Centralize Data
                        Management
                      </p>
                      {/* <div className="block-quoto-footer">
                        – Chester Barnard
                      </div> */}
                    </div>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">2. </span>
                      Data Transformation and Cleansing: Elevating Data Quality
                      with Minimal Effort
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>Nexone Tech's no-code and
                      low-code tools empower IT teams to cleanse, transform, and
                      standardize data without the need for extensive coding.
                      Using our intuitive no-code interface, users can visually
                      define data cleansing rules. For advanced transformations,
                      our low-code solutions offer scripting capabilities,
                      allowing for intricate data refinement. By automating
                      these processes, data quality escalates, resulting in more
                      precise analysis and reporting.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">3. </span>
                      Automated Data Loading: Efficiency Through Automation
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>With our no-code and
                      low-code automation, IT professionals can establish data
                      loading processes that operate autonomously, reducing the
                      need for manual intervention. Our no-code interface
                      simplifies the creation of straightforward data loading
                      workflows. Meanwhile, our low-code options provide
                      advanced control for intricate data loading scenarios. The
                      outcome is a dataset that remains consistently updated and
                      readily available for analysis whenever you need it.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">4. </span>
                      Data Warehouse Automation: Centralized Data Management
                      Made Easy
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>Nexone Tech's no-code and
                      low-code solutions extend to data warehousing. Our no-code
                      tools simplify the setup of data warehousing structures,
                      making centralized data management accessible to all. For
                      those requiring customized data warehousing
                      configurations, our low-code solutions offer flexibility
                      and control. By automating data warehousing processes, IT
                      teams can establish a centralized repository for
                      structured data, accessible to various departments and
                      systems. This centralization enhances data accessibility
                      and ensures data consistency.
                    </p>

                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          With Nexone Tech's no-code and low-code Data
                          Integration Solutions, your IT department can optimize
                          data workflows, improve data quality, and empower
                          data-driven decision-making without the complexities
                          of extensive coding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-form pt-50">
                  <div className="comment-title mb-40">
                    <h3>Leave Comment</h3>
                    <span />
                  </div>
                  <form onSubmit={handleSubmit} id="dreamit-form">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="commentname"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="comment-box"
                          name="commentemail"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="commentphone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="comment-box"
                          name="commentwebsite"
                          placeholder="Your Website"
                        />
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="comment-message"
                          className="mb-20"
                          id="commentmsgbox"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>

                      <input
                        type="submit"
                        defaultValue="Post Comment"
                        className="submit-comment"
                      />
                    </div>
                  </form>
                  <div id="status" />
                </div>
              </div>
            </div>
            <ToastContainer />

            <BlogSidebar2 />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;
