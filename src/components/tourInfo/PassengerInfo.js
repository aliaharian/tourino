import BirthdateInput from "../form/BirthdateInput";
import SelectInput from "../form/SelectInput";
import TextInput2 from "../form/TextInput2";
import useStyles from "./Style";

const PassengerInfo = ({ info, setInfo, error, lg }) => {
  const classes = useStyles();

  const handleChange = (e) => {
    if (e.target.name === "mobile" || e.target.name === "nationalCode") {
      if (isNaN(e.target.value)) {
        return;
      }
      setInfo({ ...info, [e.target.name]: e.target.value });
    } else if (
      e.target.name == "day" ||
      e.target.name == "month" ||
      e.target.name == "year"
    ) {
      let tmp = { ...info };
      switch (e.target.name) {
        case "day":
          tmp.birthDate[0] = e.target.value;
          break;
        case "month":
          tmp.birthDate[1] = e.target.value;
          break;
        case "year":
          tmp.birthDate[2] = e.target.value;
          break;
      }
      setInfo({ ...tmp });
    } else {
      setInfo({ ...info, [e.target.name]: e.target.value });
    }
  };
  return (
    <>
      <div className={lg ? classes.grid3 : classes.grid2}>
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
          <SelectInput
            required
            error={error}
            label="جنسیت"
            name="gender"
            value={info.gender}
            onChange={handleChange}
            values={[
              { value: "male", label: "مرد" },
              {
                value: "female",
                label: "زن",
              },
            ]}
          />
        </div>

        <div>
          <TextInput2
            required
            error={error}
            label="شماره تماس"
            name="mobile"
            value={info.mobile}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default PassengerInfo;
