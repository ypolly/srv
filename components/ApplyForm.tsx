import { ThemeProvider, makeStyles } from "@material-ui/styles";

import { theme } from "./Theme";
import Radio, { RadioProps } from '@material-ui/core/Radio';
import InputLabel from "@material-ui/core/InputLabel";
import option from "@material-ui/core/option";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import SvgIcon from "@material-ui/core/SvgIcon";
import Arrow from '../public/images/arrow.svg';
import Send from '../public/images/send.svg';
import Tick from '../public/images/tickoff.svg';
import { useForm, Controller } from 'react-hook-form';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useRef, useState } from "react";
import InputMask from "react-input-mask";
import classes from "*.module.css";



const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    width: '394px',
  },

  input1: {
    display: 'inline-block',
    width: '192px',
    marginRight: '10px',

  },
  input2: {
    display: 'inline-block',
    width: '192px',
  },
}));

// let schema = yup.object().shape({
//   desiredPosition: yup.string().required(),
//   businessArea: yup.string().required(),
//   honorific: yup.string().required(),
//   firstName: yup.string().required().min(2),
//   familyName: yup.string().required().min(2),
//   personalNumber: yup.number().required(),
//   nationality: yup.string().required(),
//   privateMobile: yup.number().required(),
//   privateEmail: yup.string().email().required(),
//   residentInCity: yup.string().required(),
//   residentInSwedenYears: yup.string().required(),
//   residentInSwedenMonths: yup.string().required(),
//   experienceYears: yup.string().required(),
//   experienceMonths: yup.string().required(),
//   currentJobSituation: yup.string().required(),
//   educationLevel: yup.string().required(),
//   swedishLanguageLevel: yup.string().required(),
//   englishLanguageLevel: yup.string().required(),
//   hasDrivingLicense: yup.string().required(),
//   hasCar: yup.string().required()

// });

