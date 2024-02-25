"use client";

import { Accordion, AccordionItemButton } from "react-accessible-accordion";

import {
  StyledAccordionItem,
  StyledAccordionItemHeading,
  StyledAccordionItemPanel,
  Wrapper,
  H2
} from "./FAQs.style";

export default function FAQs() {
  const items = [
    {
      uuid: "1",
      heading: "What does this website do?",
      content: `Stitchack is a platform for tailors to manage their tasks, store 
            customer data and back it up to the cloud and also track their revenue of a
             period of time
            
            `
    },
    {
      uuid: "2",
      heading: "Is registration for free?",
      content: `Yup! You can sign up right now for no money at all`
    },
    {
      uuid: "3",
      heading: "Can i store customers' measurements?",
      content: `Definitely! You can store customer measurements and also back it up to the cloud.
            Paper rots, the cloud is eternal.`
    }
  ];

  return (
    <Wrapper id="faqs">
      <H2>FAQs</H2>
      <Accordion allowZeroExpanded>
        {items.map((item) => (
          <StyledAccordionItem key={item.uuid}>
            <StyledAccordionItemHeading>
              <AccordionItemButton>{item.heading}</AccordionItemButton>
            </StyledAccordionItemHeading>
            <StyledAccordionItemPanel>{item.content}</StyledAccordionItemPanel>
          </StyledAccordionItem>
        ))}
      </Accordion>
    </Wrapper>
  );
}
