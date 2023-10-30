import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "-" : "+"),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____">
      <div className="mobile-menu mean-container ">
        <div className="mean-bar">
          <div className="logo">
            <Link legacyBehavior href="/">
              <a className="logo_img" title="consen">
                <img
                  src="assets/images/logo-white.png"
                  alt="logo"
                  className="img_fluid"
                  style={{
                    width: "113px",
                  }}
                />
              </a>
            </Link>
            <Link legacyBehavior href="/">
              <a className="main_sticky" title="consen">
                <img
                  src="assets/images/logo-color.png"
                  alt="logo"
                  className="img_fluid"
                  style={{ width: "113px" }}
                />
              </a>
            </Link>
          </div>
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}
            >
              <li>
                <a></a>
                <Link legacyBehavior href="/">
                  Home
                </Link>
                <ul className="sub-menu" style={activeLi("Home")}></ul>
              </li>
              <li>
                <a href="#">Company </a>
                <ul className="sub-menu" style={activeLi("Company")}>
                  <li>
                    <Link legacyBehavior href="about.html">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link legacyBehavior href="">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="career.html">
                      Career
                    </Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Company")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Company")}
                </a>
              </li>
              <li>
                <a href="services.html">Services </a>
                <ul className="sub-menu" style={activeLi("Services")}>
                  {" "}
                  <li>
                    <Link legacyBehavior href="application-development.html">
                      Application Development
                    </Link>
                  </li>{" "}
                  <li>
                    <Link
                      legacyBehavior
                      href="business-process-automation.html"
                    >
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
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Services")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Services")}
                </a>
              </li>
              <li>
                <Link legacyBehavior href="casestudies.html">
                  Stories
                </Link>
              </li>

              <li className="mean-last">
                <Link legacyBehavior href="contact.html">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};
export default MobileMenu;
