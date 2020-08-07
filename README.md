# react-multistep-form

This is a simple demo showing a multi-step form with conditional steps. All the logic for determining the active, previous and next steps is contained in the `FormProvider` HOC component, which exposes methods to make working with multi-step forms easier, as well as some utilities for `react-hook-form` so that each step in a form can register its inputs.

FormProvider requires a `steps` prop which should contain the steps in order, in the following format:

```js
const steps = [
  { key: "generalInfo" },
  { key: "visitType" },
  {
    key: "catKitchen",
    conditions: (fields) => fields.lunch === true
  }
];
```

Optionally, you can add conditions for the step which will determine if it is active or not.

FormProvider's render method defines as few elements as possible (just a `<form>` element which is required for `react-hook-form` to work properly); its main goal is to provide data and methods to make working with multi-step forms easier. The rendering of the form should be done in other components that are children of FormProvider.

You can check the `/src/features/Form/Form.js` file for an implementation example

---

Created with CodeSandbox
