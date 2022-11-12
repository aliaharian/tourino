import {useTheme, withStyles} from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, {useRef} from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const FilterSelect = (props) => {
    const StyledSelect = withStyles((theme) => ({
        root: {
            width: 158,
            backgroundColor: '#fff !important',
            fontSize: 13,
            paddingBottom: 0,
            fontFamily: theme.font.medium,
            paddingTop: 0,
            paddingRight: '0 !important',
            [theme.breakpoints.down(550)]: {
                width: 78,
                textAlign:'center'
            },
            [theme.breakpoints.down(470)]: {
                width: 50

            },
        },

        iconOpen: {
            transform: 'rotateZ(180deg)'
        },

    }))(Select);

    const StyledMenuItem = withStyles((theme) => ({
        root: {
            width: 178,
            height: 43,
            margin: '0 auto',
            backgroundColor: '#fff !important',
            fontSize: 13,
            padding: '13px 9px',
            fontFamily: theme.font.medium,
            color: theme.textColor.secondary,
            borderRadius: '8px !important',

            '&:hover': {
                color: theme.textColor.primary,
                // color: theme.buttonColor.normal,
                backgroundColor: '#f5f8fa !important'
            }
        },


    }))(MenuItem);

    const StyledFormControl = withStyles((theme) => ({
        root: {
            height: 40,
            width: 190,
            padding: '0 16px',
            border: '1px solid ' + theme.textColor.border,
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [theme.breakpoints.down(550)]: {
                width: 110

            },
            [theme.breakpoints.down(470)]: {
                width: 70

            },
            '&>label': {
                fontSize: 13,
                fontFamily: theme.font.regular,
                transform: 'translate(0, 1.5px) scale(1) !important',
                color: theme.textColor.secondary

            },
            '&>div': {
                '&:before': {
                    display: 'none !important',
                    content: '""'
                },
                '&:after': {
                    display: 'none !important',
                    content: '""'
                }
            },
            '& svg': {
                transition: 'all 0.2s ease',
                color: theme.textColor.secondary,
                // top: '-8px'
                [theme.breakpoints.down(550)]: {
                    display: 'none'

                },
            }
        },

    }))(FormControl);

    const selectRef = useRef();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <StyledFormControl>
            {/*<InputLabel shrink id="demo-simple-select-placeholder-label-label">*/}
            {/*    {props.label}*/}
            {/*</InputLabel>*/}
            <StyledSelect
                labelId="demo-simple-select-placeholder-label-label"
                id="demo-simple-select-placeholder-label"
                value={props.value}
                open={props.open}
                onOpen={props.handleOpen}
                onClose={props.handleClose}
                onChange={props.handleChange}
                displayEmpty
                ref={selectRef}
                IconComponent={() => {
                    return <ExpandMoreIcon
                        className={`MuiSvgIcon-root MuiSelect-icon ${props.open && `MuiSelect-iconOpen`}`}/>

                }
                }
                MenuProps={
                    {
                        // anchorOrigin: {
                        //     vertical: 'bottom',
                        //     horizontal: 'right',
                        // },
                        // anchorEl:selectRef.current,
                        // transformOrigin: {
                        //     vertical: 'bottom',
                        //     horizontal: 'right',
                        // },
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        transformOrigin: {
                            vertical: "top",
                            horizontal: "left"
                        },
                        getContentAnchorEl: null,

                        style: {},
                        PopoverProps: {
                            style: {
                                borderRadius: '8px !important',
                            }
                        },
                        PaperProps: {

                            style: {
                                minWidth: 190,
                                border: 'none',
                                boxShadow: '0 3px 10px #191a3212',
                                borderRadius: '8px !important',
                                transform: isMobile?'translate(-7px , 14px)':'translate(-18px , 14px)',
                                // backgroundColor:'red',
                            },
                        },
                    }
                }
            >
                {props.datas.map((data) => (
                    <StyledMenuItem value={data.value}>{data.label}</StyledMenuItem>
                ))}

            </StyledSelect>
        </StyledFormControl>
    )

}

export default FilterSelect