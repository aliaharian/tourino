import { makeStyles } from "@material-ui/styles";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default makeStyles((theme) => ({
    root: {
        // position:'absolute',
        // right:0,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        '& .DateRangePicker': {
        },
        '& .DateRangePickerInput': {
            display: 'none',

        },
        '& .CalendarMonth__caption':{
            marginBottom:10,
        },
        '& .DateRangePicker__picker': {
            // transform: 'translate(0 , -30px)',
            borderRadius: 32,
            width:'100%',
            maxWidth:860,
            overflow: 'hidden',
            position:'static',
            padding: '13px 0',
        },
        '& .DayPicker--horizontal': {
            boxShadow: 'none'
        },
        '& .CalendarDay': {
            border: 'none',
            backgroundColor: '#fff !important'
        },
        '& .CalendarDay__button': {

            border: '1px solid transparent',
            borderRadius: '50%',
            '&:hover': {
                border: '1px solid #0f0f0f',

            }
        },
        '& table': {

        },
        '& .CalendarDay--hovered-span, .CalendarDay--after-hovered-start , .CalendarDay--selected-span': {
            borderRadius: '0',
            backgroundColor: '#f5f5f5 !important',
            color: '#000'
        },
        '& .CalendarDay--selected-start, .CalendarDay--selected-end, .CalendarDay--selected': {
            borderRadius: '0',
            backgroundColor: '#f5f5f5 !important',
            '&>button': {
                backgroundColor: '#000 !important',
                borderRadius: '50%',
                color: '#fff'
            }


        },
        '& .CalendarDay--blocked-out-of-range': {
            pointerEvents: 'none',
            '& button': {
                '&:hover': {
                    border: '1px solid transparent !important',
                }
            }
        },
        // '& .DayPickerNavigation__prev--rtl':{
        //     backgroundImage:`url(${KeyboardArrowLeftIcon})`,
        //     '& svg':{
        //         display:'none'
        //     }
        // }
    }

}));
