import Link from "next/link";
import { Fragment, useState } from "react";
import { DaskTopMenusMenus } from "./Menus";

const LandingHeader = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div id="sticky-header" className="consen_nav_manu header____">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a className="logo_img" title="consen">
                    <img
                      src="assets/images/logo-white.png"
                      alt="logo"
                      className="img_fluid"
                      style={{ width: "140px" }}
                    />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="main_sticky" title="consen">
                    <img
                      src="assets/images/logo-white.png"
                      alt="logo"
                      style={{ width: "140px" }}
                      className="img_fluid"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9 pl-0 pr-0">
              <nav className="consen_menu">
                <DaskTopMenusMenus />
                <div className="header-button">
                  <Link legacyBehavior href="contact.html">
                    <a>Schedule Consultation</a>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default LandingHeader;
