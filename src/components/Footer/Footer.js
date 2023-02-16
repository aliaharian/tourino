import { Divider, Grid, Link, Typography } from "@material-ui/core"
import useStyles from './Style'
import cao from '../../assets/img/cao.png'
import nerkh from '../../assets/img/nerkh.png'
import rights from '../../assets/img/rights.png'
import etehadie from '../../assets/img/etehadie.png'
import whatsapp from '../../assets/img/whatsapp.png'
import telegram from '../../assets/img/telegram.png'
import instagram from '../../assets/img/instagram.png'
const Footer = () => {

    const classes = useStyles();
    return (
        <div className={classes.footerGrandContainer}>
            <div className={classes.footerContainer}>
                <Grid container className={classes.footer}>
                    <Grid item lg={4} md={4} sm={6} xs={12} >
                        <Typography  component="h1">گردشگری</Typography>
                        <Typography>
                            گردشگری بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال 1393 کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار گردشگری قرار داشت؛ اما به مرور امکان خرید سایر محصولات گردشگری نیز به گردشگری اضافه شد.
                        </Typography>
                    </Grid>
                    <Grid item lg={2} md={2} sm={6} xs={12} >
                        <Typography  component="h3">دسته بندی ها</Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    درباره ما
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    پشتیبانی
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    تماس با ما
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    قوانین و مقررات
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    انتقادات و پیشنهادات
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    راهنمای خرید
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    پرسش و پاسخ
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    باشگاه مشتریان
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} >
                        <Typography  component="h3">اطلاعات تکمیلی</Typography>
                        <ul>
                            <li>
                                <Link href="#">
                                    درباره ما
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    پشتیبانی
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    تماس با ما
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    قوانین و مقررات
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    انتقادات و پیشنهادات
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    راهنمای خرید
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    پرسش و پاسخ
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    باشگاه مشتریان
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={3} md={3} sm={6} xs={12} >
                        <Typography  component="h3">مجوز ها</Typography>
                        <Grid container>
                            <Grid item lg={4} md={4} sm={4} xs={4}>
                                <a
                                    referrerPolicy="origin"
                                    target="_blank"
                                    href="https://trustseal.enamad.ir/?id=209400&amp;Code=S1yxU9zKgTRHXf6MyNmY">
                                    <img
                                        referrerPolicy="origin"
                                        src="https://Trustseal.eNamad.ir/logo.aspx?id=209400&amp;Code=S1yxU9zKgTRHXf6MyNmY"
                                        alt=""
                                        style={{ cursor: "pointer" }}
                                        id="S1yxU9zKgTRHXf6MyNmY" />
                                </a>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4} >
                                <img
                                    referrerPolicy='origin'
                                    id='nbqejzpejxlzapfuesgtrgvj'
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        window.open("https://logo.samandehi.ir/Verify.aspx?id=271503&p=uiwkjyoerfthdshwobpdxlao", "Popup", "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30")
                                    }}
                                    alt='logo-samandehi'
                                    src='https://logo.samandehi.ir/logo.aspx?id=271503&p=odrfyndtnbpdujynlymaqfti'
                                />
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4} >
                                <a href="http://www.aira.ir/" target="_blank">
                                    <img src={nerkh} />
                                </a>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4} >
                                <a href="https://www.cao.ir/home" target="_blank">
                                    <img src={cao} />
                                </a>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={4} >
                                <a href="https://www.cao.ir/paxrights" target="_blank">
                                    <img src={rights} />
                                </a>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider className={classes.divider} />
                <div className={classes.copyright}>
                    <div>
                        <Typography>کلیه حقوق این سایت محفوظ و متعلق به آژانس هواپیمایی و جهانگردی گردشگری می‌باشد</Typography>
                    </div>
                    <div>
                        <Link href="#">
                            <img src={whatsapp} />
                        </Link>
                        <Link href="#">
                            <img src={telegram} />
                        </Link>
                        <Link href="#">
                            <img src={instagram} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer