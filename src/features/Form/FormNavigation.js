import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { FormContext } from "./FormProvider";

import useStyles from "./FormNavigation.styles";

function FormNavigation() {
  const formContext = useContext(FormContext);
  const classes = useStyles();

  const isFirstStep =
    formContext.steps.findIndex(
      step => step.key === formContext.activeStepKey
    ) === 0;

  return (
    <div className={classes.formNavigation}>
      <Button
        variant="contained"
        onClick={() => formContext.goPrev()}
        disabled={isFirstStep}
      >
        Prev
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => formContext.goNext()}
      >
        Next
      </Button>
    </div>
  );
}
export default FormNavigation;
