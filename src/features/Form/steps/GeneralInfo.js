import React, { useContext } from "react";
import MomentUtils from "@date-io/moment";
import { Grid, Switch, FormControlLabel } from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

import { FormContext } from "../FormProvider";
import { Controller } from "react-hook-form";

function GeneralInfo() {
  const formContext = useContext(FormContext);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <Controller
              name="visitDate"
              control={formContext.control}
              defaultValue={formContext.fields.visitDate}
              as={
                <KeyboardDatePicker
                  label="Visit Date"
                  format="YYYY-MM-D"
                  defaultValue={formContext.fields.visitDate}
                />
              }
            />
          </div>
          <div>
            <Controller
              name="visitStartTime"
              control={formContext.control}
              defaultValue={formContext.fields.visitStartTime}
              as={
                <KeyboardTimePicker label="Visit Start Time" format="HH:mm" />
              }
            />
          </div>
          <div>
            <Controller
              name="visitEndTime"
              control={formContext.control}
              defaultValue={formContext.fields.visitEndTime}
              as={<KeyboardTimePicker label="Visit End Time" format="HH:mm" />}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Switch
                name="lunch"
                inputRef={formContext.register}
                defaultChecked={formContext.fields.lunch}
              />
            }
            label="Cat Kitchen"
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default GeneralInfo;
