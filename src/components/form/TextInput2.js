import { TextField , Typography ,} from "@material-ui/core"
import useStyles from './Style'
import clsx from 'clsx'
function TextInput2(props) {
    const classes = useStyles()
    return (
        <>
            <Typography className={clsx(classes.label , props.required ? classes.requiredAlt:classes.notRequiredAlt)}>{props.label || ""}</Typography>
            <TextField
                name={props.name}   
                className={clsx(classes.inputRoot , props.error && classes.error)}
                value={props.value}
                onChange={props.onChange}
                type={props.type || "text"}
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

export default TextInput2