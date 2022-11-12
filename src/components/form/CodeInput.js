import { TextField, Typography } from "@material-ui/core"
import useStyles from './Style'
import clsx from 'clsx'
import { useState } from "react"
function CodeInput(props) {
    const classes = useStyles()
    const [focusIndex, setFocusIndex] = useState(0)
    return (
        <>
            <Typography className={clsx(classes.label, props.required && classes.required)}>{props.label || ""}</Typography>
            <div className={classes.codeInputContainer}>
                <TextField
                    className={clsx(classes.codeInputRoot, props.error && classes.error)}
                    value={props.value[0]}
                    onFocus={(event) => event.target.select()}
                    onChange={(e) => {
                        props.onChange(e, 0)
                        setFocusIndex(1)
                    }}
                    inputRef={input => (input && focusIndex === 0) && input.focus()}
                    InputProps={
                        {
                            disableUnderline: true,
                            className: props.ltr ? classes.ltr : ""
                        }
                    }

                />
                <TextField
                    className={clsx(classes.codeInputRoot, props.error && classes.error)}
                    value={props.value[1]}
                    onFocus={(event) => event.target.select()}

                    onChange={(e) => {
                        props.onChange(e, 1)
                        setFocusIndex(2)
                    }}
                    inputRef={input => (input && focusIndex === 1) && input.focus()}
                    InputProps={
                        {
                            disableUnderline: true,
                            className: props.ltr ? classes.ltr : ""
                        }
                    }

                />
                <TextField
                    className={clsx(classes.codeInputRoot, props.error && classes.error)}
                    value={props.value[2]}
                    onFocus={(event) => event.target.select()}

                    onChange={(e) => {
                        props.onChange(e, 2)
                        setFocusIndex(3)
                    }}
                    inputRef={input => (input && focusIndex === 2) && input.focus()}
                    InputProps={
                        {
                            disableUnderline: true,
                            className: props.ltr ? classes.ltr : ""
                        }
                    }

                />
                <TextField
                    className={clsx(classes.codeInputRoot, props.error && classes.error)}
                    value={props.value[3]}
                    onFocus={(event) => event.target.select()}

                    onChange={(e) => {
                        props.onChange(e, 3)
                        setFocusIndex(3)
                    }}
                    inputRef={input => (input && focusIndex === 3) && input.focus()}
                    InputProps={
                        {
                            disableUnderline: true,
                            className: props.ltr ? classes.ltr : ""
                        }
                    }

                />

            </div>
        </>
    )
}

export default CodeInput