import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const Mname = e.target.firstName.value;
    const Email = e.target.email.value;
    const Fon = e.target.phone.value;
    const Web = e.target.lastName.value;
    const YourMessage = e.target.yourMessage.value;

    if (Mname.trim() == "") {
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

    const firstName = e.target.firstName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const lastName = e.target.lastName.value;
    const yourMessage = e.target.yourMessage.value;

    let formData = {
      firstName: firstName,
      email: email,
      phone: phone,
      lastName: lastName,
      yourMessage: yourMessage,
    };

    axios
      .post(
        "https://api.codecolonies.com/api/CodupMail/CodupSendMail",
        formData
      )

      .then((response) => {
        if (response != null && response.data != null) {
          if (response.data.Success) {
            console.log(response.data.message);
          } else {
            console.log(response.data.message);
          }
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const [crumbs, setCrumbs] = useState(["Home", "contact us"]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2 pageName={"Contact Us"} crumbs={crumbs} selected={selected} />
      ;{/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h1 style={{ fontSize: "33px" }}>Get In Touch</h1>
                </div>
                <form onSubmit={handleSubmit} action="#" id="dreamit-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="yourMessage"
                          id="OurMessage"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          {" "}
                          <i className="bi bi-gear" /> Schedule Consultant
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h2 className="cont">Corporate Office Address</h2>
                    <p>
                      1214 - 1217, i-Square Corporate Park, Science City
                      Road,Ahmedabad - 380060 Gujarat - INDIA
                      <br />
                    </p>
                  </div>
                </div>

                <div className="cda-single-content hr d-flex">
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
                      href="https://www.linkedin.com/company/nexone-tech-private-limited/"
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
                        href="https://www.linkedin.com/company/nexone-tech-private-limited/"
                        style={{ color: "white" }}
                        target="_blank"
                      >
                        Nexone Tech Private Limited
                      </a>
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div>
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
export default Contact;
