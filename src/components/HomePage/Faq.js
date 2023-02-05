import { Grid, Typography } from '@material-ui/core'

import useStyles from './Style'
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles((theme) => ({
    root: {
        border: 'none',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: '1px solid ' + theme.textColor.border,
        },
        
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        borderBottom: '1px solid ' + theme.textColor.border,
        marginBottom: -1,
        minHeight: 56,
        '& svg':{
            color:theme.textColor.secondary
        },
        '&$expanded': {
            minHeight: 56,
            borderBottom: 'none',

        },
    },
    content: {
        position: 'relative',
        paddingLeft: '17px',
        lineHeight: '25px',
        margin: '20px 0',
        '& p': {
            fontSize: 13,
            color: theme.textColor.primary,
        },
        '&:after': {
            content: '""',
            width: 7,
            height: 7,
            borderRadius: '50%',
            position: 'absolute',
            backgroundColor: theme.textColor.primary,
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)'

        },
        '&$expanded': {
            margin: '20px 0',
        },
    },
    expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        '& p': {
            color: theme.textColor.secondary,
            fontSize: 13
        }
    },

}))(MuiAccordionDetails);

const Faq = () => {
    const faq = [
        {
            title: 'در راه آهن و هنگام سوار شدن به قطار چه مدارکی لازم است؟',
            content: 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر درام پرسفر نظیر تعطیلات را دارید ،   باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید'
        },
        {
            title: 'مقدار باز مجاز در قطار چقدر است؟',
            content: 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر درام پرسفر نظیر تعطیلات را دارید ،   باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید'
        },
        {
            title: 'نرخ بلیط  برای نوزادان و کودکان زیر 12 سال چگونه است؟',
            content: 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر درام پرسفر نظیر تعطیلات را دارید ،   باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید'
        },
        {
            title: 'روال استرداد یا کنسلی بلیت قطار چگونه است؟',
            content: 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر درام پرسفر نظیر تعطیلات را دارید ،   باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید'
        },
        {
            title: 'آیا پس از خرید بلیط قطار  امکان تغییر نام یا نام خانوادگی وجود دارد؟',
            content: 'امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر درام پرسفر نظیر تعطیلات را دارید ،   باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید'
        },

    ]
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState('panel0');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <Grid className={classes.FaqSection}>
            <Typography className={classes.landscapeTourTitle}>سوالات متداول</Typography>
            <Grid container className={classes.faqContainer}>

                {faq.map((data, index) => (
                    <Accordion square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}d-content`}
                            id={`panel${index}d-header`}
                        >
                            <Typography>{data.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {data.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                ))}


            </Grid>

        </Grid>
    )
}


export default Faq