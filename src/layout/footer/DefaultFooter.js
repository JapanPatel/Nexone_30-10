import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DefaultFooter = () => {
  const [email, setEmail] = useState("");

  function submit() {
    if (email !== "" && email !== undefined && email !== null) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        let formvalue = {
          email: email,
        };

        axios
          .post(
            "https://api.codecolonies.com/api/CodupMail/GetInsightsSendMail",
            null,
            { params: { email } }
          )

          .then((response) => {
            debugger;
            if (response.status === 200) {
              if (response != null && response.data != null) {
                if (response.data.success) {
                  toast.success(
                    "Thank you for showing intrest in our insights ",
                    { theme: "colored" }
                  );
                } else {
                  toast.success("Something Went Wrong!!");
                }
              }
            }
          })

          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  return (
    <div className="footer-middle style-two">
      <div className="container">
        <div className="footer-bg">
          <div className="row">
            <div className="col-lg-5 col-sm-6">
              <div className="widget widgets-company-info mb-4 mb-lg-0">
                <div className="widget-nav-menu pr-2">
                  <span className="widget-title"> About Us </span>
                  <p className="my">
                    Nexone's unwavering commitment is to redefine the tech
                    sector by pioneering cutting-edge low-code and no-code
                    solutions, ushering in a new era of simplicity and agility
                    in digital transformation.With a rich 12-year history of
                    achievement and a track record of success, we proudly serve
                    as your premier low-code, no-code platform partner,
                    dedicated to propelling businesses to thrive in the digital
                    age.
                  </p>
                </div>
                <div className="follow-company-icon">
                  <a
                    className="social-icon-color"
                    href="https://www.linkedin.com/company/nexone-tech-private-limited/"
                    target="_blank"
                  >
                    {" "}
                    <i class="fab fa-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="widget widget-nav-menu">
                <span className="widget-title">Company</span>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu my">
                    <li>
                      <Link legacyBehavior href="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="about.html">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="contact.html">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="widget widget-nav-menu">
                <span className="widget-title"> Services </span>
                <div className="menu-quick-link-content">
                  <ul className="footer-menu my">
                    <li>
                      <Link legacyBehavior href="application-development.html">
                        Application Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="business-process-automation.html"
                      >
                        Business Process Automation
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="data-integration-solutions.html"
                      >
                        Data Integration Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        legacyBehavior
                        href="reporting-analytics-tools.html"
                      >
                        Reporting and Analytics Tools
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div id="em-recent-post-widget" className="mt-5 mt-sm-0">
                <div className="single-widget-item">
                  <span className="widget-title pb-2">Get Insights</span>
                  <div className="contact-form-footer ">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="subscribe_form">
                        <input
                          type="email"
                          className="form-control"
                          required
                          placeholder="Enter E-Mail"
                          onChange={(x) => setEmail(x.target.value)}
                        />
                        <button
                          type="submit"
                          className="btn"
                          onClick={(e) => submit()}
                        >
                          {" "}
                          <i className="bi bi-send-check" />
                        </button>
                      </div>
                      <div className="subscribe_form_send"></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foorer-shape">
            <div className="footer-thumb">
              <img src="assets/images/resource/red-dot.png" alt="" />
            </div>
            <div className="footer-thumb1 bounce-animate2">
              <img src="assets/images/resource/all-shape.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom-area d-flex align-items-center"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className="consen-logo">
                <Link legacyBehavior href="/">
                  <a className="logo_thumb" title="consen">
                    <img
                      src="assets/images/logo-color.svg"
                      alt="logo"
                      style={{ width: "140px" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-8">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>
                    <span>Designed By: NEXONE</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default DefaultFooter;
