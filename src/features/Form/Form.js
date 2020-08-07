import React, { useContext } from "react";
import { Grid, Container } from "@material-ui/core";

import useStyles from "./Form.styles";
import { texts, steps, stepComponents, defaultValues } from "./Form.data";

import FormProvider, { FormContext } from "./FormProvider";
import FormNavigation from "./FormNavigation";
import FormBreadcrumbs from "./FormBreadcrumbs";

import Header from "../../designSystem/Header";

// Wrap Form in context provider
function FormWithContext() {
  return (
    <FormProvider steps={steps} defaultValues={defaultValues}>
      <Form />
    </FormProvider>
  );
}

function Form() {
  const formContext = useContext(FormContext);
  const classes = useStyles();

  const StepComponent = stepComponents[formContext.activeStepKey];
  const stepTexts = texts.find(
    (text) => text.key === formContext.activeStepKey
  );

  return (
    <Container maxWidth="lg">
      <div className={classes.formContainer}>
        <FormBreadcrumbs texts={texts} />
        <div className={classes.formContent}>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Header
                title={stepTexts?.header?.title}
                description={stepTexts?.header?.description}
              />
            </Grid>
            <Grid item xs={9}>
              <StepComponent />
            </Grid>
          </Grid>
        </div>
        <FormNavigation />
      </div>
    </Container>
  );
}

export default FormWithContext;
