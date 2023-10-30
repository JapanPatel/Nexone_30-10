import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const Consulting = () => {
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Consulting and Implementation Services",
  ]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"Consulting and Implementation Services"}
        crumbs={crumbs}
        selected={selected}
      />
      ;{/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  {/* <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div> */}
                  <div className="cda-content-inner">
                    <p>
                      Nexone Tech extends its hand in partnership through
                      comprehensive consulting services. We assist IT companies
                      in identifying strategic opportunities for deploying
                      low-code and no-code solutions effectively.
                    </p>
                    <h2 className="cont mt-5">Our Value Proposition:</h2>
                    <p>
                      <b>
                        <i class="bii fas fa-check"></i>End-to-End Support:
                      </b>{" "}
                      We offer end-to-end support, ensuring the seamless
                      implementation and customization of our solutions.
                      Tailored precision meets your specific business needs.
                      <br />
                    </p>

                    <p>
                      <b>
                        <i class="bii fas fa-check"></i>Expertise Unleashed:
                      </b>{" "}
                      Leverage Nexone Tech's proficiency to optimize your
                      processes with cutting-edge low-code and no-code
                      technologies. Our guidance is your competitive edge.
                      <br />
                    </p>
                  </div>
                </div>

                {/* <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h2 className="cont">Our Email Address</h2>
                    <p>
                      Requirement Submission: &nbsp;
                      <a
                        href="mailto:consulting@codup.tech"
                        style={{ color: "white" }}
                      >
                        consulting@codup.tech
                      </a>
                      <br />
                      Inquiry / Further Information: &nbsp;
                      <a
                        href="mailto:connect@codup.tech"
                        style={{ color: "white" }}
                      >
                        connect@codup.tech
                      </a>
                      <br />
                    </p>
                  </div>
                </div>

                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <a
                      className="social-icon-color"
                      href="https://www.linkedin.com/company/codup-technologies-pvt-ltd/mycompany/?viewAsMember=true"
                      target="_blank"
                    >
                      {" "}
                      <i class="fab fa-linkedin"></i>{" "}
                    </a>
                  </div>
                  <div className="cda-content-inner">
                    <h2 className="cont">Our Linkedin Id </h2>
                    <p>
                      <a
                        href="https://www.linkedin.com/company/codup-technologies-pvt-ltd/mycompany/?viewAsMember=true"
                        style={{ color: "white" }}
                        target="_blank"
                      >
                        Codup Technologies Private Limited
                      </a>
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div> */}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d14682.867984363622!2d72.5177023!3d23.0708348!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x405e432f450ae705%3A0xb81cc59f6bcf1cd9!2sCodup%20Technologies%20Private%20Limited%2C%20i%20Square%20Corporate%20Park%2C%201214%20-%2017%2C%20Science%20City%20Rd%2C%20Science%20City%2C%20Panchamrut%20Bunglows%20II%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!3m2!1d23.0708348!2d72.5177023!5e0!3m2!1sen!2sin!4v1688985707442!5m2!1sen!2sin"
                width={1920}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Consulting;
