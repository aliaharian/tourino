import { Typography } from "@material-ui/core"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { codeCall } from "../../../../redux/user";
import CodeInput from "../../form/CodeInput";
import useStyles from '../Style'
function EnterCode(props) {
    const classes = useStyles();
    const [callReq, setCallReq] = useState(false)
    const Dispatch = useDispatch()
    const handleCall = () => {
        Dispatch(codeCall(props.number))
        setCallReq(true)
    }
    return (
        <div className={classes.authContent}>
            <Typography className={classes.title}>
                کد ارسال شده به شماره {props.number} را وارد کنید
            </Typography>
            <Typography className={classes.link} onClick={props.handleChangeNumber}>
                تغییر شماره تلفن
            </Typography>


            <CodeInput
                ltr
                error={props.error}
                value={props.code}
                onChange={props.handleChange}
            />
            {!callReq && <Typography className={classes.call} onClick={handleCall}>
                ارسال کد با تماس
            </Typography>}
        </div>

    )
}

export default EnterCode