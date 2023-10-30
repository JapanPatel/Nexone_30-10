import { useEffect } from "react";
import { calender } from "../utils";
import Link from "next/link";
const BlogSidebar = () => {
  useEffect(() => {
    return () => {
      calender();
    };
  }, []);
  return (
    <div className="col-lg-4 col-md-8">
      <div className="widget-items mb-40">
        <div className="widget-title">
          <h2>Data Integration Solutions</h2>
        </div>
        <div className="catagory-item">
          <ul>
            <li className="hr-3">
              {/* <a href="/OperationsManagement">Operations Management</a> */}
              <Link legacyBehavior href="data-source-integration.html">
                Data Source Integration
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/LegalandComplianceConsulting">
                Legal and Compliance Consulting
              </a> */}
              <Link legacyBehavior href="data-transformation-cleansing.html">
                Data Transformation and Cleansing
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/DigitalTransformationConsulting">
                Digital Transformation Consulting
              </a> */}
              <Link legacyBehavior href="automated-data-loading.html">
                Automated Data Loading
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/CommunicationConsulting">Communication Consulting</a> */}
              <Link legacyBehavior href="data-warehouse-automation.html">
                Data Warehouse Automation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget-items upp mb-40">
        <div className="widget-recent-post d-flex">
          <div className="rpost-thumb">
            <a href="data-source-integration-casestudy.html">
              <img src="assets/images/resource/opti/1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/cloudmigration">
                <h4>Cloud Migration</h4>
              </a> */}
              <Link
                legacyBehavior
                href="data-source-integration-casestudy.html"
              >
                Data Source Integration
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="data-warehouse-automation-casestudy1.html">
              <img src="assets/images/resource/opti/2.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/iTinfrastructureoptimization">
                <h4>IT Infrastructure Optimization</h4>
              </a> */}
              <Link
                legacyBehavior
                href="data-warehouse-automation-casestudy1.html"
              >
                Data Warehouse Automation
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="data-transformation-cleansing-casestudy.html">
              <img src="assets/images/resource/opti/3.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/legalandregulatorycompliance">
                <h4>Legal and Regulatory Compliance</h4>
              </a> */}
              <Link
                legacyBehavior
                href="data-transformation-cleansing-casestudy.html"
              >
                Data Transformation and Cleansing
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="automated-data-loading-casestudy.html">
              <img src="assets/images/resource/opti/4.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/complianceassessments">
                <h4>Compliance Assessments and Remediation</h4>
              </a> */}
              <Link legacyBehavior href="automated-data-loading-casestudy.html">
                Automated Data Loading
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="data-transformation-cleansing-casestudy2.html">
              <img src="assets/images/resource/opti/5.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/frameworkdevelopment">
                <h4>Compliance Framework Development and Risk Assessment </h4>
              </a> */}
              <Link
                legacyBehavior
                href="data-transformation-cleansing-casestudy2.html"
              >
                Data Transformation and Cleansing
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="data-warehouse-automation-casestudy2.html">
              <img src="assets/images/resource/opti/6.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/financialplanningandanalysis">
                <h4>Financial Planning and Analysis</h4>
              </a> */}
              <Link
                legacyBehavior
                href="data-warehouse-automation-casestudy2.html"
              >
                Data Warehouse Automation
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-items mb-40">
        <div className="widget-title">
          <h2>Tag Cloud</h2>
        </div>
        <div className="tag-item">
          <a style={{ color: "black" }}>Operations</a>
          <a style={{ color: "black" }}>Legal</a>
          <a style={{ color: "black" }}>Compliance</a>
          <a style={{ color: "black" }}>Digital</a>
          <a style={{ color: "black" }}>Communication</a>
          <a style={{ color: "black" }}>Risk</a>
        </div>
      </div>

      <div className="widget-items widget-archieve mb-40">
        <div className="widget-title">
          <h2>Related Posts</h2>
        </div>
        <p className="hr-3">
          <a
            className="widget-archieve-item"
            target="_blank"
            href="https://www.linkedin.com/posts/nexone-tech-private-limited_nexonesolutions-innovationatspeed-lowcodedevelopment-activity-7113383692986695680-wkEG?utm_source=share&utm_medium=member_desktop"
          >
            Elevate Your Business with Nexone!
          </a>{" "}
        </p>
        <p className="hr-3">
          <a
            className="widget-archieve-item"
            target="_blank"
            href="https://www.linkedin.com/posts/nexone-tech-private-limited_lowcode-nocode-digitalinnovation-activity-7112340871928291328-fMV1?utm_source=share&utm_medium=member_desktop"
          >
            Innovative low-code no-code platform
          </a>{" "}
        </p>
        <p className="hr-3">
          <a
            className="widget-archieve-item"
            target="_blank"
            href="https://www.linkedin.com/posts/nexone-tech-private-limited_nexonesolutions-innovationatspeed-lowcodedevelopment-activity-7112670511184175104-rtvd?utm_source=share&utm_medium=member_desktop"
          >
            Nexone's cutting-edge solutions
          </a>{" "}
        </p>
        <p className="hr-3">
          <a
            className="widget-archieve-item"
            target="_blank"
            href="https://www.linkedin.com/posts/nexone-tech-private-limited_lowcode-nocode-digitalinnovation-activity-7112340871928291328-fMV1?utm_source=share&utm_medium=member_desktop"
          >
            Innovative low-code no-code platform
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
export default BlogSidebar;
