import BlogSidebar1 from "@/src/components/BlogSidebar1";
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
    "Business Process Automation Services",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      {/* <Breadcumb1 pageName={"Strategic Consulting Service"} /> */}
      <Breadcumb2
        pageName={"Business Process Automation Services"}
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
                    src="assets/images/resource/business-process-services.svg"
                    alt="Business Process Automation Services"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    <div class="consen-section-title">
                      <h1 className="serall">
                        Efficiency through Automation: Streamlining Your
                        Operations
                      </h1>
                    </div>
                    {/* <b className="mt-40 mb-0">
                      <span className="allservice"></span> Unlocking
                      Possibilities in Application Development
                    </b> */}
                    <p style={{ textAlign: "justify" }}>
                      In the modern business landscape, efficiency is a driving
                      force behind success. Nexone Tech Private Limited
                      specializes in Business Process Automation, using low-code
                      and no-code solutions to optimize your workflows, data
                      processes, and integrations with existing systems.{" "}
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
                      Workflow Automation: Transforming Business Processes
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Unlocking Seamless
                        Workflows: Workflow Design and Mapping
                      </b>{" "}
                      is the foundation of streamlined processes. At Nexone
                      Tech, we empower you to visualize and design your
                      workflows efficiently. Our low-code approach allows for
                      swift workflow prototyping, enabling quicker feedback and
                      iterative improvements. Witness your workflows come to
                      life with precision, all while benefiting from our
                      automation expertise.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Effortless Approvals and
                        Routing: Approval and Routing Automation
                      </b>{" "}
                      simplifies decision-making and routing within your
                      processes. We leverage low-code solutions to automate
                      approvals, ensuring that tasks are routed to the right
                      individuals with minimal manual intervention. With Nexone
                      Tech, you can streamline your approval processes, saving
                      time and reducing errors.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Data-Driven Insights:
                        Process Analytics and Optimization
                      </b>{" "}
                      is about harnessing data to enhance your operations
                      continually. We provide tools to capture and analyze
                      process data, identifying bottlenecks and areas for
                      improvement. Our low-code solutions facilitate rapid
                      optimization, ensuring that your workflows are always at
                      peak efficiency.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Seamless Integration:
                        Integration with Existing Systems
                      </b>{" "}
                      is the cornerstone of a connected business ecosystem. We
                      specialize in integrating your workflows with your
                      existing systems, whether they're legacy software or
                      modern applications. Nexone Tech ensures that data flows
                      seamlessly between systems, enhancing overall efficiency
                      and reducing manual data entry.
                    </p>
                    <div className="block-quote">
                      <div class="consen-section-title ">
                        <h2 className="helloo">
                          Optimize Your Operations with Nexone Tech
                        </h2>
                      </div>
                      <p>
                        When you partner with Nexone Tech Private Limited for
                        Business Process Automation, you're partnering with a
                        team dedicated to optimizing your operations for
                        efficiency and accuracy. Explore how our Business
                        Process Automation services can empower your business.
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
                      Data Entry and Processing Automation: Accuracy and Speed
                      Combined
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Efficient Data Capture:
                        Data Capture and Extraction
                      </b>{" "}
                      ensure accurate and swift data entry. We employ low-code
                      solutions to automate data capture processes, reducing
                      errors and saving valuable time. Nexone Tech streamlines
                      the collection of data from various sources, ensuring
                      accuracy and consistency.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Data Quality Assurance:
                        Data Validation and Transformation
                      </b>{" "}
                      is essential for maintaining data quality. We use low-code
                      tools to validate and transform data, ensuring that it
                      meets your specific requirements. Nexone Tech helps you
                      maintain data integrity throughout your processes.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Seamless Data Exchange:
                        Data Import and Export Automation
                      </b>{" "}
                      simplifies data exchange between systems. Our low-code
                      solutions enable automated import and export processes,
                      reducing manual effort and minimizing the risk of errors.
                      Nexone Tech ensures that your data flows seamlessly
                      between systems, enhancing overall efficiency.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Insights Through
                        Visualization: Reporting and Data Visualization
                      </b>{" "}
                      empower data-driven decision-making. We provide tools for
                      creating reports and visualizing data, allowing you to
                      gain insights into your processes. Nexone Tech ensures
                      that you have the information you need to optimize your
                      operations.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">3. </span>
                      Document Management and Workflow Automation
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Efficient Document
                        Handling: Document Capture and Storage
                      </b>{" "}
                      is essential for efficient document management. Nexone
                      Tech offers automated solutions to capture and store
                      documents, ensuring they are easily accessible and
                      organized.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Streamlined Workflow
                        Processes: Document Workflow Automation
                      </b>{" "}
                      streamlines the movement of documents through your
                      organization. We automate document routing, approvals, and
                      notifications, reducing manual intervention and improving
                      efficiency.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">4. </span>
                      Compliance and Records Management
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Ensuring Regulatory
                        Compliance: Compliance Automation
                      </b>{" "}
                      ensures your business adheres to regulatory requirements.
                      Nexone Tech automates compliance checks, record-keeping,
                      and reporting, reducing the risk of non-compliance.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <b>
                        <i class="bii fas fa-check"></i>Efficient Records
                        Management: Records Storage and Retrieval
                      </b>{" "}
                      is simplified with Nexone Tech's low-code solutions. We
                      provide efficient methods for storing and retrieving
                      records, ensuring easy access and reducing administrative
                      overhead.
                    </p>

                    <div className="service-details-content pt-40">
                      <div className="service-page-title2">
                        <span>Ready to Optimize Your Operations?</span>
                      </div>
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          If you're ready to discuss your business process
                          automation project or have questions, our team is here
                          to assist you. Contact us today to initiate the
                          conversation.
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

            <BlogSidebar1 />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;
