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
          <h2>Application Development</h2>
        </div>
        <div className="catagory-item">
          <ul>
            <li className="hr-3">
              {/* <a href="/StartupConsulting">Start-up Consulting</a> */}
              <Link legacyBehavior href="custom-application-development.html">
                Custom Application Development
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/BusinessConsulting">Business Consulting</a> */}
              <Link legacyBehavior href="mobile-app-development.html">
                Mobile App Development
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/ManagementConsulting">Management Consulting</a> */}
              <Link legacyBehavior href="web-application-development.html">
                Web Application Development
              </Link>
            </li>
            <li className="hr-3">
              {/* <a href="/ItandSoftwareConsulting">It and Software Consulting</a> */}
              <Link
                legacyBehavior
                href="cloud-based-application-development.html"
              >
                Cloud-Based Application Development
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="widget-items upp mb-40">
        <div className="widget-recent-post d-flex">
          <div className="rpost-thumb">
            <a href="mobile-app-development-casestudy1.html">
              <img src="assets/images/resource/Orga/1.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/itsoftware">
                <h4>IT and Software Consulting</h4>
              </a> */}
              <Link
                legacyBehavior
                href="mobile-app-development-casestudy1.html"
              >
                Mobile App Development
              </Link>
              <br />

              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="custom-application-development-casestudy1">
              <img src="assets/images/resource/Orga/2.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/management1">
                <h4>Management Consulting</h4>
              </a> */}
              <Link
                legacyBehavior
                href="custom-application-development-casestudy1"
              >
                Custom Application Development
              </Link>
              <br />

              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="custom-application-development-casestudy2.html">
              <img src="assets/images/resource/Orga/3.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/business">
                <h4>Business Consulting</h4>
              </a> */}
              <Link
                legacyBehavior
                href="custom-application-development-casestudy2.html"
              >
                Custom Application Development
              </Link>
              <br />

              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="mobile-app-development-casestudy2.html">
              <img src="assets/images/resource/Orga/4.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/management2">
                <h4>Management Consulting</h4>
              </a> */}
              <Link
                legacyBehavior
                href="mobile-app-development-casestudy2.html"
              >
                Mobile App Development
              </Link>
              <br />

              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="web-application-development-casestudy.html">
              <img src="assets/images/resource/Orga/5.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/startup1">
                <h4>Start-up Consulting </h4>
              </a> */}
              <Link
                legacyBehavior
                href="web-application-development-casestudy.html"
              >
                Web Application Development
              </Link>
              <br />

              <span>Case Study</span>
            </div>
          </div>
        </div>
        <div className="widget-recent-post d-flex hr-3">
          <div className="rpost-thumb">
            <a href="cloud-based-application-development-casestudy.html">
              <img src="assets/images/resource/Orga/6.png" alt="post thumb" />
            </a>
          </div>
          <div className="rpost-content">
            <div className="rpost-title">
              {/* <a href="/startup2">
                <h4>Start-up Consulting </h4>
              </a> */}
              <Link
                legacyBehavior
                href="cloud-based-application-development-casestudy.html"
              >
                Cloud-Based Application Development
              </Link>
              <br />

              <span>Case Study</span>
            </div>
          </div>
        </div>
      </div>
      <div className="widget-items mb-40">
        <div className="widget-title">
          <h2>Consulting Focus</h2>
        </div>
        <div className="tag-item">
          <a style={{ color: "black" }}>Start-Up</a>
          <a style={{ color: "black" }}>Business</a>
          <a style={{ color: "black" }}>Management</a>
          <a style={{ color: "black" }}>IT-Software</a>
          <a style={{ color: "black" }}>Expertise</a>
          <a style={{ color: "black" }}>Planning</a>
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
