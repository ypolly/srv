import { ThemeProvider, makeStyles } from "@material-ui/styles";

import { theme } from "./Theme";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import SvgIcon from "@material-ui/core/SvgIcon";
import Arrow from "../public/images/arrow.svg";
import Send from "../public/images/send.svg";
import Tick from "../public/images/tickoff.svg";
import { useForm, Controller } from "react-hook-form";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import classes from "*.module.css";
import nationalities from "../data/nationalities.json";
import timestamps from "../data/timestamps.json";
import languageLevel from "../data/languageLevel.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    width: "394px",
  },

  input1: {
    display: "inline-block",
    width: "192px",
    marginRight: "10px",
  },
  input2: {
    display: "inline-block",
    width: "192px",
  },
}));

export default function ControlledOpenSelect({ closed, onChange }) {
  const classes = useStyles();

  let schema = yup.object().shape({
    desiredPosition: yup.string().required(),
    businessArea: yup.string().required(),
    honorific: yup.string().required(),
    firstName: yup.string().required().min(2),
    familyName: yup.string().required().min(2),
    personalNumber: yup.number().required(),
    nationality: yup.string().required(),
    privateMobile: yup.string().required(),
    privateEmail: yup.string().email().required(),
    residentInCity: yup.string().required(),
    residentInSwedenYears: yup.string().required(),
    residentInSwedenMonths: yup.string().required(),
    experienceYears: yup.string().required(),
    experienceMonths: yup.string().required(),
    currentJobSituation: yup.string().required(),
    educationLevel: yup.string().required(),
    swedishLanguageLevel: yup.string().required(),
    englishLanguageLevel: yup.string().required(),
    hasDrivingLicense: yup.string().required(),
    hasCar: yup.string().required(),
  });

  const [showed, setShowed] = useState(false);

  const defaultValues = {
    activitiesbefore: "",
  };
  const { register, errors, handleSubmit, reset, control, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log(data, e), reset(defaultValues);
    console.log("data---", data);
    // scrollToTop();
  };
  console.log(watch("desiredPosition"));

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ width: "360px", margin: "auto" }}>
          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="desiredPosition">
              POSITION
            </InputLabel>
            <Input
              inputRef={register}
              value={"Servia® Home Cleaning Maid"}
              name="desiredPosition"
              disableUnderline
              error={errors.desiredPosition}
              //endAdornment={ (!!errors.desiredPosition)   ?  <SvgIcon/> : <TickOff /> }
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="businessArea">
              AREA
            </InputLabel>
            <Controller
              as={
                <Select
                  native
                  inputRef={register}
                  onChange={(e) =>
                    register({ name: "businessArea", value: e.target.value })
                  }
                  id="businessArea"
                  name="businessArea"
                  defaultValue={""}
                  MenuProps={{ variant: "menu" }}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.businessArea}
                >
                  <option aria-label="None" value="" />
                  <option value={"Stockholm"}>Stockholm</option>
                  <option value={"Gothenburg"}>Gothenburg</option>
                  <option value={"Malmö and Lund"}>Malmö and Lund</option>
                </Select>
              }
              control={control}
              name="businessArea"
              id="businessArea"
              defaultValue={""}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="honorific">
              TITLE
            </InputLabel>
            <Controller
              as={
                <Select
                  native
                  inputRef={register}
                  onChange={(e) =>
                    register({ name: "honorific", value: e.target.value })
                  }
                  id="honorific"
                  name="honorific"
                  defaultValue={""}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.honorific}
                >
                  <option aria-label="None" value="" />
                  <option value={"MS"}>Ms.</option>
                  <option value={"MR"}>Mr.</option>
                </Select>
              }
              control={control}
              name="honorific"
              id="honorific"
              defaultValue={""}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="firstName">
              FIRST NAME
            </InputLabel>
            <Input
              inputRef={register}
              defaultValue={""}
              name="firstName"
              id="firstName"
              disableUnderline={true}
              error={errors.firstName}
              // endAdornment={ (!!errors.firstName)   ?  <SvgIcon/> : <TickOff /> }
              autoComplete="off"
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="familyName">
              FAMILY NAME
            </InputLabel>
            <Input
              inputRef={register}
              id="familyName"
              name="familyName"
              disableUnderline={true}
              defaultValue={""}
              error={errors.familyName}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="personalNumber">
              PERSONAL NUMBER
            </InputLabel>
            <Controller
              name="personalNumber"
              control={control}
              as={
                <InputMask mask="99999999-9999" maskChar="_">
                  {() => (
                    <Input
                      inputRef={register}
                      id="personalNumber"
                      name="personalNumber"
                      defaultValue={""}
                      disableUnderline={true}
                      error={errors.personalNumber}
                    />
                  )}
                </InputMask>
              }
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="nationality">
              NATIONALITY
            </InputLabel>
            <Controller
              as={
                <Select
                  native
                  id="nationality"
                  onChange={(e) =>
                    register({ name: "nationality", value: e.target.value })
                  }
                  name="nationality"
                  defaultValue={""}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.nationality}
                >
                  <option aria-label="None" value="" />
                  {nationalities.map((n) => (
                    <option value={n}>{n}</option>
                  ))}
                </Select>
              }
              control={control}
              name="nationality"
              id="nationality"
              defaultValue={""}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="privateMobile">
              MOBILE NUMBER
            </InputLabel>
            <Input
              inputRef={register}
              id="privateMobile"
              name="privateMobile"
              disableUnderline={true}
              defaultValue={""}
              error={errors.privateMobile}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="privateEmail">
              EMAIL ADDRESS
            </InputLabel>
            <Input
              inputRef={register}
              id="privateEmail"
              name="privateEmail"
              disableUnderline={true}
              defaultValue={""}
              error={errors.privateEmail}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="residentInCity">
              RESIDENT IN CITY
            </InputLabel>
            <Input
              inputRef={register}
              id="residentInCity"
              name="residentInCity"
              disableUnderline={true}
              defaultValue={""}
              error={errors.residentInCity}
            />
          </FormControl>
          <div className="form__input">
            <p className="form__input-label">RESIDENT IN SWEDEN:</p>

            <div className="form__input-field" style={{ marginRight: "10px" }}>
              <FormControl fullWidth>
                <InputLabel
                  disableAnimation={true}
                  variant="filled"
                  htmlFor="residentInSwedenYears"
                >
                  YEARS
                </InputLabel>
                <Controller
                  as={
                    <Select
                      native
                      inputRef={register}
                      onChange={(e) =>
                        register({
                          name: "residentInSwedenYears",
                          value: e.target.value,
                        })
                      }
                      id="residentInSwedenYears"
                      name="residentInSwedenYears"
                      defaultValue={""}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.residentInSwedenYears}
                    >
                      <option aria-label="None" value="" />
                      {timestamps.years.map((y) => (
                        <option value={y.value}>{y.label}</option>
                      ))}
                    </Select>
                  }
                  control={control}
                  name="residentInSwedenYears"
                  id="residentInSwedenYears"
                  defaultValue={""}
                />
              </FormControl>
            </div>
            <div className="form__input-field">
              <FormControl fullWidth>
                <InputLabel variant="filled" htmlFor="residentInSwedenMonths">
                  MONTHS
                </InputLabel>

                <Controller
                  as={
                    <Select
                      native
                      inputRef={register}
                      onChange={(e) =>
                        register({
                          name: "residentInSwedenMonths",
                          value: e.target.value,
                        })
                      }
                      id="residentInSwedenMonths"
                      name="residentInSwedenMonths"
                      defaultValue={""}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.residentInSwedenMonths}
                    >
                      <option aria-label="None" value="" />
                      {timestamps.months.map((m) => (
                        <option value={m.value}>{m.label}</option>
                      ))}
                    </Select>
                  }
                  control={control}
                  name="residentInSwedenMonths"
                  id="residentInSwedenMonths"
                  defaultValue={""}
                />
              </FormControl>
            </div>
          </div>

          <div className="form__input">
            <p className="form__input-label">
              PROF. CLEANING EXPERIENCE (FULL-TIME):
            </p>

            <div className="form__input-field" style={{ marginRight: "10px" }}>
              <FormControl fullWidth>
                <InputLabel
                  disableAnimation={true}
                  variant="filled"
                  htmlFor="experienceYears"
                >
                  YEARS
                </InputLabel>
                <Controller
                  as={
                    <Select
                      native
                      inputRef={register}
                      onChange={(e) =>
                        register({
                          name: "experienceYears",
                          value: e.target.value,
                        })
                      }
                      id="experienceYears"
                      name="experienceYears"
                      defaultValue={""}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.experienceYears}
                    >
                      <option aria-label="None" value="" />
                      {timestamps.years.map((y) => (
                        <option value={y.value}>{y.label}</option>
                      ))}
                    </Select>
                  }
                  control={control}
                  name="experienceYears"
                  id="experienceYears"
                  defaultValue={""}
                />
              </FormControl>
            </div>
            <div className="form__input-field">
              <FormControl fullWidth>
                <InputLabel variant="filled" htmlFor="experienceMonths">
                  MONTHS
                </InputLabel>

                <Controller
                  as={
                    <Select
                      native
                      inputRef={register}
                      onChange={(e) =>
                        register({
                          name: "experienceMonths",
                          value: e.target.value,
                        })
                      }
                      id="experienceMonths"
                      name="experienceMonths"
                      defaultValue={""}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.experienceMonths}
                    >
                      <option aria-label="None" value="" />
                      {timestamps.months.map((m) => (
                        <option value={m.value}>{m.label}</option>
                      ))}
                    </Select>
                  }
                  control={control}
                  name="experienceMonths"
                  id="experienceMonths"
                  defaultValue={""}
                />
              </FormControl>
            </div>
          </div>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="currentJobSituation">
              CURRENT JOB SITUATION
            </InputLabel>
            <Controller
              as={
                <Select
                  native
                  inputRef={register}
                  onChange={(e) =>
                    register({
                      name: "currentJobSituation",
                      value: e.target.value,
                    })
                  }
                  id="currentJobSituation"
                  name="currentJobSituation"
                  defaultValue={""}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.currentJobSituation}
                >
                  <option aria-label="None" value="" />
                  <option value={"UNEMPLOYED"}>Unemployed</option>
                  <option value={"CLEANER_EMPLOYED_BY_ANOTHER_COMPANY"}>
                    Employed by Cleaning Company
                  </option>
                  <option value={"EMPLOYED"}>Employed by Other Company</option>
                  <option value={"SELF_EMPLOYED_CLEANER"}>
                    Own Cleaning Business
                  </option>
                  <option value={"SELF_EMPLOYED"}>Other Own Business</option>
                </Select>
              }
              control={control}
              name="currentJobSituation"
              id="currentJobSituation"
              defaultValue={""}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="educationLevel">
              EDUCATIONAL LEVEL
            </InputLabel>
            <Controller
              as={
                <Select
                  native
                  inputRef={register}
                  onChange={(e) =>
                    register({ name: "educationLevel", value: e.target.value })
                  }
                  id="educationLevel"
                  name="educationLevel"
                  defaultValue={""}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.educationLevel}
                >
                  <option aria-label="None" value="" />
                  <option value={"ELEMENTARY"}>Elementary School</option>
                  <option value={"SECONDARY"}>Secondary School</option>
                  <option value={"UNIVERSITY"}>University</option>
                </Select>
              }
              control={control}
              name="educationLevel"
              id="educationLevel"
              defaultValue={""}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="swedishLanguageLevel">
              SWEDISH LEVEL
            </InputLabel>
            <Controller
              as={
                <Select
                  native
                  inputRef={register}
                  onChange={(e) =>
                    register({
                      name: "swedishLanguageLevel",
                      value: e.target.value,
                    })
                  }
                  id="swedishLanguageLevel"
                  name="swedishLanguageLevel"
                  defaultValue={""}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.swedishLanguageLevel}
                >
                  <option aria-label="None" value="" />
                  {languageLevel.map((l) => (
                    <option value={l}>{l}</option>
                  ))}
                </Select>
              }
              control={control}
              name="swedishLanguageLevel"
              id="swedishLanguageLevel"
              defaultValue={""}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="englishLanguageLevel">
              ENGLISH LEVEL
            </InputLabel>
            <Controller
              as={
                <Select
                  native
                  inputRef={register}
                  onChange={(e) =>
                    register({
                      name: "englishLanguageLevel",
                      value: e.target.value,
                    })
                  }
                  id="englishLanguageLevel"
                  name="englishLanguageLevel"
                  defaultValue={""}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.englishLanguageLevel}
                >
                  <option aria-label="None" value="" />
                  {languageLevel.map((l) => (
                    <option value={l}>{l}</option>
                  ))}
                </Select>
              }
              control={control}
              name="englishLanguageLevel"
              id="englishLanguageLevel"
              defaultValue={""}
            />
          </FormControl>

          <div className="form__radio">
            <p className="form__radio-label">DRIVER'S LICENSE (NOT REQUIRED)</p>

            <div className="radio">
              <input
                type="radio"
                name="hasDrivingLicense"
                value="TRUE"
                id="hasDrivingLicense1"
                ref={register({ required: true })}
              />
              <label htmlFor="hasDrivingLicense1"></label>
              <label htmlFor="hasDrivingLicense1" className="radio-text">
                Yes
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="hasDrivingLicense"
                value="FALSE"
                id="hasDrivingLicense2"
                ref={register({ required: true })}
              />
              <label htmlFor="hasDrivingLicense2"></label>
              <label htmlFor="hasDrivingLicense2" className="radio-text">
                No
              </label>
            </div>
          </div>

          <div className="form__radio">
            <p className="form__radio-label" style={{ marginTop: 0 }}>
              CAR (NOT REQUIRED)
            </p>
            <div className="radio">
              <input
                type="radio"
                name="hasCar"
                value="TRUE"
                id="hasCar1"
                ref={register({ required: true })}
              />
              <label htmlFor="hasCar1"></label>
              <label htmlFor="hasCar1" className="radio-text">
                Yes
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="hasCar"
                value="FALSE"
                id="hasCar2"
                ref={register({ required: true })}
              />
              <label htmlFor="hasCar2"></label>
              <label htmlFor="hasCar2" className="radio-text">
                No
              </label>
            </div>
          </div>
          <div className="form__radio" style={{ marginTop: "24px" }}>
            <div className="radio">
              <input
                type="radio"
                name="confirm1"
                value="TRUE"
                id="confirm1"
                ref={register({ required: true })}
              />
              <label htmlFor="confirm1"></label>
              <label htmlFor="confirm1" className="radio-single">
                I declare that all information in my application is true.
              </label>
            </div>
          </div>

          <div className="form__radio" style={{ marginTop: "-13px" }}>
            <div className="radio">
              <input
                type="radio"
                name="confirm2"
                value="TRUE"
                id="confirm2"
                ref={register({ required: true })}
              />
              <label htmlFor="confirm2"></label>
              <label htmlFor="confirm2" className="radio-single">
                I allow Servia AB to register my data under current privacy
                laws.{" "}
              </label>
            </div>
          </div>

          <div className="form__botton">
            <button type="submit" className="submit">
              APPLY NOW
            </button>
          </div>
        </div>

        <div
          className="form__botton"
          style={{ marginTop: "37px", marginBottom: "74px" }}
        >
          <div className="form__botton-1">
            <button onClick={() => reset()} className="clear">
              CLEAR
            </button>
          </div>
          <div className="form__botton-1">
            <button onClick={() => setShowed(false)} className="clear">
              CLOSE
            </button>
          </div>
        </div>
      </form>
    </ThemeProvider>
  );
}

const ArrowDown = (props) => (
  <SvgIcon {...props}>
    <Arrow />
  </SvgIcon>
);

const TickOff = (props) => (
  <SvgIcon {...props}>
    <Tick />
  </SvgIcon>
);