export default function ControlledOpenSelect({ closeCard }) {

  const classes = useStyles();

  const [showed, setShowed] = useState('false');

  const { register, errors, handleSubmit, reset, control, watch } = useForm({
    mode: 'onSubmit',
    // resolver: yupResolver(schema),
  })



  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  //const watchfirstName = watch("personalNumber");
  // function sendData(data){
  //          fetch("http://95.216.184.231/hwbs2/web/apply/BASIC",
  //      {   mode: "no-cors",
  //          headers: {
  //            'Accept': 'application/json',
  //            'Content-Type': 'application/json'
  //          },
  //          method: "POST",
  //          body: JSON.stringify(data)
  //      })
  //      .then(function(res){ console.log(res) })
  //      .catch(function(res){ console.log(res) })
  // }

  const defaultValues = {
    activitiesbefore: '',
  };
  const onSubmit = (data, e) => { console.log(data, e), reset(defaultValues) };
  const onError = (errors, e) => console.log(errors, e);


  return (
    <ThemeProvider theme={theme} >
      <form noValidate onSubmit={handleSubmit(onSubmit)} >
        <div style={{ width: '360px', margin: 'auto' }}>
          <FormControl fullWidth >
            <InputLabel variant="filled" htmlFor="desiredPosition" >
              POSITION
          </InputLabel>
            <Input inputRef={register}
              value={'Servia® Home Cleaning Maid'}
              name="desiredPosition"
              id="desiredPosition"
              disableUnderline={true}
              error={errors.desiredPosition}
            //endAdornment={ (!!errors.desiredPosition)   ?  <SvgIcon/> : <TickOff /> }
            />
          </FormControl>

          <FormControl fullWidth >
            <InputLabel variant="filled" htmlFor="businessArea">
              AREA
          </InputLabel>
            <Controller
              as={
                <Select native inputRef={register}
                  onChange={e => register({ name: 'businessArea', value: e.target.value })}
                  id="businessArea"
                  name="businessArea"
                  defaultValue={''}
                  MenuProps={{ variant: 'menu' }}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.businessArea}
                >
                  <option aria-label="None" value="" />
                  <option value={'Stockholm'}>Stockholm</option>
                  <option value={'Gothenburg'}>Gothenburg</option>
                  <option value={'Malmö and Lund'}>Malmö and Lund</option>
                </Select>
              }
              control={control}
              name="businessArea"
              id='businessArea'
              defaultValue={''}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="honorific">
              TITLE
          </InputLabel>
            <Controller
              as={
                <Select native inputRef={register}
                  //onChange={e => register({ name: 'honorific', value: e.target.value})}
                  id="honorific"
                  name="honorific"
                  defaultValue={''}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.honorific}
                >
                  <option aria-label="None" value="" />
                  <option value={'MS'}>Ms.</option>
                  <option value={'MR'}>Mr.</option>

                </Select>
              }
              control={control}
              name="honorific"
              id='honorific'
              defaultValue={''}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="firstName">
              FIRST NAME
          </InputLabel>
            <Input inputRef={register}
              defaultValue={''}
              name="firstName"
              id="firstName"
              disableUnderline={true}
              error={errors.firstName}
              // endAdornment={ (!!errors.firstName)   ?  <SvgIcon/> : <TickOff /> }
              autoComplete='off'
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="familyName">
              FAMILY NAME
          </InputLabel>
            <Input inputRef={register}
              id="familyName"
              name="familyName"
              disableUnderline={true}
              defaultValue={''}
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
              as={<InputMask mask="99999999-9999" maskChar='_'>
                {() => <Input inputRef={register}
                  id="personalNumber"
                  name="personalNumber"
                  disableUnderline={true}
                  // defaultValue={''}
                  error={errors.personalNumber}

                />}
              </InputMask>}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="nationality">
              NATIONALITY
          </InputLabel>
            <Controller
              as={
                <Select native
                  id="nationality"
                  //onChange={e => register({ name: 'nationality', value: e.target.value})}
                  name="nationality"
                  defaultValue={''}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.nationality}
                >
                  <option aria-label="None" value="" />
                  <option value={'afghan'}>Afghan</option>
                  <option value={'albanian'}>Albanian</option>
                  <option value={'algerian'}>Algerian</option>
                  <option value={'american'}>American</option>
                  <option value={'andorran'}>Andorran</option>
                  <option value={'angolan'}>Angolan</option>
                  <option value={'antiguans'}>Antiguans</option>
                  <option value={'argentinean'}>Argentinean</option>
                  <option value={'armenian'}>Armenian</option>
                  <option value={'australian'}>Australian</option>
                  <option value={'austrian'}>Austrian</option>
                  <option value={'azerbaijani'}>Azerbaijani</option>
                  <option value={'bahamian'}>Bahamian</option>
                  <option value={'bahraini'}>Bahraini</option>
                  <option value={'bangladeshi'}>Bangladeshi</option>
                  <option value={'barbadian'}>Barbadian</option>
                  <option value={'barbudans'}>Barbudans</option>
                  <option value={'batswana'}>Batswana</option>
                  <option value={'belarusian'}>Belarusian</option>
                  <option value={'belgian'}>Belgian</option>
                  <option value={'belizean'}>Belizean</option>
                  <option value={'beninese'}>Beninese</option>
                  <option value={'bhutanese'}>Bhutanese</option>
                  <option value={'bolivian'}>Bolivian</option>
                  <option value={'bosnian'}>Bosnian</option>
                  <option value={'brazilian'}>Brazilian</option>
                  <option value={'british'}>British</option>
                  <option value={'bruneian'}>Bruneian</option>
                  <option value={'bulgarian'}>Bulgarian</option>
                  <option value={'burkinabe'}>Burkinabe</option>
                  <option value={'burmese'}>Burmese</option>
                  <option value={'burundian'}>Burundian</option>
                  <option value={'cambodian'}>Cambodian</option>
                  <option value={'cameroonian'}>Cameroonian</option>
                  <option value={'canadian'}>Canadian</option>
                  <option value={'cape verdean'}>Cape Verdean</option>
                  <option value={'central african'}>Central African</option>
                  <option value={'chadian'}>Chadian</option>
                  <option value={'chilean'}>Chilean</option>
                  <option value={'chinese'}>Chinese</option>
                  <option value={'colombian'}>Colombian</option>
                  <option value={'comoran'}>Comoran</option>
                  <option value={'congolese'}>Congolese</option>
                  <option value={'costa rican'}>Costa Rican</option>
                  <option value={'croatian'}>Croatian</option>
                  <option value={'cuban'}>Cuban</option>
                  <option value={'cypriot'}>Cypriot</option>
                  <option value={'czech'}>Czech</option>
                  <option value={'danish'}>Danish</option>
                  <option value={'djibouti'}>Djibouti</option>
                  <option value={'dominican'}>Dominican</option>
                  <option value={'dutch'}>Dutch</option>
                  <option value={'east timorese'}>East Timorese</option>
                  <option value={'ecuadorean'}>Ecuadorean</option>
                  <option value={'egyptian'}>Egyptian</option>
                  <option value={'emirian'}>Emirian</option>
                  <option value={'equatorial guinean'}>Equatorial Guinean</option>
                  <option value={'eritrean'}>Eritrean</option>
                  <option value={'estonian'}>Estonian</option>
                  <option value={'ethiopian'}>Ethiopian</option>
                  <option value={'fijian'}>Fijian</option>
                  <option value={'filipino'}>Filipino</option>
                  <option value={'finnish'}>Finnish</option>
                  <option value={'french'}>French</option>
                  <option value={'gabonese'}>Gabonese</option>
                  <option value={'gambian'}>Gambian</option>
                  <option value={'georgian'}>Georgian</option>
                  <option value={'german'}>German</option>
                  <option value={'ghanaian'}>Ghanaian</option>
                  <option value={'greek'}>Greek</option>
                  <option value={'grenadian'}>Grenadian</option>
                  <option value={'guatemalan'}>Guatemalan</option>
                  <option value={'guinea-bissauan'}>Guinea-Bissauan</option>
                  <option value={'guinean'}>Guinean</option>
                  <option value={'guyanese'}>Guyanese</option>
                  <option value={'haitian'}>Haitian</option>
                  <option value={'herzegovinian'}>Herzegovinian</option>
                  <option value={'honduran'}>Honduran</option>
                  <option value={'hungarian'}>Hungarian</option>
                  <option value={'icelander'}>Icelander</option>
                  <option value={'indian'}>Indian</option>
                  <option value={'indonesian'}>Indonesian</option>
                  <option value={'iranian'}>Iranian</option>
                  <option value={'iraqi'}>Iraqi</option>
                  <option value={'irish'}>Irish</option>
                  <option value={'israeli'}>Israeli</option>
                  <option value={'italian'}>Italian</option>
                  <option value={'ivorian'}>Ivorian</option>
                  <option value={'jamaican'}>Jamaican</option>
                  <option value={'japanese'}>Japanese</option>
                  <option value={'jordanian'}>Jordanian</option>
                  <option value={'kazakhstani'}>Kazakhstani</option>
                  <option value={'kenyan'}>Kenyan</option>
                  <option value={'kittian and nevisian'}>Kittian and Nevisian</option>
                  <option value={'kuwaiti'}>Kuwaiti</option>
                  <option value={'kyrgyz'}>Kyrgyz</option>
                  <option value={'laotian'}>Laotian</option>
                  <option value={'latvian'}>Latvian</option>
                  <option value={'lebanese'}>Lebanese</option>
                  <option value={'liberian'}>Liberian</option>
                  <option value={'libyan'}>Libyan</option>
                  <option value={'liechtensteiner'}>Liechtensteiner</option>
                  <option value={'lithuanian'}>Lithuanian</option>
                  <option value={'luxembourger'}>Luxembourger</option>
                  <option value={'macedonian'}>Macedonian</option>
                  <option value={'malagasy'}>Malagasy</option>
                  <option value={'malawian'}>Malawian</option>
                  <option value={'malaysian'}>Malaysian</option>
                  <option value={'maldivan'}>Maldivan</option>
                  <option value={'malian'}>Malian</option>
                  <option value={'maltese'}>Maltese</option>
                  <option value={'marshallese'}>Marshallese</option>
                  <option value={'mauritanian'}>Mauritanian</option>
                  <option value={'mauritian'}>Mauritian</option>
                  <option value={'mexican'}>Mexican</option>
                  <option value={'micronesian'}>Micronesian</option>
                  <option value={'moldovan'}>Moldovan</option>
                  <option value={'monacan'}>Monacan</option>
                  <option value={'mongolian'}>Mongolian</option>
                  <option value={'moroccan'}>Moroccan</option>
                  <option value={'mosotho'}>Mosotho</option>
                  <option value={'motswana'}>Motswana</option>
                  <option value={'mozambican'}>Mozambican</option>
                  <option value={'namibian'}>Namibian</option>
                  <option value={'nauruan'}>Nauruan</option>
                  <option value={'nepalese'}>Nepalese</option>
                  <option value={'new zealander'}>New Zealander</option>
                  <option value={'ni-vanuatu'}>Ni-Vanuatu</option>
                  <option value={'nicaraguan'}>Nicaraguan</option>
                  <option value={'nigerien'}>Nigerien</option>
                  <option value={'north korean'}>North Korean</option>
                  <option value={'northern irish'}>Northern Irish</option>
                  <option value={'norwegian'}>Norwegian</option>
                  <option value={'omani'}>Omani</option>
                  <option value={'pakistani'}>Pakistani</option>
                  <option value={'palauan'}>Palauan</option>
                  <option value={'panamanian'}>Panamanian</option>
                  <option value={'papua new guinean'}>Papua New Guinean</option>
                  <option value={'paraguayan'}>Paraguayan</option>
                  <option value={'peruvian'}>Peruvian</option>
                  <option value={'polish'}>Polish</option>
                  <option value={'portuguese'}>Portuguese</option>
                  <option value={'qatari'}>Qatari</option>
                  <option value={'romanian'}>Romanian</option>
                  <option value={'russian'}>Russian</option>
                  <option value={'rwandan'}>Rwandan</option>
                  <option value={'saint lucian'}>Saint Lucian</option>
                  <option value={'salvadoran'}>Salvadoran</option>
                  <option value={'samoan'}>Samoan</option>
                  <option value={'san marinese'}>San Marinese</option>
                  <option value={'sao tomean'}>Sao Tomean</option>
                  <option value={'saudi'}>Saudi</option>
                  <option value={'scottish'}>Scottish</option>
                  <option value={'senegalese'}>Senegalese</option>
                  <option value={'serbian'}>Serbian</option>
                  <option value={'seychellois'}>Seychellois</option>
                  <option value={'sierra leonean'}>Sierra Leonean</option>
                  <option value={'singaporean'}>Singaporean</option>
                  <option value={'slovakian'}>Slovakian</option>
                  <option value={'slovenian'}>Slovenian</option>
                  <option value={'solomon islander'}>Solomon Islander</option>
                  <option value={'somali'}>Somali</option>
                  <option value={'south african'}>South African</option>
                  <option value={'south korean'}>South Korean</option>
                  <option value={'spanish'}>Spanish</option>
                  <option value={'sri lankan'}>Sri Lankan</option>
                  <option value={'sudanese'}>Sudanese</option>
                  <option value={'surinamer'}>Surinamer</option>
                  <option value={'swazi'}>Swazi</option>
                  <option value={'swedish'}>Swedish</option>
                  <option value={'swiss'}>Swiss</option>
                  <option value={'syrian'}>Syrian</option>
                  <option value={'taiwanese'}>Taiwanese</option>
                  <option value={'tajik'}>Tajik</option>
                  <option value={'tanzanian'}>Tanzanian</option>
                  <option value={'thai'}>Thai</option>
                  <option value={'togolese'}>Togolese</option>
                  <option value={'tongan'}>Tongan</option>
                  <option value={'trinidadian or tobagonian'}>Trinidadian or Tobagonian</option>
                  <option value={'tunisian'}>Tunisian</option>
                  <option value={'turkish'}>Turkish</option>
                  <option value={'tuvaluan'}>Tuvaluan</option>
                  <option value={'ugandan'}>Ugandan</option>
                  <option value={'ukrainian'}>Ukrainian</option>
                  <option value={'uruguayan'}>Uruguayan</option>
                  <option value={'uzbekistani'}>Uzbekistani</option>
                  <option value={'venezuelan'}>Venezuelan</option>
                  <option value={'vietnamese'}>Vietnamese</option>
                  <option value={'welsh'}>Welsh</option>
                  <option value={'yemenite'}>Yemenite</option>
                  <option value={'zambian'}>Zambian</option>
                  <option value={'zimbabwean'}>Zimbabwean</option>
                </Select>
              }
              control={control}
              name="nationality"
              id='nationality'
              defaultValue={''}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="privateMobile">
              MOBILE NUMBER
          </InputLabel>
            <Input inputRef={register}
              id="privateMobile"
              name="privateMobile"
              disableUnderline={true}
              defaultValue={''}
              error={errors.privateMobile}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="privateEmail">
              EMAIL ADDRESS
          </InputLabel>
            <Input inputRef={register}
              id="privateEmail"
              name="privateEmail"
              disableUnderline={true}
              defaultValue={''}
              error={errors.privateEmail}
            />
          </FormControl>

          <FormControl fullWidth >
            <InputLabel variant="filled" htmlFor="residentInCity">
              RESIDENT IN CITY
          </InputLabel>
            <Input inputRef={register}
              id="residentInCity"
              name="residentInCity"
              disableUnderline={true}
              defaultValue={''}
              error={errors.residentInCity}
            />
          </FormControl>
          <div className="form__input">
          <p className="form__input-label">RESIDENT IN SWEDEN:</p>

            <div className="form__input-field" style={{ marginRight: '10px' }}>
              <FormControl fullWidth >
                <InputLabel	disableAnimation={true} variant="filled" htmlFor="residentInSwedenYears">
            YEARS
          </InputLabel>
                <Controller
                  as={
                    <Select native inputRef={register}
                      onChange={e => register({ name: 'residentInSwedenYears', value: e.target.value })}
                      id="residentInSwedenYears"
                      name="residentInSwedenYears"
                      defaultValue={''}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.residentInSwedenYears}

                    >
                      <option aria-label="None" value="" />
                      <option value={'0'}>0 Years</option>
                      <option value={'1'}>1 Year</option>
                      <option value={'2'}>2 Years</option>
                      <option value={'3'}>3 Years</option>
                      <option value={'4'}>4 Years</option>
                      <option value={'5'}>5 Years</option>
                      <option value={'6'}>6 Years</option>
                      <option value={'7'}>7 Years</option>
                      <option value={'8'}>8 Years</option>
                      <option value={'9'}>9 Years</option>
                      <option value={'10'}>More than 10 Years</option>
                    </Select>
                  }
                  control={control}
                  name="residentInSwedenYears"
                  id='residentInSwedenYears'
                  defaultValue={''}
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
                    <Select native inputRef={register}
                      onChange={e => register({ name: 'residentInSwedenMonths', value: e.target.value })}
                      id="residentInSwedenMonths"
                      name="residentInSwedenMonths"
                      defaultValue={''}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.residentInSwedenMonths}

                    >
                      <option aria-label="None" value="" />
                      <option value={'0'}>0 Months</option>
                      <option value={'1'}>1 Month</option>
                      <option value={'2'}>2 Months</option>
                      <option value={'3'}>3 Months</option>
                      <option value={'4'}>4 Months</option>
                      <option value={'5'}>5 Months</option>
                      <option value={'6'}>6 Months</option>
                      <option value={'7'}>7 Months</option>
                      <option value={'8'}>8 Months</option>
                      <option value={'9'}>9 Months</option>
                      <option value={'10'}>10 Months</option>
                      <option value={'11'}>11 Months</option>
                    </Select>
                  }
                  control={control}
                  name="residentInSwedenMonths"
                  id='residentInSwedenMonths'
                  defaultValue={''}
                />
              </FormControl>
            </div>
          </div>


          {/* <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="residentInSweden">
              RESIDENT IN SWEDEN
          </InputLabel>
            <Input inputRef={register}
              id="residentInSweden"
              name="residentInSweden"
              disableUnderline={true}
              defaultValue={''}
              error={errors.residentInSweden}
            />
          </FormControl> */}

          {/* <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="experience">
              PROF. CLEANING EXPERIENCE (FULL-TIME)
          </InputLabel>
            <Input inputRef={register}
              id="experience"
              name="experience"
              disableUnderline={true}
              defaultValue={''}
              error={errors.experience}
            />
          </FormControl> */}
          <div className="form__input">
          <p className="form__input-label">PROF. CLEANING EXPERIENCE (FULL-TIME):</p>

            <div className="form__input-field" style={{ marginRight: '10px' }}>
              <FormControl fullWidth >
                <InputLabel	disableAnimation={true} variant="filled" htmlFor="experienceYears">
            YEARS
          </InputLabel>
                <Controller
                  as={
                    <Select native inputRef={register}
                      onChange={e => register({ name: 'experienceYears', value: e.target.value })}
                      id="experienceYears"
                      name="experienceYears"
                      defaultValue={''}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.experienceYears}

                    >
                      <option aria-label="None" value="" />
                      <option value={'0'}>0 Years</option>
                      <option value={'1'}>1 Year</option>
                      <option value={'2'}>2 Years</option>
                      <option value={'3'}>3 Years</option>
                      <option value={'4'}>4 Years</option>
                      <option value={'5'}>5 Years</option>
                      <option value={'6'}>6 Years</option>
                      <option value={'7'}>7 Years</option>
                      <option value={'8'}>8 Years</option>
                      <option value={'9'}>9 Years</option>
                      <option value={'10'}>More than 10 Years</option>
                    </Select>
                  }
                  control={control}
                  name="experienceYears"
                  id='experienceYears'
                  defaultValue={''}
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
                    <Select native inputRef={register}
                      onChange={e => register({ name: 'experienceMonths', value: e.target.value })}
                      id="experienceMonths"
                      name="experienceMonths"
                      defaultValue={''}
                      disableUnderline={true}
                      IconComponent={ArrowDown}
                      error={errors.experienceMonths}

                    >
                      <option aria-label="None" value="" />
                      <option value={'0'}>0 Months</option>
                      <option value={'1'}>1 Month</option>
                      <option value={'2'}>2 Months</option>
                      <option value={'3'}>3 Months</option>
                      <option value={'4'}>4 Months</option>
                      <option value={'5'}>5 Months</option>
                      <option value={'6'}>6 Months</option>
                      <option value={'7'}>7 Months</option>
                      <option value={'8'}>8 Months</option>
                      <option value={'9'}>9 Months</option>
                      <option value={'10'}>10 Months</option>
                      <option value={'11'}>11 Months</option>
                    </Select>
                  }
                  control={control}
                  name="experienceMonths"
                  id='experienceMonths'
                  defaultValue={''}
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
                <Select native inputRef={register}
                  onChange={e => register({ name: 'currentJobSituation', value: e.target.value })}
                  id="currentJobSituation"
                  name="currentJobSituation"
                  defaultValue={''}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.currentJobSituation}
                >
                  <option aria-label="None" value="" />
                  <option value={'UNEMPLOYED'}>Unemployed</option>
                  <option value={'CLEANER_EMPLOYED_BY_ANOTHER_COMPANY'}>Employed by Cleaning Company</option>
                  <option value={'EMPLOYED'}>Employed by Other Company</option>
                  <option value={'SELF_EMPLOYED_CLEANER'}>Own Cleaning Business</option>
                  <option value={'SELF_EMPLOYED'}>Other Own Business</option>
                </Select>
              }
              control={control}
              name="currentJobSituation"
              id='currentJobSituation'
              defaultValue={''}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="educationLevel" >
              EDUCATIONAL LEVEL
          </InputLabel>
            <Controller
              as={
                <Select native inputRef={register}
                  onChange={e => register({ name: 'educationLevel', value: e.target.value })}
                  id="educationLevel"
                  name="educationLevel"
                  defaultValue={''}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.educationLevel}
                >
                  <option aria-label="None" value="" />
                  <option value={'ELEMENTARY'}>Elementary School</option>
                  <option value={'SECONDARY'}>Secondary School</option>
                  <option value={'UNIVERSITY'}>University</option>
                </Select>
              }
              control={control}
              name="educationLevel"
              id='educationLevel'
              defaultValue={''}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="swedishLanguageLevel">
              SWEDISH LEVEL
          </InputLabel>
            <Controller
              as={
                <Select native inputRef={register}
                  onChange={e => register({ name: 'swedishLanguageLevel', value: e.target.value })}
                  id="swedishLanguageLevel"
                  name="swedishLanguageLevel"
                  defaultValue={''}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.swedishLanguageLevel}
                >
                  <option aria-label="None" value="" />
                  <option value={'NONE'}>None</option>
                  <option value={'BASIC'}>Basic</option>
                  <option value={'GOOD'}>Good</option>
                  <option value={'VERY GOOD'}>Very Good</option>
                  <option value={'FLUENT'}>Fluent</option>
                </Select>
              }
              control={control}
              name="swedishLanguageLevel"
              id='swedishLanguageLevel'
              defaultValue={''}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel variant="filled" htmlFor="englishLanguageLevel">
              ENGLISH LEVEL
          </InputLabel>
            <Controller
              as={
                <Select native inputRef={register}
                  onChange={e => register({ name: 'englishLanguageLevel', value: e.target.value })}
                  id="englishLanguageLevel"
                  name="englishLanguageLevel"
                  defaultValue={''}
                  disableUnderline={true}
                  IconComponent={ArrowDown}
                  error={errors.englishLanguageLevel}
                >
                  <option aria-label="None" value="" />
                  <option value={'NONE'}>None</option>
                  <option value={'BASIC'}>Basic</option>
                  <option value={'GOOD'}>Good</option>
                  <option value={'VERY GOOD'}>Very Good</option>
                  <option value={'FLUENT'}>Fluent</option>
                </Select>
              }
              control={control}
              name="englishLanguageLevel"
              id='englishLanguageLevel'
              defaultValue={''}
            />
          </FormControl>

          <div className="form__radio">
          <p className="form__radio-label">DRIVER'S LICENSE (NOT REQUIRED)</p>

          <div className="radio">
                 <input type='radio' name='hasDrivingLicense' value='TRUE' id="hasDrivingLicense1"  ref={register({ required: true })}/>
                 <label htmlFor="hasDrivingLicense1"></label>
                 <label htmlFor="hasDrivingLicense1" className="radio-text">Yes</label>
             </div>
             
             <div className="radio">
                 <input type='radio' name='hasDrivingLicense' value='FALSE' id="hasDrivingLicense2"  ref={register({ required: true })}/>
                 <label htmlFor="hasDrivingLicense2"></label>
                 <label htmlFor="hasDrivingLicense2" className="radio-text">No</label>
             </div>
             </div>

          <div className="form__radio">
          <p className="form__radio-label" style={{marginTop: 0}}>CAR (NOT REQUIRED)</p>
             <div className="radio">
                 <input type='radio' name='hasCar' value='TRUE' id="hasCar1"  ref={register({ required: true })}/>
                 <label htmlFor="hasCar1"></label>
                 <label htmlFor="hasCar1" className="radio-text">Yes</label>
             </div>
             
             <div className="radio">
                 <input type='radio' name='hasCar' value='FALSE' id="hasCar2"  ref={register({ required: true })}/>
                 <label htmlFor="hasCar2"></label>
                 <label htmlFor="hasCar2" className="radio-text">No</label>
             </div>
             </div>
            < div className="form__radio" style={{marginTop: '24px'}}>
             <div className="radio">
                 <input type='radio' name='confirm1' value='TRUE' id="confirm1"  ref={register({ required: true })}/>
                 <label htmlFor="confirm1"></label>
                 <label htmlFor="confirm1" className="radio-single">I declare that all information in my application is true.</label>
             </div>
             </div>

             < div className="form__radio" style={{marginTop: '-13px'}}>
             <div className="radio">
                 <input type='radio' name='confirm2' value='TRUE' id="confirm2"  ref={register({ required: true })}/>
                 <label htmlFor="confirm2"></label>
                 <label htmlFor="confirm2" className="radio-single">I allow Servia AB to register my 
data under current privacy laws. </label>
             </div>
             </div>


             

          <div className="form__botton" >
            <button type="submit" className="submit" onClick={scrollToTop}>
              APPLY NOW
            </button>

          </div>

        </div>


        <div className="form__botton" style={{ marginTop: '37px',marginBottom: '74px' }}>
          <div className="form__botton-1"><button onClick={() => reset()} className="clear">CLEAR</button></div>
          <div className="form__botton-1"><button onClick={() => closeCard()} className="clear">CLOSE</button></div>
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

