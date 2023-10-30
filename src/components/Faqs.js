import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { React } from "react";

const faqsData = [
  {
    id: 1,
    title: "Partner Ecosystem",
    Content:
      "Join hands with Nexone to expand your offerings and reach new heights.",
  },
  {
    id: 2,
    title: "Reseller Opportunities",
    Content:
      "Unlock revenue streams by reselling Nexone's cutting-edge solutions.",
  },
  {
    id: 3,
    title: "Strategic Alliances",
    Content: "Forge powerful partnerships for mutual growth and innovation",
  },
  {
    id: 4,
    title: "Client Success Stories",
    Content:
      "Hear from businesses that have thrived through collaboration with Nexone.",
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
