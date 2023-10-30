import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const CaseStudies2 = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState(1);
  useEffect(() => {}, []);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current_menu_item" : "");

  return (
    <Fragment>
      <div className="row prtb-bg align-items-center">
        <div className="col-lg-4">
          <div className="consen-section-title pb-50">
            <p className="comtitle"> Open Jobs </p>
            <h2> Current available positions</h2>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="portfolio_nav">
            <div className="portfolio_menu">
              <ul className="menu-filtering">
                <li
                  className={`c-pointer ${activeBtn("1")}`}
                  onClick={handleFilterKeyChange("1")}
                >
                  {" "}
                  Software Development Division{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("2")}`}
                  onClick={handleFilterKeyChange("2")}
                >
                  {" "}
                  Data Integration and Analytics Division{" "}
                </li>
                <li
                  className={`c-pointer ${activeBtn("3")}`}
                  onClick={handleFilterKeyChange("3")}
                >
                  {" "}
                  Consulting Division{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {filterKey == 1 && (
        <div className="row image_load">
          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/software division/software-developer.svg"
                  alt="Software Developer"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="software-developer-job.html">
                          <a> Software Developer (Low-Code/No-Code)</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="software-developer-job.html">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/software division/front-end-developer.svg"
                  alt="Front-End Developer"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="front-end-developer-job.html"
                        >
                          <a> Front-End Developer </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="front-end-developer-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry physics">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/software division/back-end-developer.svg"
                  alt="Back-End Developer"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="back-end-developer-job.html">
                          <a> Back-End Developer</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="back-end-developer-job.html">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/software division/quality-assurance.svg"
                  alt="Quality Assurance"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="quality-assurance-engineer-job.html"
                        >
                          <a> Quality Assurance Engineer</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="quality-assurance-engineer-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
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
          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/data division/data-integration.svg"
                  alt="Data Integration"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-integration-specialist-job.html"
                        >
                          <a> Data Integration Specialist </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="data-integration-specialist-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/data division/data-analyst.svg"
                  alt="Data Analyst"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="data-analyst-job.html">
                          <a> Data Analyst </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="data-analyst-job.html">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry physics">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/data division/business-intelligence.svg"
                  alt="Business Intelligence"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="business-intelligence-developer-job.html"
                        >
                          <a> Business Intelligence Developer</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="business-intelligence-developer-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/data division/data-engineer.svg"
                  alt="Data Engineer"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link legacyBehavior href="data-engineer-job.html">
                          <a> Data Engineer</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link legacyBehavior href="data-engineer-job.html">
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
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
          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/consulting division/customer-success.svg"
                  alt="Customer Success Manager"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="customer-success-manager-job.html"
                        >
                          <a> Customer Success Manager</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="customer-success-manager-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/consulting division/implementation-consultant.svg"
                  alt="Implementation Consultant"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="implementation-consultant-job.html"
                        >
                          <a> Implementation Consultant </a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="implementation-consultant-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 grid-item chemistry physics">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/consulting division/solutions-architect.svg"
                  alt="Solutions Architect"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="solutions-architect-job.html"
                        >
                          <a> Solutions Architect</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="solutions-architect-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 grid-item physics math">
            <div className="single-portfolio">
              <div className="portfolio-thumb">
                <img
                  src="assets/images/project/consulting division/business-consultant.svg"
                  alt="Business Consultant"
                />
                <div className="portfolio-content">
                  <div className="portfolio-content-inner">
                    <div className="portfolio-title">
                      <h3>
                        {" "}
                        <Link
                          legacyBehavior
                          href="business-consultant-job.html"
                        >
                          <a> Business Consultant</a>
                        </Link>{" "}
                      </h3>
                      <h6 className="car">
                        {" "}
                        <Link
                          legacyBehavior
                          href="business-consultant-job.html"
                        >
                          <a>Apply Now</a>
                        </Link>{" "}
                      </h6>
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
export default CaseStudies2;
