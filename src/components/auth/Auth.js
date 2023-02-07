import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  codeSend,
  codeVerifyLogin,
  enqueueSnackbar,
  setAuthStep,
  setUserInfo,
} from "../../../redux/user";
import { numberFormat, validate } from "../../utilities";
import DialogLayout from "../dialog/DialogLayout";
import TextInput from "../form/TextInput";
import EnterCode from "./steps/EnterCode";
import EnterInfo from "./steps/EnterInfo";
import EnterNumber from "./steps/EnterNumber";
import useStyles from "./Style";
function Auth(props) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);
  const ssoLoading = useSelector((state) => state.user.ssoLoading);
  const classes = useStyles();
  const reduxError = useSelector((state) => state.user.error);
  const Dispatch = useDispatch();
  useEffect(() => {
    setError(reduxError);
  }, [reduxError]);
  console.log("reduxError", reduxError);
  const handleChange = (e, index) => {
    switch (props.step) {
      case "enterNumber":
        setNumber(numberFormat.phoneMask(e.target.value));
        setError(false);
        break;

      case "enterCode":
        let tmp = [...code];

        if (numberFormat.toEnglishDigitsOnlyNum(e.target.value).length <= 1)
          tmp[index] = numberFormat.toEnglishDigitsOnlyNum(e.target.value);

        setCode([...tmp]);
        console.log([...tmp]);
        setError(false);
        break;
      case "enterInfo":
        console.log(e.target.name);
        console.log(e.target.value);
        if (e.target.name === "name") {
          setName(e.target.value);
        } else {
          setLastName(e.target.value);
        }
    }
  };
  const handleSubmit = () => {
    switch (props.step) {
      case "enterNumber":
        if (validate.isMobile(number)) {
          Dispatch(codeSend(numberFormat.toEnglishDigitsOnlyNum(number)));
        } else {
          setError(true);
          Dispatch(
            enqueueSnackbar({
              message: "شماره تلفن وارد شده صحیح نیست",
            })
          );
        }
        break;
      case "enterCode":
        if (
          code[0] !== "" &&
          code[1] !== "" &&
          code[2] !== "" &&
          code[3] !== ""
        ) {
          Dispatch(
            codeVerifyLogin(
              numberFormat.toEnglishDigitsOnlyNum(number),
              code[0] + code[1] + code[2] + code[3]
            )
          );
        } else {
          setError(true);
          Dispatch(
            enqueueSnackbar({
              message: "کد وارد شده صحیح نیست",
            })
          );
        }
        break;
      case "enterInfo":
        if (name !== "" && lastName !== "") {
          Dispatch(
            setUserInfo({
              name: name,
              lastName: lastName,
            })
          );
        } else {
          setError(true);
          Dispatch(
            enqueueSnackbar({
              message: "نام و نام خانوادگی را وارد کنید",
            })
          );
        }
    }
  };

  const handleStep = () => {
    switch (props.step) {
      case "enterNumber":
        return (
          <EnterNumber
            error={error}
            number={number}
            handleChange={handleChange}
          />
        );

      case "enterCode":
        return (
          <EnterCode
            error={error}
            number={numberFormat.toEnglishDigitsOnlyNum(number)}
            code={code}
            handleChange={handleChange}
            handleChangeNumber={handleChangeNumber}
          />
        );
      case "enterInfo":
        return (
          <EnterInfo
            error={error}
            name={name}
            lastName={lastName}
            code={code}
            handleChange={handleChange}
            handleChangeNumber={handleChangeNumber}
          />
        );
    }
  };

  const handleChangeNumber = () => {
    Dispatch(setAuthStep("enterNumber"));
    setNumber("");
  };
  return (
    <DialogLayout
      open={props.open}
      onClose={() => {
        setNumber("");
        props.onClose();
      }}
      title={`ورود / ثبت نام`}
      onSubmit={handleSubmit}
      loading={ssoLoading}
    >
      {handleStep()}
    </DialogLayout>
  );
}

export default Auth;
