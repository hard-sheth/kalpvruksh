"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

function page() {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    console.log(id, "id");

    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="container">
      <div className="text-center">
        Home | Organic Spice Set | Cardamom Seeds
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col"></div>
        <div className="col">
          <h2>Cardamom Seeds</h2>
          <p className="fw-bold">$2.70</p>
          {/* <UncontrolledAccordion defaultOpen={['1']} stayOpen>
            <AccordionItem>
              <AccordionHeader targetId="1">Description</AccordionHeader>
              <AccordionBody accordionId="1">
                <p className="text-start">
                  We are proud to present our unique products. You`ll be amazed
                  because we have a largest choice of tremendous spices. We
                  provide only premium quality goods at a fair price. Our
                  vendors and manufacturers guarantee the quality of our spices.
                  There is no doubt about our reputation because it`s perfect
                  and our clients` testimonials can prove this fact.
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">Product Details</AccordionHeader>
              <AccordionBody accordionId="2">
                <ul>
                  <li>Relaxed-fit</li>
                  <li>Jacquard-knit fabric with wool content</li>
                  <li>Round neckline</li>
                  <li>Dropped shoulders</li>
                </ul>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
              <AccordionBody accordionId="3">
                <ul className="list-group">
                  <li className="fw-bold list-group-item border-0">Vendor: Spices</li>
                  <li className="fw-bold list-group-item border-0">Type: Herbs</li>
                  <li className="fw-bold list-group-item border-0">Weight: 0lb</li>
                  <li className="fw-bold list-group-item border-0">Tags: Dolor</li>
                  <li className="fw-bold list-group-item border-0">Collections: Organic Spice Set, Spices & herbs</li>
                </ul>
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion> */}
          <UncontrolledAccordion
  stayOpen
>
  <AccordionItem>
    <AccordionHeader targetId="1" className="border-0 border-start-0 border-bottom-0">
      Accordion Item 1
    </AccordionHeader>
    <AccordionBody accordionId="1">
      <strong>
        This is the first item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
      Accordion Item 2
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <strong>
        This is the second item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      Accordion Item 3
    </AccordionHeader>
    <AccordionBody accordionId="3">
      <strong>
        This is the third item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
</UncontrolledAccordion>
        </div>
      </div>
    </div>
  );
}

export default page;
