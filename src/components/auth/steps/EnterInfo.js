import { Typography } from "@material-ui/core";
import TextInput from "../../form/TextInput";
import useStyles from "../Style";
function EnterInfo(props) {
  const classes = useStyles();
  return (
    <div className={classes.authContent}>
      <Typography className={classes.title}>
        نام و نام خانوادگی خود را وارد کنید
      </Typography>
      <TextInput
        required
        error={props.error}
        label="نام"
        name="name"
        value={props.name}
        onChange={props.handleChange}
      />
      <TextInput
        required
        error={props.error}
        label="نام خانوادگی"
        name="lastName"
        value={props.lastName}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default EnterInfo;
