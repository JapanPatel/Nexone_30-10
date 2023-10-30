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
          <h2>Business Process Automation</h2>
        </div>
        <div className="catagory-item">
          <ul>
            <li className="hr-3">
              {/* <a href="/StrategyConsulting">Strategy Consulting</a> */}
              <Link legacyBehavior href="workflow-automation.html">
                Workflow Automation
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/MergerandAcquisitionConsulting">
                Merger and Acquisition Consulting
              </a> */}
              <Link legacyBehavior href="data-entry-processing-automation.html">
                Data Entry and Processing Automation
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/PrivateEquityConsulting">Private Equity Consulting</a> */}
              <Link
                legacyBehavior
                href="document-management-workflow-automation.html"
              >
                Document Management and Workflow Automation
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/ValuationConsulting">Valuation Consulting</a> */}
              <Link legacyBehavior href="compliance-records-management.html">
                Compliance and Records Management
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget-items upp mb-40">
        <div className="widget-recent-post d-flex">
          <div className="rpost-thumb">
            <a href="startup-success-casestudy.html">
              <img src="assets/images/resource/Stra/1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/strategicmergersacquistions">
                <h4>Strategic Mergers and Acquisitions
              </a> */}
              <Link legacyBehavior href="startup-success-casestudy.html">
                Startup-Success
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="emerging-it-company-casestudy.html">
              <img src="assets/images/resource/Stra/2.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/strategicacquisition">
                Strategic Acquisition
              </a> */}
              <Link legacyBehavior href="emerging-it-company-casestudy.html">
                Emerging IT Company
              </Link>
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="compliance-records-managements-casestudy1.html">
              <img src="assets/images/resource/Stra/3.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/strategicalliance">
                Strategic Alliance
              </a> */}
              <Link
                legacyBehavior
                href="compliance-records-managements-casestudy1.html"
              >
                Compliance and Records Management
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="workflow-automation-casestudy.html">
              <img src="assets/images/resource/Stra/4.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/strategyexecution">
                Strategy & Execution
              </a> */}
              <Link legacyBehavior href="workflow-automation-casestudy.html">
                Workflow Automation
              </Link>
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="data-entry-automation-casestudy.html">
              <img src="assets/images/resource/Stra/5.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/strategydigitaltransformation">
                Strategy & Digital Transformation 
              </a> */}
              <Link legacyBehavior href="data-entry-automation-casestudy.html">
                Data Entry and Processing Automation
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="compliance-records-management-casestudy2.html">
              <img src="assets/images/resource/Stra/6.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/strategymanagementconsulting">
                Strategy & Management Consulting
              </a> */}
              <Link
                legacyBehavior
                href="compliance-records-management-casestudy2.html"
              >
                <a> Compliance and Records Management</a>
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
          <a style={{ color: "black" }}>Strategy</a>
          <a style={{ color: "black" }}>Merger</a>
          <a style={{ color: "black" }}>Valuation</a>
          <a style={{ color: "black" }}>Monitoring</a>
          <a style={{ color: "black" }}>Evaluation</a>
          <a style={{ color: "black" }}>Equity</a>
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
