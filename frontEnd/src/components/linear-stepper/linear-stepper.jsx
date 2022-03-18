import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DivProgress } from "./styled";

export const HorizontalLinearStepper = ({ children }) => {
  console.log("Senhor que retorno é esse:", children);
  const step = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ];
  return (
    // <Box sx={{ width: "100%"}}>
    <DivProgress>
      <Stepper {...children}>
        {step.map((label, index) => (
          <Step key={index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </DivProgress>
    // </Box>
    // {activeStep === steps.length ? (
    //     <React.Fragment>
    //         <Typography sx={{ mt: 2, mb: 1 }}>
    //             All steps completed - you&apos;re finished
    //         </Typography>
    //     </React.Fragment>
    // ) : (
    //     <React.Fragment>
    //         <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
    //         <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
    //             <Button
    //                 color="inherit"
    //                 disabled={activeStep === 0}
    //                 onClick={handleBack}
    //                 sx={{ mr: 1 }}
    //             >
    //                 Back
    //             </Button>
    //             <Button onClick={handleNext}>
    //                 {activeStep === steps.length - 1 ? "Finish" : "Next"}
    //             </Button>
    //         </Box>
    //     </React.Fragment>
    // )}
  );
};
