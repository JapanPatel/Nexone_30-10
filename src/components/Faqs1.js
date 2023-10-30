import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { React } from "react";

const faqsData = [
  {
    id: 1,
    title: "1.	Application",
    Content:
      "Submit your application through our career portal, ensuring that your resume and cover letter highlight your skills, experiences, and why you want to join our team.",
  },
  {
    id: 2,
    title: "2.	Screening",
    Content:
      "Our talent acquisition team will review your application and qualifications. If your profile matches our requirements, we will contact you for an initial screening, which may be conducted via phone or video call.",
  },
  {
    id: 3,
    title: "3.	Interviews ",
    Content:
      "Shortlisted candidates will be invited for interviews. Depending on the role, you may have one or multiple rounds of interviews with our team members, including technical assessments and behavioral questions.",
  },
  {
    id: 4,
    title: "4.	Assessments ",
    Content:
      "For certain positions, we may require candidates to complete assessments or technical tasks to evaluate their skills and abilities.",
  },
  {
    id: 5,
    title: "5.	Reference Checks",
    Content:
      "We may conduct reference checks with your previous employers to validate your experience and work ethic.",
  },
  {
    id: 6,
    title: "6.	Offer",
    Content:
      "If you successfully complete the hiring process and we determine that you are the right fit for the role, we will extend an offer to you, outlining the terms and conditions of your employment.",
  },
];

const Faqs = () => {
  const [active, setActive] = useState(faqsData[0].id);
  return (
    <div id="tab1" className="tab_content">
      <Accordion
        defaultActiveKey={faqsData[0].id}
        as={"ul"}
        className="accordion"
      >
        {faqsData.map((faq) => (
          <li key={faq.id}>
            <Accordion.Toggle
              as="a"
              eventKey={faq.id}
              onClick={() => setActive(faq.id == active ? null : faq.id)}
              className={faq.id == active ? "active" : ""}
            >
              <span> {faq.title} </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.id}>
              <p>{faq.Content}</p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};
export default Faqs;
