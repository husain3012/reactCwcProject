import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";

export default function  CustomAccordion(props) {
return (
	
	<Accordion style={{ width: 400 }}>
		<AccordionSummary
		expandIcon={<ExpandMoreIcon />}
		aria-controls="panel1a-content"
		>
		<Typography
			style={{
			fontWeight: 10,
			}}
		>
			{props.title}
		</Typography>
		</AccordionSummary>
		<AccordionDetails>
		<Typography>{props.body}</Typography>
		</AccordionDetails>
	</Accordion>

);
}
