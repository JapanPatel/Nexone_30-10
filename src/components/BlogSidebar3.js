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
          <h2>Reporting and Analytics Tools</h2>
        </div>
        <div className="catagory-item">
          <ul>
            <li className="hr-3">
              {/* <a href="/HRConsulting">HR Consulting</a> */}
              <Link legacyBehavior href="dashboard-design-creations.html">
                Dashboard Design and Creations
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/SalesConsulting">Sales Consulting</a> */}
              <Link legacyBehavior href="real-time-data-analytics.html">
                Real-time Data Analytics
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/MarketingConsulting">Marketing Consulting</a> */}
              <Link legacyBehavior href="interactive-data-visualization.html">
                Interactive Data Visualization
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/ProjectManagementConsulting">
                Project Management Consulting
              </a> */}
              <Link
                legacyBehavior
                href="embedded-analytics-in-applications.html"
              >
                Embedded Analytics in Applications
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget-items upp mb-40">
        <div className="widget-recent-post d-flex">
          <div className="rpost-thumb">
            <a href="dashboard-design-creation-casestudy.html">
              <img src="assets/images/resource/func/1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/talentacquisitionandmanagement">
                <h4>Talent Acquisition and Management</h4>
              </a> */}
              <Link
                legacyBehavior
                href="dashboard-design-creation-casestudy.html"
              >
                Dashboard Design and Creation
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="real-time-data-analytics-casestudy.html">
              <img src="assets/images/resource/func/2.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/hrtransformation">
                <h4>HR Transformation and Talent Management</h4>
              </a> */}
              <Link
                legacyBehavior
                href="real-time-data-analytics-casestudy.html"
              >
                Real-time Data Analytics
              </Link>
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="interactive-data-visualization-casestudy.html">
              <img src="assets/images/resource/func/3.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/marketingstrategy">
                <h4>Marketing Strategy and Implementation</h4>
              </a> */}
              <Link
                legacyBehavior
                href="interactive-data-visualization-casestudy.html"
              >
                Interactive Data Visualization
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="embedded-analytics-applications-casestudy.html">
              <img src="assets/images/resource/func/4.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/leadgenerationoptimization">
                <h4>Lead Generation Optimization</h4>
              </a> */}
              <Link
                legacyBehavior
                href="embedded-analytics-applications-casestudy.html"
              >
                Embedded Analytics in Applications
              </Link>
              <br />
              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="data-transformation-cleansing-casestudy3.html">
              <img src="assets/images/resource/func/5.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/costoptimization">
                <h4>Cost Optimization</h4>
              </a> */}
              <Link
                legacyBehavior
                href="data-transformation-cleansing-casestudy3.html"
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
            <a href="automated-data-loading-casestudy2.html">
              <img src="assets/images/resource/func/6.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/cashflowmanagement">
                <h4>Cash Flow Management</h4>
              </a> */}
              <Link
                legacyBehavior
                href="automated-data-loading-casestudy2.html"
              >
                Automated Data Loading
              </Link>
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
          <a style={{ color: "black" }}>HR</a>
          <a style={{ color: "black" }}>Sales</a>
          <a style={{ color: "black" }}>Marketing</a>
          <a style={{ color: "black" }}>Project</a>
          <a style={{ color: "black" }}>Management</a>
          <a style={{ color: "black" }}>Flexibility</a>
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
