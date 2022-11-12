import { Typography } from "@material-ui/core"
import TextInput from "../../form/TextInput"
import useStyles from '../Style'
function EnterNumber(props) {
    const classes = useStyles();
    return (
        <div className={classes.authContent}>
            <Typography className={classes.title}>
                شماره تلفن همراه خود را وارد کنید
            </Typography>
            <TextInput
                ltr
                required
                error={props.error}
                label="تلفن همراه"
                value={props.number}
                onChange={props.handleChange}
            />
        </div>

    )
}

export default EnterNumber