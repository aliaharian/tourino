import BirthdateInput from "../form/BirthdateInput";
import TextInput2 from "../form/TextInput2";
import useStyles from "./Style";

const PassengerInfo = ({ info, setInfo, error }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    if (e.target.name === "mobile" || e.target.name === "nationalCode") {
      if (isNaN(e.target.value)) {
        return;
      }
      setInfo({ ...info, [e.target.name]: e.target.value });
    } else {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      <div className={classes.grid2}>
        <div>
          <TextInput2
            required
            error={error}
            label="نام"
            name="name"
            value={info.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextInput2
            required
            error={error}
            label="نام خانوادگی"
            name="lastName"
            value={info.lastName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={classes.nationalCodeContainer}>
        <div>
          <TextInput2
            required
            error={error}
            label="کد ملی"
            name="nationalCode"
            value={info.nationalCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={classes.grid2}>
        <div>
          <BirthdateInput
            required
            error={error}
            label="تاریخ تولد"
            name="birthDate"
            value={info.birthDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextInput2
            required
            error={error}
            label="جنسیت"
            name="gender"
            value={info.gender}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default PassengerInfo;
