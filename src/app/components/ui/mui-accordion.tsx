import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3>2022</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            UW Husky Open, Dave Freeman, UCI Anteater Collegiate, Riaan NJ Open,
            UC Davis Spring Open, UC Berkeley LXVI, UCLA Bruin Open, Bay
            Badminton Championships
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>2023</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Dave Freeman, UC Davis Spring Open, SJSU Spring Smashoff, Riaan NJ
            Open, NCBC Fall Open, Bay Badminton Championships
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h3>2024</h3>
        </AccordionSummary>
        <AccordionDetails>
          <p>NCBC Spring Open, Washington Open</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyAccordion;
