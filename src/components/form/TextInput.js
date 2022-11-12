import { TextField , Typography ,} from "@material-ui/core"
import useStyles from './Style'
import clsx from 'clsx'
function TextInput(props) {
    const classes = useStyles()
    return (
        <>
            <Typography className={clsx(classes.label , props.required && classes.required)}>{props.label || ""}</Typography>
            <TextField
                className={clsx(classes.inputRoot , props.error && classes.error)}
                value={props.value}
                onChange={props.onChange}
                InputProps={
                    {
                        disableUnderline:true,
                        className: props.ltr?classes.ltr:""

                    }
                }

            >
                
            </TextField>

        </>
    )
}

export default TextInput