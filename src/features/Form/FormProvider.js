import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";

function FormProvider({ defaultValues, steps, children }) {
  const { register, getValues, errors, control } = useForm();
  const [fields, setFields] = useState(defaultValues);
  const [activeStepKey, setActiveStepKey] = useState(steps[0].key);

  const activeSteps = steps.filter(
    (step) =>
      typeof step.conditions === "undefined" || step.conditions(fields) === true
  );

  function goNext() {
    // TODO: What to do when there are errors?
    if (Object.keys(errors).length === 0) {
      setFields({
        ...fields,
        ...getValues()
      });
      _goToNextActiveStep();
    }
  }

  function goPrev() {
    // TODO: Maybe there should be some validation before going back?
    // Also: do we save the fields when going back?
    _goToPrevActiveStep();
  }

  function _goToNextActiveStep() {
    const activeStepKeyIndex = activeSteps.findIndex(
      (step) => step.key === activeStepKey
    );
    const stepsMeetingConditions = activeSteps.slice(activeStepKeyIndex + 1);
    const nextStepKey =
      stepsMeetingConditions.length && stepsMeetingConditions[0].key;

    if (nextStepKey) {
      setActiveStepKey(nextStepKey);
    }
  }

  function _goToPrevActiveStep() {
    const activeStepKeyIndex = activeSteps.findIndex(
      (step) => step.key === activeStepKey
    );
    const stepsMeetingConditions = activeSteps.slice(0, activeStepKeyIndex); // Start from steps preceding the current step
    const prevStepKey =
      stepsMeetingConditions.length &&
      stepsMeetingConditions[stepsMeetingConditions.length - 1].key;

    if (prevStepKey) {
      setActiveStepKey(prevStepKey);
    }
  }

  return (
    <FormContext.Provider
      value={{
        activeStepKey,
        activeSteps,
        steps,
        fields,
        goNext,
        goPrev,
        register,
        control
      }}
    >
      <form>{children}</form>
    </FormContext.Provider>
  );
}

export const FormContext = createContext();
export default FormProvider;
