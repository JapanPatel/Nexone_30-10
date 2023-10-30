import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { React } from "react";

const faqsData = [
  {
    id: 1,
    title: "Effortless Development",
    Content:
      "Nexone's intuitive platform makes app building a breeze, whether you're a novice or an IT expert. No coding required – it's all about drag and drop.",
  },
  {
    id: 2,
    title: "Limitless Functionality",
    Content:
      "Nexone offers boundless possibilities with its full-stack capabilities and seamless integrations.",
  },
  {
    id: 3,
    title: "Customer Satisfaction",
    Content:
      "Faster delivery and customization lead to happier customers, strengthening your competitive edge.",
  },
  {
    id: 4,
    title: "Proven Success",
    Content:
      "Our track record includes numerous satisfied clients who have harnessed Nexone's productivity for their digital transformation journey.",
  },
  {
    id: 5,
    title: "Built for the Long Run",
    Content:
      "Bid farewell to technical constraints as you embark on a journey of rapid development and long-term success.",
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
