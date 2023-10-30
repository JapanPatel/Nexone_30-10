import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const CaseStudies = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState(1);
  useEffect(() => {}, []);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");
  return (
    <Fragment>
      <div className="row case-study-bg">
        <div className="col-lg-12">
          <div className="consen-section-title upper text-center pb-50">
            <p className="comtitle"> Real-world success stories </p>
            <h1 style={{ fontSize: "33px" }}>
              {" "}
              Witness our finest <br />
              <span> accomplishments </span>{" "}
            </h1>
          </div>
        </div>
        <div className="portfolio-shape">
          <div className="port-shape-thumb rotateme">
            <img src="assets/images/resource/red-dot.png" alt />
          </div>
          <div className="port-shape-thumb2 bounce-animate2">
            <img src="assets/images/resource/all-shape6.png" alt />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="portfolio_nav">
            <div className="portfolio_menu">
              <ul className="menu-filtering">
                <li
                  className={`c-pointer ${activeBtn(1)}`}
                  onClick={handleFilterKeyChange(1)}
                >
                  {" "}
                  Application Development{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn(2)}`}
                  onClick={handleFilterKeyChange(2)}
                >
                  {" "}
                  Business Process Automation{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn(3)}`}
                  onClick={handleFilterKeyChange(3)}
                >
                  {" "}
                  Data Integration Solutions{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn(4)}`}
                  onClick={handleFilterKeyChange(4)}
                >
                  {" "}
                  Reporting And Analytics Tools{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {filterKey == 1 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/organization/1.svg"
                  alt="It Software Casestudies"
                />

                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Application Development </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="mobile-app-development-casestudy1.html"
                        >
                          <a> Mobile App Development </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/organization/2.svg"
                  alt="Management Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study2.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Application Development </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="custom-application-development-casestudy1.html"
                        >
                          <a> Custom Application Development </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/organization/3.svg"
                  alt="Business Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study3.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Application Development </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="custom-application-development-casestudy2.html"
                        >
                          <a> Custom Application Development</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/organization/4.svg"
                  alt="Management Consulting Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Application Development </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="mobile-app-development-casestudy2.html"
                        >
                          <a> Mobile App Development</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/organization/5.svg"
                  alt="Startup Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Application Development </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="web-application-development-casestudy.html"
                        >
                          <a> Web Application Development </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/organization/6.svg"
                  alt="Startup Consulting Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Application Development </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="cloud-based-application-development-casestudy.html"
                        >
                          <a> Cloud-Based Application Development</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 2 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/strategic/1.svg"
                  alt="Strategic Merger Casestudies"
                />

                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Business Process Automation</h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="startup-success-casestudy.html"
                        >
                          <a> Startup-Success </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/strategic/2.svg"
                  alt="Strategic Acquisition Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Business Process Automation</h6>

                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="emerging-it-company-casestudy.html"
                        >
                          <a> Emerging IT Company </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/strategic/3.svg"
                  alt="Strategic Alliance Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Business Process Automation</h6>

                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="compliance-records-managements-casestudy1.html"
                        >
                          <a> Compliance and Records Management</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/strategic/4.svg"
                  alt="Strategic Execution Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Business Process Automation</h6>

                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="workflow-automation-casestudy.html"
                        >
                          <a> Workflow Automation</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/strategic/5.svg"
                  alt="Strategic Digital Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Business Process Automation</h6>

                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-entry-automation-casestudy.html"
                        >
                          <a> Data Entry and Processing Automation </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/strategic/6.svg"
                  alt="Strategic Management Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Business Process Automation</h6>

                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="compliance-records-management-casestudy2.html"
                        >
                          <a> Compliance and Records Management</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 3 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/optimization/1.svg"
                  alt="Cloud Migration Casestudies"
                />

                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Data Integration Solutions </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-source-integration-casestudy.html"
                        >
                          <a>Data Source Integration </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/optimization/2.svg"
                  alt="Infrastructure Optimization Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study2.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Data Integration Solutions </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-warehouse-automation-casestudy1.html"
                        >
                          <a> Data Warehouse Automation </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/optimization/3.svg"
                  alt="Legal Compliance Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study3.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Data Integration Solutions </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-transformation-cleansing-casestudy.html"
                        >
                          <a> Data Transformation and Cleansing</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/optimization/4.svg"
                  alt="Compliance Assessments Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Data Integration Solutions </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="automated-data-loading-casestudy.html"
                        >
                          <a> Automated Data Loading</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/optimization/5.svg"
                  alt="Framework Development Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Data Integration Solutions </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-transformation-cleansing-casestudy2.html"
                        >
                          <a> Data Transformation and Cleansing </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/optimization/6.svg"
                  alt="Financial Planning Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Data Integration Solutions </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-warehouse-automation-casestudy2.html"
                        >
                          <a> Data Warehouse Automation</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {filterKey == 4 && (
        <div className="row image_load">
          <div className="col-lg-4 col-md-6 grid-item physics english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/functional/1.svg"
                  alt="Talent Acquisition Casestudies"
                />

                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Reporting And Analytics Tools </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="dashboard-design-creation-casestudy.html"
                        >
                          <a> Dashboard Design and Creation </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item physics chemistry math">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/functional/2.svg"
                  alt="HR Transformation Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Reporting And Analytics Tools </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="real-time-data-analytics-casestudy.html"
                        >
                          <a> Real-time Data Analytics </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 grid-item math english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/functional/3.svg"
                  alt="Lead Generation Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study4.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Reporting And Analytics Tools </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="interactive-data-visualization-casestudy.html"
                        >
                          <a> Interactive Data Visualization</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item math physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/functional/4.svg"
                  alt="Cost Optimization Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study5.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Reporting And Analytics Tools </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="embedded-analytics-applications-casestudy.html"
                        >
                          <a> Embedded Analytics in Applications </a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry physics">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/functional/5.svg"
                  alt="Cash Flow Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Reporting And Analytics Tools </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-transformation-cleansing-casestudy3.html"
                        >
                          <a> Data Transformation and Cleansing</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 grid-item chemistry english">
            <div className="case-study-single-box">
              <div className="case-study-thumb2">
                <img
                  src="assets/images/project/functional/6.svg"
                  alt="Marketing Strategy Casestudies"
                />
                {/* port icon */}
                <div className="single_portfolio_icon">
                  <a
                    className="portfolio-icon venobox vbox-item"
                    data-gall="myportfolio"
                    href="assets/images/project/study6.png"
                  >
                    {/* <i className="bi bi-card-image" /> */}
                  </a>
                </div>
                <div className="case-study-content">
                  <div className="case-study-content-inner">
                    <div className="case-study-title">
                      <h6> Reporting And Analytics Tools </h6>
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="automated-data-loading-casestudy2.html"
                        >
                          <a> Automated Data Loading</a>
                        </Link>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default CaseStudies;
