import BlogSidebar3 from "@/src/components/BlogSidebar3";
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
    "Reporting and Analytics Tools Services",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      {/* <Breadcumb1 pageName={"Functional Consulting Service"} /> */}
      <Breadcumb2
        pageName={"Reporting and Analytics Tools Services"}
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
                    src="assets/images/resource/report-analytics-services.svg"
                    alt="Report Analytics Tools Services"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-content-text text-left">
                    <div class="consen-section-title">
                      <h1 className="serall">
                        Empowering IT Decision-Making with No-Code and Low-Code
                        Analytics
                      </h1>
                    </div>
                    {/* <b className="mt-40 mb-0">
                      <span className="allservice"></span> Unlocking
                      Possibilities in Application Development
                    </b> */}
                    <p style={{ textAlign: "justify" }}>
                      In today's rapidly evolving IT landscape, data is king,
                      and the ability to harness its power is essential. Nexone
                      Tech Private Limited specializes in Reporting and
                      Analytics Tools, offering no-code and low-code solutions
                      that empower IT professionals to make data-driven
                      decisions efficiently.{" "}
                    </p>

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
                      Dashboard Design and Creation: Visualize Data with Ease
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>Our no-code and low-code
                      dashboard design tools redefine the way IT professionals
                      approach data visualization. With our intuitive no-code
                      interface, users can create interactive dashboards without
                      the need for extensive coding. The drag-and-drop
                      functionality allows for the seamless arrangement of
                      elements, while low-code options provide customization for
                      more complex requirements. These dashboards enable IT
                      teams to monitor system performance, track key metrics,
                      and visualize data trends effortlessly.
                    </p>
                    <div className="block-quote">
                      <div class="consen-section-title ">
                        <h2 className="helloo">
                          Choose Nexone Tech for Reporting and Analytics Tools:
                        </h2>
                      </div>
                      <p>
                        <i class="bii fas fa-check"></i>Efficiency
                      </p>
                      <p>
                        <i class="bii fas fa-check"></i>Customization
                      </p>
                      <p>
                        <i class="bii fas fa-check"></i>User-Centric
                      </p>
                      <p>
                        <i class="bii fas fa-check"></i>Actionable Insights
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
                      Real-time Data Analytics: Act on Insights as They Happen
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>Nexone Tech's no-code and
                      low-code real-time data analytics solutions empower IT
                      professionals to analyze data as it streams in. The
                      no-code interface offers a range of predefined analytical
                      functions, while low-code options provide the flexibility
                      to develop custom analytics. With real-time analytics, IT
                      teams can detect anomalies, respond to issues promptly,
                      and make informed decisions on the fly.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">3. </span>
                      Interactive Data Visualization: Explore and Present Data
                      Visually
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>Our no-code and low-code
                      interactive data visualization tools simplify the process
                      of exploring and presenting data visually. No-code options
                      include templates for common visualizations, while
                      low-code allows for the creation of custom visualizations
                      to meet specific needs. These tools enhance data
                      exploration capabilities, enabling IT professionals to
                      gain deeper insights from their data and communicate those
                      insights effectively.
                    </p>

                    <b
                      className="mt-40 mb-0"
                      style={{ color: "black", fontSize: "18px" }}
                    >
                      <span className="allservice">4. </span>
                      Embedded Analytics in Applications: Seamlessly Integrate
                      Insights
                    </b>
                    <p style={{ textAlign: "justify" }}>
                      <i class="bii fas fa-check"></i>Nexone Tech's no-code and
                      low-code solutions make it possible for IT teams to embed
                      analytics directly within their applications. The no-code
                      interface offers pre-built widgets for common analytics
                      functions, while low-code empowers IT professionals to
                      integrate custom analytics seamlessly. This functionality
                      empowers IT professionals to deliver actionable insights
                      within applications, enhancing user experiences and
                      enabling data-driven decision-making.
                    </p>

                    <div className="service-page-title2">
                      <span>Benefits</span>
                    </div>
                    <div className="widget-service-details-icon">
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Efficient Data Visualization </span>
                      </p>
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Real-time Insights </span>
                      </p>{" "}
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Enhanced Data Exploration </span>
                      </p>{" "}
                      <p>
                        <i className="bi bi-check-lg" />{" "}
                        <span> Seamless Integration </span>
                      </p>
                    </div>

                    <div className="service-details-content pt-40">
                      <div className="serivce-details-desc">
                        <p className="pb-25" style={{ textAlign: "justify" }}>
                          With Nexone Tech's Reporting and Analytics Tools, your
                          IT department can harness the power of data without
                          the need for extensive coding. These no-code and
                          low-code solutions empower IT professionals to create
                          interactive dashboards, gain real-time insights,
                          explore data visually, and deliver actionable insights
                          within applications, driving efficiency and informed
                          decision-making.
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

            <BlogSidebar3 />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default BlogDetails;
