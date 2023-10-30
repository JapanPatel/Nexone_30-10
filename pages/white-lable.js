import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";

const White = () => {
  const [crumbs, setCrumbs] = useState(["Home", "White Label Solutions"]);
  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <Layout>
      <Breadcumb2
        pageName={"White Label Solutions"}
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
                      Under this model, Nexone Tech opens the door to a world of
                      possibilities. We provide our cutting-edge low-code and
                      no-code solutions to IT companies, allowing them to
                      rebrand and resell these products under their own banner.
                    </p>
                    <h2 className="cont mt-5">
                      Why Choose White Label Solutions from Nexone Tech?
                    </h2>
                    <p>
                      <b>
                        <i class="bii fas fa-check"></i>Ready-Made Solutions:
                      </b>{" "}
                      Harness Nexone Tech's ready-made solutions, saving your IT
                      company valuable time and resources. Say goodbye to
                      extensive development efforts.
                      <br />
                    </p>

                    <p>
                      <b>
                        <i class="bii fas fa-check"></i>Rapid Diversification:
                      </b>{" "}
                      This model empowers IT companies to rapidly diversify
                      their product offerings, even if they lack in-house
                      development capabilities. Embrace new opportunities
                      confidently.
                      <br />
                    </p>
                  </div>
                </div>
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
export default White;
