import Link from "next/link";
import Router, { useRouter } from "next/router";
export const DaskTopMenusMenus = () => {
  const Router = useRouter();
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <Link legacyBehavior href="/">
          Home
        </Link>
      </li>{" "}
      <li>
        <a href="#">
          Company{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="about.html">
              About Us
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="">
              Our Team
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="career.html">
              Career
            </Link>
          </li>{" "}
        </ul>
      </li>{" "}
      <li>
        <a href="services.html">
          Services{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="application-development.html">
              Application Development
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="business-process-automation.html">
              Business Process Automation
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="data-integration-solutions.html">
              Data Integration Solutions
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="reporting-analytics-tools.html">
              Reporting and Analytics Tools
            </Link>
          </li>{" "}
        </ul>
      </li>{" "}
      <li>
        <Link legacyBehavior href="casestudies.html">
          Stories
        </Link>
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact.html">
          Contact
        </Link>
      </li>
    </ul>
  );
};
