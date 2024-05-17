import { Add, Remove } from "@mui/icons-material";
import { Box, Step, StepContent, StepLabel, Stepper } from "@mui/material";
type StepsProps = {
  step: number;
};
const steps = ["Дэлгүүрийн нэр", "Бүс нутаг", "Нэмэлт мэдээлэл"];

export const Steps = (props: StepsProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={props.step}
        alternativeLabel
        sx={{
          "& .mui-zpcwqm-MuiStepConnector-root": {
            top: "18px", //connector position
          },
        }}
      >
        {steps.map((label) => (
          <Step
            key={label}
            sx={{
              "& .MuiSvgIcon-root": {
                fontSize: "36px", // circle color (COMPLETED)
              },
              "& .MuiStepLabel-root .Mui-completed": {
                color: "secondary.dark", // circle color (COMPLETED)
              },
              "& .MuiStepLabel-root .Mui-active": {
                color: "secondary.dark", // circle color (ACTIVE)
              },
              "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                fill: "common.white", // circle's number (ACTIVE)
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
