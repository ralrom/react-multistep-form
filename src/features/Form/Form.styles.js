import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  formContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  formContent: {
    flexGrow: 1,
    padding: "100px 50px 50px 50px",
    display: "flex",
  },
}));
