import React from "react";
import { useRouter } from "next/router";

const breadcrumb = {
  position: "absolute",
  top: "-1px",
  left: "30px",
  color: "white",
  textdecoration: "none",
  fontsize: "30px",
};

var AllSystemBreadCrumb = {
  Home: "Home",
  "services.html": "services",
  "application-development.html": "Application Development Services",
  "data-integration-solutions.html": "Data Integration Solutions Services",
  "business-process-automation.html": "Business Process Automation Services",
  "reporting-analytics-tools.html": "Reporting and Analytics Tools Services",
  casestudies: "Application Development",
  casestudies1: "Business Process Automation",
  casestudies2: "Data Integration Solutions",
  casestudies3: "Reporting And Analytics Tools",
};

function getURLFromData(val) {
  const result = Object.entries(AllSystemBreadCrumb).reduce(
    (accum, current) => {
      const [key, value] = current;

      // let x = value.match(val);

      let x = value === val ? true : false;
      let newValue;

      if (x === true) {
        if (key.includes("1")) {
          newValue = key.replace("1", "");
        } else if (key.includes("2")) {
          newValue = key.replace("2", "");
        } else if (key.includes("3")) {
          newValue = key.replace("3", "");
        } else newValue = key;

        return [...accum, newValue];
      }
      return [...accum];
    },
    []
  );
  return result;
}

function Breadcumb2(props) {
  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  const router = useRouter();

  function clickme(value) {
    let URLUpdated = getURLFromData(value);

    props.selected(value);
    if (value !== "Home") {
      router.push("/" + URLUpdated[0]);
    } else {
      router.push("/");
    }
  }
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0) + str[i].slice(1);
    }
    return str.join(" ");
  }

  function callClass(data) {
    if (data === "About Us") {
      return "about-breadcumb-area";
    } else if (data === "Our Team") {
      return "team-breadcumb-area";
    } else if (data === "Application Development Services") {
      return "orga-breadcumb-area";
    } else if (data === "Business Process Automation Services") {
      return "str-breadcumb-area";
    } else if (data === "Data Integration Solutions Services") {
      return "opti-breadcumb-area";
    } else if (data === "Reporting and Analytics Tools Services") {
      return "func-breadcumb-area";
    } else if (data === "Case Studies") {
      return "case-breadcumb-area";
    } else if (data === "Contact Us") {
      return "cont-breadcumb-area";
    } else if (data === "Custom Application Development ") {
      return "start-breadcumb-area";
    } else if (data === "Mobile App Development ") {
      return "business-breadcumb-area";
    } else if (data === "Web Application Development ") {
      return "manage-breadcumb-area";
    } else if (data === "Cloud-Based Application Development ") {
      return "its-breadcumb-area";
    } else if (data === "Workflow Automation ") {
      return "strat-breadcumb-area";
    } else if (data === "Data Entry and Processing Automation ") {
      return "merge-breadcumb-area";
    } else if (data === "Document Management and Workflow Automation ") {
      return "private-breadcumb-area";
    } else if (data === "Compliance and Records Management ") {
      return "valuation-breadcumb-area";
    } else if (data === "Data Source Integration ") {
      return "oper-breadcumb-area";
    } else if (data === "Data Transformation and Cleansing ") {
      return "legal-breadcumb-area";
    } else if (data === "Automated Data Loading ") {
      return "digital-breadcumb-area";
    } else if (data === "Data Warehouse Automation ") {
      return "comp-breadcumb-area";
    } else if (data === "Dashboard Design and Creations ") {
      return "hr-breadcumb-area";
    } else if (data === "Real-time Data Analytics ") {
      return "sales-breadcumb-area";
    } else if (data === "Interactive Data Visualization ") {
      return "market-breadcumb-area";
    } else if (data === "Embedded Analytics in Applications ") {
      return "project-breadcumb-area";
    } else if (data === "Our Consulting Services") {
      return "ser-breadcumb-area";
    } else if (data === "White Label Solutions") {
      return "white-breadcumb-area";
    } else if (data === "Consulting and Implementation Services") {
      return "consulting-imp-breadcumb-area";
    } else if (data === "Custom Development and Integration") {
      return "custom-dev-breadcumb-area";
    } else if (data === "Emerging IT Company ") {
      return "emr-breadcumb-area";
    } else if (data === "Compliance and Records Management ") {
      return "compr-breadcumb-area";
    } else if (data === "Startup Success ") {
      return "ss-breadcumb-area";
    } else if (data === "Workflow Automation ") {
      return "workf-breadcumb-area";
    } else if (data === "Data Entry and Processing Automation ") {
      return "datae-breadcumb-area";
    } else if (data === "Mobile App Development ") {
      return "mob-breadcumb-area";
    } else if (data === "Custom Application Development ") {
      return "cusa-breadcumb-area";
    } else if (data === "Custom Application Development ") {
      return "cusa1-breadcumb-area";
    } else if (data === "Mobile App Development ") {
      return "mob1-breadcumb-area";
    } else if (data === "Web Application Development ") {
      return "web-breadcumb-area";
    } else if (data === "Cloud-Based Application Development ") {
      return "cloud-breadcumb-area";
    } else if (data === "Data Source Integration ") {
      return "datai-breadcumb-area";
    } else if (data === "Data Warehouse Automation ") {
      return "dataw-breadcumb-area";
    } else if (data === "Data Transformation and Cleansing ") {
      return "datat-breadcumb-area";
    } else if (data === "Automated Data Loading ") {
      return "datat-breadcumb-area";
    } else if (data === "Data Transformation and Cleansing ") {
      return "datat-breadcumb-area";
    } else if (data === "Data Warehouse Automation ") {
      return "dataw-breadcumb-area";
    } else if (data === "Dashboard Design and Creation ") {
      return "dashdc-breadcumb-area";
    } else if (data === "Real-time Data Analytics ") {
      return "real-breadcumb-area";
    } else if (data === "Interactive Data Visualization ") {
      return "int-breadcumb-area";
    } else if (data === "Embedded Analytics in Applications ") {
      return "emd-breadcumb-area";
    } else if (data === "Data Transformation and Cleansing ") {
      return "datat-breadcumb-area";
    } else if (data === "Automated Data Loading ") {
      return "datat-breadcumb-area";
    } else if (data === "Software Developer") {
      return "sofj-breadcumb-area";
    } else if (data === "Front-End Developer") {
      return "front-breadcumb-area";
    } else if (data === "Back-End Developer") {
      return "back-breadcumb-area";
    } else if (data === "Quality Assurance Engineer") {
      return "qa-breadcumb-area";
    } else if (data === "Data Integration Specialist") {
      return "dataj-breadcumb-area";
    } else if (data === "Data Analyst") {
      return "anaj-breadcumb-area";
    } else if (data === "Business Intelligence Developer") {
      return "bidj-breadcumb-area";
    } else if (data === "Data Engineer") {
      return "ej-breadcumb-area";
    } else if (data === "Customer Success Manager") {
      return "csj-breadcumb-area";
    } else if (data === "Implementation Consultant") {
      return "ij-breadcumb-area";
    } else if (data === "Solutions Architect") {
      return "solj-breadcumb-area";
    } else if (data === "Business Consultant") {
      return "bcj-breadcumb-area";
    }
  }
  //   str[i].replace(/\s+/g, "");

  return (
    <div className={`d-flex align-items-center ${callClass(props.pageName)}`}>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-12">
            <div className="breadcumb-content">
              <h1> {props.pageName} </h1>
            </div>
          </div>
          <div className="britcam-shape">
            <div className="breadcumb-content upp">
              <nav className="row justify-content-center mt-4">
                <ol className="breadcrumb" style={breadcrumb}>
                  {props.crumbs.map((crumb, ci) => {
                    const isdisabled = isLast(ci) ? "disabled" : "";

                    return (
                      <li
                        key={ci}
                        className="breadcrumb-item align-items-center"
                      >
                        <button
                          disabled={isdisabled}
                          className="btn"
                          onClick={() => clickme(crumb)}
                          style={{ color: "#fff" }}
                        >
                          {titleCase(crumb)}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcumb2;
