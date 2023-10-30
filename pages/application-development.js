import BlogSidebar from "@/src/components/BlogSidebar";
// import BlogSidebar from "../src/components/BlogSidebar";
import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import React, { useState } from "react";

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
    "Application Development Services",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Application Development Services"}
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
                    src="assets/images/resource/application-development-services.svg"
                    alt="Application Development Services"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    <div class="consen-section-title">
                      <h1 className="serall">
                        Application Development with Low-Code and No-Code
                        Expertise
                      </h1>
                    </div>
                    <b className="mt-40 mb-0">
                      <span className="allservice"></span> Unlocking
                      Possibilities in Application Development
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      In today's rapidly evolving digital landscape, businesses
                      need agile, efficient, and innovative software solutions
                      to stay ahead. At Nexone Tech Private Limited, we
                      specialize in harnessing the power of low-code and no-code
                      development to transform your ideas into powerful,
                      customized applications that drive growth and efficiency.{" "}
                    </p>

                    {/* <h4 className="mt-40 mb-0">Overview:</h4> */}
                    <div class="consen-section-title ">
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
                    </p>
                    <div className="blog-thumb">
                      <img
                        src="assets/images/resource/application-development-form.png"
                        alt="Application Development Form"
                      />
                    </div>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">1. </span>
                      Custom Application Development with Low-Code Agility
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Rapid Application
                        Prototyping:
                      </b>{" "}
                      Witness your vision come to life quickly with our no-code
                      rapid prototyping, enabling swift feedback and iterations.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Custom Application
                        Building:
                      </b>{" "}
                      Tailor-made applications that precisely match your
                      business needs, developed with the flexibility and
                      efficiency of low-code.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Legacy System
                        Modernization:
                      </b>{" "}
                      Revitalize your existing systems, enhancing their
                      functionality and user experience through low-code
                      front-end modernization.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Enterprise App
                        Integration:
                      </b>{" "}
                      Seamlessly connect your enterprise applications, automate
                      data flow, and improve efficiency using our low-code
                      integration solutions.
                    </p>
                    <div className="block-quote">
                      <div class="consen-section-title ">
                        <h2 className="helloo">Let's Co-Create Your Vision</h2>
                      </div>
                      <p>
                        When you partner with Nexone Tech Private Limited, you
                        embark on a journey of innovation, efficiency, and
                        digital transformation. Explore each of our application
                        development categories in detail, discover how we
                        empower your ideas, and let's co-create a brighter
                        digital future together.
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
                      Mobile App Development for the Future
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Cross-Platform Mobile
                        App Development:
                      </b>{" "}
                      Reach wider audiences with applications that run
                      harmoniously on iOS and Android, driven by cross-platform
                      low-code development.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Native Mobile App
                        Development:
                      </b>{" "}
                      Craft native apps that excel in user experience while
                      integrating low-code solutions for accelerated
                      development.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Mobile App Testing and
                        Deployment:
                      </b>{" "}
                      Ensure your mobile apps are error-free and rapidly
                      deployed using automated testing driven by low-code
                      automation tools.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Mobile App Maintenance
                        and Updates:
                      </b>{" "}
                      Stay responsive to evolving user needs with efficient
                      low-code updates, keeping your app current and
                      competitive.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">3. </span>
                      Web Application Development with Low-Code Efficiency
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Web App Prototyping and
                        Design:
                      </b>{" "}
                      Visualize your web application's user interface swiftly
                      with low-code prototyping, enabling quicker iterations and
                      feedback.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Front-End Development:
                      </b>{" "}
                      Craft engaging user interfaces and client-side
                      functionality efficiently using low-code components.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Back-End Development:
                      </b>{" "}
                      Implement robust server-side logic and database
                      components, leveraging low-code solutions where
                      applicable.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Web App Testing and
                        Maintenance:
                      </b>{" "}
                      Ensure your web applications run smoothly with automated
                      testing driven by low-code automation and quick bug
                      resolution.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">4. </span>
                      Cloud-Based Application Development for Scalability
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Cloud-Native App
                        Development:
                      </b>{" "}
                      Build applications optimized for cloud environments using
                      low-code and no-code components for scalability and
                      efficiency.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Serverless Architecture:
                      </b>{" "}
                      Implement serverless applications with ease, relying on
                      our low-code expertise for serverless function design.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>DevOps for Cloud Apps:
                      </b>{" "}
                      Embrace DevOps for cloud-based applications, streamlining
                      deployment, scaling, and monitoring through integrated
                      low-code solutions.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Scalable Cloud
                        Solutions:
                      </b>{" "}
                      Create applications that adapt effortlessly to varying
                      workloads, powered by low-code modules and interfaces.
                    </p>
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

            <BlogSidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;
