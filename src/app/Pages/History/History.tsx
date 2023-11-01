import { getHistory } from "@/api/services/history";
import { Prediction } from "@/utils/types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export const History: React.FC = () => {
  const [predictions, setPrediction] = useState<Prediction[]>([]);

  useEffect(() => {
    const loadHistory = async () => {
      const data = await getHistory();
      setPrediction(data);
    };

    loadHistory();
  }, []);

  return (
    <Box p={2}>
      <Typography variant="h5">History</Typography>
      {predictions.map((p) => {
        return (
          <Box pt={2} key={p.id}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">{p.id}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {p.evidence.map((e) => {
                  return (
                    <Box key={e.evidence} pb={1}>
                      <Typography variant="body1">{`Criteria: ${e.criteria}`}</Typography>
                      <Typography variant="body1">{`Evidence: ${e.evidence}`}</Typography>
                      <Typography variant="body1">{`Met: ${e.met}`}</Typography>
                      <Typography variant="body1">{`Page: ${e.page}`}</Typography>
                      <Typography variant="body1">{`Reasoning: ${e.reasoning}`}</Typography>
                      <Typography variant="body1">{`Score: ${e.score}`}</Typography>
                    </Box>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
    </Box>
  );
};
