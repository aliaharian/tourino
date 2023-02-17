import { CheckBoxOutlined, StarRounded } from "@material-ui/icons";
import clsx from "clsx";
import { dateTime, numberFormat } from "../../utilities";
import useStyles from "./Style";
const Watcher = ({ tour }) => {
  console.log("tour", tour);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.mainWatcher}>
        <div className={classes.passengerInfoContainer}>
          <div className={classes.supportContact}>
            <p>شماره پشتیبانی: 09121111111</p>
          </div>
          <div className={classes.passengerInfo}>
            <p className={classes.mb4}>نام سرپرست مسافران:</p>
            <p className={classes.textBold}>
              {tour.tour?.passengers?.[0].name}{" "}
              {tour.tour?.passengers?.[0].last_name}
            </p>
            <p className={clsx(classes.mb4, classes.mt8)}>کد ملی:</p>
            <p className={classes.textBold}>
              {tour.tour?.passengers?.[0].national_code}
            </p>
            <p className={clsx(classes.mb4, classes.mt8)}>شماره تماس:</p>
            <p className={classes.textBold}>
              {tour.tour?.passengers?.[0].phone}
            </p>
            <p className={clsx(classes.mb4, classes.mt8)}>تعداد مسافران:</p>
            <p className={classes.textBold}>
              {tour.tour?.passengers?.length} نفر
            </p>
          </div>
        </div>
        <div className={classes.tourInfoContainer}>
          <div className={classes.tourId}>
            <div>
              <p>شماره تور: </p>
              <p className={classes.textBold}>{tour.tour?.id}</p>
            </div>
            <div>
              <p>تاریخ خرید:</p>
              <p className={classes.textBold}>
                {dateTime.dateTimeCustom(tour.tour?.buy_date).dateDate}
              </p>
            </div>
          </div>
          <div className={classes.tourDetail}>
            <div className={classes.tourDetailInner}>
              <div className={classes.tourDuration}>
                <div>
                  <p className={classes.mb4}>شهر مبدا:</p>
                  <p className={classes.textBold}>
                    {tour.tour?.from_city?.title}
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>شهر مقصد:</p>
                  <p className={classes.textBold}>
                    {tour.tour?.to_city?.title}
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>مدت اقامت:</p>
                  <p className={classes.textBold}>
                    {tour.calculateable?.days} روز و{" "}
                    {tour.calculateable?.nights} شب
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>تاریخ رفت:</p>
                  <p className={classes.textBold}>
                    {
                      dateTime.dateTimeCustom(
                        tour.tour?.departure_date_time / 1000
                      ).dateDate
                    }
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>تاریخ برگشت:</p>
                  <p className={classes.textBold}>
                    {
                      dateTime.dateTimeCustom(
                        tour.tour?.arrival_date_time / 1000
                      ).dateDate
                    }
                  </p>
                </div>
              </div>
              <div className={classes.hotelInfo}>
                <div>
                  <p className={classes.mb4}>نام هتل:</p>
                  <p className={classes.textBold}>
                    {tour.tour?.hotel?.name}
                    <div className={classes.hotelStars}>
                      <StarRounded />
                      <span>{tour.tour?.hotel?.stars}</span>
                    </div>
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>نوع پذیرایی:</p>
                  <p className={classes.textBold}>
                    {tour.tour?.fulboard == 1 ? "فول برد" : "صبحانه"}
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>تعداد اتاق:</p>
                  <p className={classes.textBold}>{tour.tour?.rooms?.length}</p>
                </div>
              </div>
              <div className={classes.roomInfo}>
                <div>
                  <p className={classes.mb4}>توضیحات اتاق ها:</p>
                  <p className={classes.textBold}>
                    {tour.tour?.rooms?.map((room) => {
                      return `اتاق ${room.name} ${room.capacity} نفره - `;
                    })}
                  </p>
                </div>
              </div>
              <div className={classes.transportInfo}>
                <div className={classes.transportItem}>
                  <div className={classes.transportCompany}>
                    <div className={classes.transportLogo}>
                      <img
                        src={
                          tour.tour?.departure_vehicle?.transport_company?.logo
                            ?.url
                        }
                      />
                    </div>
                    <p>
                      {tour.tour?.departure_vehicle?.transport_company.name}
                    </p>
                  </div>
                  <div className={classes.transportVehicle}>
                    <p>اطلاعات رفت</p>
                    <p>{tour.tour?.departure_vehicle?.pType}</p>
                    <p>
                      {
                        dateTime.dateTimeCustom(
                          tour.tour?.departure_vehicle?.departure_date_time /
                            1000
                        ).dateTime
                      }
                    </p>
                    <p>
                      {
                        dateTime.dateTimeCustom(
                          tour.tour?.departure_vehicle?.departure_date_time /
                            1000
                        ).dateDate
                      }
                    </p>
                  </div>
                </div>
                <div className={classes.transportItem}>
                  <div className={classes.transportCompany}>
                    <div className={classes.transportLogo}>
                      <img
                        src={
                          tour.tour?.arrival_vehicle?.transport_company?.logo
                            ?.url
                        }
                      />
                    </div>
                    <p>{tour.tour?.arrival_vehicle?.transport_company.name}</p>
                  </div>
                  <div className={classes.transportVehicle}>
                    <p>اطلاعات رفت</p>
                    <p>{tour.tour?.arrival_vehicle?.pType}</p>
                    <p>
                      {
                        dateTime.dateTimeCustom(
                          tour.tour?.arrival_vehicle?.departure_date_time / 1000
                        ).dateTime
                      }
                    </p>
                    <p>
                      {
                        dateTime.dateTimeCustom(
                          tour.tour?.arrival_vehicle?.departure_date_time / 1000
                        ).dateDate
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.servicesInfo}>
                {tour?.tour.breakfast == 1 && (
                  <div>
                    <CheckBoxOutlined />
                    <p>صبحانه آزاد</p>
                  </div>
                )}
                {tour?.tour.lunch == 1 && (
                  <div>
                    <CheckBoxOutlined />
                    <p>ناهار آزاد</p>
                  </div>
                )}

                {tour?.tour.dinner == 1 && (
                  <div>
                    <CheckBoxOutlined />
                    <p>شام آزاد</p>
                  </div>
                )}

                {tour.tour?.services?.map((service, index) => (
                  <div key={index}>
                    <CheckBoxOutlined />
                    <p>{service.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.tourPrice}>
              <div className={classes.agencyContainer}>
                <p>شرکت خدمات مسافرتی تورینو</p>
              </div>
              <p className={classes.mb4}>مبلغ قابل پرداخت:</p>
              <p className={clsx(classes.textBold, classes.mb16)}>
                {numberFormat.toPersianSeprateTomanCommas(
                  tour.tour?.payablePrice
                )}{" "}
                تومان
              </p>
              <p className={classes.mb4}>مبلغ پرداخت شده:</p>
              <p className={clsx(classes.textBold, classes.mb16)}>
                {numberFormat.toPersianSeprateTomanCommas(
                  tour.tour?.paied_price
                )}{" "}
                تومان
              </p>

              <div
                className={clsx(classes.paymentBadge)}
                style={{ backgroundColor: tour.tour.status.color + "40",border: "1px solid " + tour.tour.status.color }}
              >
                <p style={{ color: tour.tour.status.color }}>
                  {tour.tour.status.slug}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.passengersContainer}>
        <div className={classes.passengerTitle}>
          <p>مسافران</p>
        </div>
        <div className={classes.passengersList}>
          {tour.tour?.passengers?.map((passenger, index) => {
            return (
              <div key={index} className={classes.passengerItem}>
                <div>
                  <p className={classes.mb4}>نام و نام خانوادگی:</p>
                  <p className={classes.textBold}>
                    {passenger.name} {passenger.last_name}
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>کد ملی:</p>
                  <p className={classes.textBold}>{passenger.national_code}</p>
                </div>
                <div>
                  <p className={classes.mb4}>جنسیت:</p>
                  <p className={classes.textBold}>
                    {passenger.male ? "مرد" : "زن"}
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>تاریخ تولد:</p>
                  <p className={classes.textBold}>
                    {passenger.day}/{passenger.month}/{passenger.year}
                  </p>
                </div>
                <div>
                  <p className={classes.mb4}>شماره تماس:</p>
                  <p className={classes.textBold}>{passenger.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.passengersContainer}>
        <div className={classes.passengerTitle}>
          <p>قوانین تور</p>
        </div>
        <div className={classes.passengersList}>
          <div className={classes.terms}>
            <p>
              - زمان حضور مسافر در ترمینال یا راه آهن یا فرودگاه یک ساعت و نیم
              قبل از ساعت حرکت میباشد .
            </p>
            <p>- تحویل اتاق در مقصد ساعت 14 و تخلیه اتاق ساعت 12 میباشد .</p>
            <p>
              - ساعات سرو غذا (صبحانه – ناهار – شام ) را از پذیرش هتل استعالم
              فرمایید و طبق آن ساعات برنامه ریزی فرمایید .
            </p>
            <p>
              - همراه داشتن کارت ملی و شناسنامه کلیه مسافرین در طول سفر الزامی
              است .
            </p>
            <p>
              - چنانچه از خدمات ترانسفر استفاده میکنید شماره تلفن همراه اعالمی
              باید پاسخگو باشد .
            </p>
            <p>
              - جریمه کنسلی تور تا یک هفته قبل از حرکت 20 درصد – تا 48 ساعت قبل
              از حرکت 50 درصد و بعد از آن 80 درصد مبلغ تور میباشد .
            </p>
            <p>
              - رعایت کلیه قوانین حاکم بر وسائط نقلیه (اتوبوس،قطار و پرواز ) و
              هتلهای مقصد برای مسافر الزامی است و این شرکت تابع آن میباشد .
            </p>
            <p>
              - این شرکت تنها متعهد به ارائه خدمات مندرج در این برگه میباشد .لذا
              تعهد اخذ هر گونه خدمات خارج از این لیست که توسط هتل یا هر شخص
              دیگری ارائه میشود و پرداخت هزینه های مرتب بر عهده مسافر خواهد بود
              .
            </p>
            <p>
              - این برگه به منزله صورتحساب و رسید پرداخت وجه معتبر بوده و مسافر
              میتواند پیگیر اخذ خدمات مندرج از شرکت باشد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Watcher;
