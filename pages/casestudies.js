import Breadcumb2 from "@/src/components/Breadcumb2";
import Layout from "@/src/layout/Layout";
import dynamic from "next/dynamic";
import { useState } from "react";
const CaseStudies = dynamic(
  () => import("@/src/components/isotope/CaseStudies"),
  {
    ssr: false,
  }
);
const Portfolio = () => {
  const [crumbs, setCrumbs] = useState(["Home", "stories"]);
  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <Layout>
      <Breadcumb2
        pageName={"Case Studies"}
        crumbs={crumbs}
        selected={selected}
      />

      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      <div className="case-study-area style-three">
        <div className="container">
          <CaseStudies />
        </div>
      </div>
    </Layout>
  );
};
export default Portfolio;
