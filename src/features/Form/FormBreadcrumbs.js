import React, { useContext } from "react";
import { Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import { FormContext } from "./FormProvider";

function FormBreadcrumbs({ texts }) {
  const formContext = useContext(FormContext);
  const activeStepIndex = formContext.activeSteps.findIndex((step) => step.key === formContext.activeStepKey);

  return (
    <Stepper activeStep={activeStepIndex}>
      {formContext.activeSteps.map((step) => (
        <Step key={step.key}>
          <StepLabel>{texts.find((text) => text.key === step.key).breadcrumb.title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default FormBreadcrumbs;
