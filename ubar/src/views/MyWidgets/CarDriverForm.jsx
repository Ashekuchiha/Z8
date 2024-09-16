import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  FormControlLabel,
  RadioGroup,
  FormControl,
  InputAdornment,
  Stack,
  Button,
  Box,
  MenuItem,
  FormHelperText
} from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { IconChevronDown, IconHelp } from '@tabler/icons';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomRadio from 'src/components/forms/theme-elements/CustomRadio';
import CustomOutlinedInput from 'src/components/forms/theme-elements/CustomOutlinedInput';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';

const validationSchema = yup.object({
    fname: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Firstname is Required'),
    lname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    cmname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('too long'),
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    gender: yup.string().required('gender selection is required.'),
    city: yup.string().required('city selection is required.'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    changepassword: yup.string().when('password', {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref('password')], 'Both password need to be the same'),
    }),
  });


const CarDriverForm = () => {
  
  // default open slide
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange4 =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    const formik = useFormik({
        initialValues: {
          fname:'',
          phone:'',
          password:'',
          lname:'',
          gender: '',
          email: '',
          city: '',
          // changepassword: '',
          // car details
          cmnamee:'',
          cmyear:'',
          cenumber:'',
          crnumber:'',
          cbnumber:'',
          cttnumber:'',
          crpnumber:'',
          coban:'',
          cmname:'',
          cn:'',
          cry:'',
          ccolor:'',
          ccnumber:'',
          csnum:'',
          cfnumber:'',
          cinumberr:'',
          connumber:'',
          
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log("values",values)
        },
      });

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <form onSubmit={formik.handleSubmit}>
        {/* driver details */}
      <Accordion elevation={9} sx={{ mb: 2 }} expanded={expanded === 'panel1'} onChange={handleChange4('panel1')}>
        <AccordionSummary
          expandIcon={<IconChevronDown size="20" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Driver Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={3} mb={3}>
            <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel>First Name</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter first Name'
                    fullWidth
                    id="fname"
                    name="fname"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    error={formik.touched.fname && Boolean(formik.errors.fname)}
                    helperText={formik.touched.fname && formik.errors.fname}
                />
                <CustomFormLabel>Phone</CustomFormLabel>
                <CustomTextField
                    placeholder='Phone Number'
                    fullWidth
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                />
                <CustomFormLabel>Password</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel>Last Name</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter last Name'
                    fullWidth
                    id="lname"
                    name="lname"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    error={formik.touched.lname && Boolean(formik.errors.lname)}
                    helperText={formik.touched.lname && formik.errors.lname}
                />
                <CustomFormLabel>Gender</CustomFormLabel>
                <CustomSelect
                    labelId="gender-select"
                    id="gender" fullWidth
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                >
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                </CustomSelect>
                {formik.errors.gender && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.gender}{' '}
                    </FormHelperText>
                )}
                <CustomFormLabel>Profile pic</CustomFormLabel>
                <input type='file'></input>
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel>Email Address</CustomFormLabel>
                <CustomTextField
                placeholder='Enter E-mail'
                    fullWidth
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <CustomFormLabel>City</CustomFormLabel>
                <CustomSelect
                    labelId="city-select" placeholder='Select City'
                    id="city" fullWidth
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                >
                    <MenuItem value='male'>Dhaka</MenuItem>
                    <MenuItem value='female'>dylet</MenuItem>
                </CustomSelect>
                {formik.errors.city && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.city}{' '}
                    </FormHelperText>
                )}
            </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      {/* car details */}
      <Accordion elevation={9} sx={{ mb: 2 }} expanded={expanded === 'panel2'} onChange={handleChange4('panel2')}>
        <AccordionSummary
          expandIcon={<IconChevronDown size="20" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6">Car Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={3} mb={3}>
            <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel>Car Model Name</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter Car Model Name'
                    fullWidth
                    id="cmnamee"
                    name="cmnamee"
                    value={formik.values.cmnamee}
                    onChange={formik.handleChange}
                    error={formik.touched.cmnamee && Boolean(formik.errors.cmnamee)}
                    helperText={formik.touched.cmnamee && formik.errors.cmnamee}
                />
                <CustomFormLabel>Car Model Year</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="cmyear"
                    name="cmyear"
                    value={formik.values.cmyear}
                    onChange={formik.handleChange}
                    error={formik.touched.cmyear && Boolean(formik.errors.cmyear)}
                    helperText={formik.touched.cmyear && formik.errors.cmyear}
                />
                <CustomFormLabel>Car Engine Number</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="cenumber"
                    name="cenumber"
                    value={formik.values.cenumber}
                    onChange={formik.handleChange}
                    error={formik.touched.cenumber && Boolean(formik.errors.cenumber)}
                    helperText={formik.touched.cenumber && formik.errors.cenumber}
                />
                <CustomFormLabel>Car Registration Number</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="crnumber"
                    name="crnumber"
                    value={formik.values.crnumber}
                    onChange={formik.handleChange}
                    error={formik.touched.crnumber && Boolean(formik.errors.crnumber)}
                    helperText={formik.touched.crnumber && formik.errors.crnumber}
                />
                <CustomFormLabel>Car Bluebook Number</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="cbnumber"
                    name="cbnumber"
                    value={formik.values.cbnumber}
                    onChange={formik.handleChange}
                    error={formik.touched.cbnumber && Boolean(formik.errors.cbnumber)}
                    helperText={formik.touched.cbnumber && formik.errors.cbnumber}
                />
                <CustomFormLabel>Car Tax Token Number</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="cttnumber"
                    name="cttnumber"
                    value={formik.values.cttnumber}
                    onChange={formik.handleChange}
                    error={formik.touched.cttnumber && Boolean(formik.errors.cttnumber)}
                    helperText={formik.touched.cttnumber && formik.errors.cttnumber}
                />
                <CustomFormLabel>Car road permits Number</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="crpnumber"
                    name="crpnumber"
                    value={formik.values.crpnumber}
                    onChange={formik.handleChange}
                    error={formik.touched.crpnumber && Boolean(formik.errors.crpnumber)}
                    helperText={formik.touched.crpnumber && formik.errors.crpnumber}
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel>Car Owner Name</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter Car Owner Name'
                    fullWidth
                    id="coname"
                    name="coname"
                    value={formik.values.coname}
                    onChange={formik.handleChange}
                    error={formik.touched.coname && Boolean(formik.errors.coname)}
                    helperText={formik.touched.coname && formik.errors.coname}
                />
                <CustomFormLabel>Car Owner Bank Account Number</CustomFormLabel>
                <CustomTextField
                    fullWidth
                    id="coban"
                    name="coban"
                    value={formik.values.coban}
                    onChange={formik.handleChange}
                    error={formik.touched.coban && Boolean(formik.errors.coban)}
                    helperText={formik.touched.coban && formik.errors.coban}
                />
                <CustomFormLabel>Car Model Name</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter Car Model Name'
                    fullWidth
                    id="cmname"
                    name="cmname"
                    value={formik.values.cmname}
                    onChange={formik.handleChange}
                    error={formik.touched.cmname && Boolean(formik.errors.cmname)}
                    helperText={formik.touched.cmname && formik.errors.cmname}
                />
                <CustomFormLabel>Car Number</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter Car Number'
                    fullWidth
                    id="cn"
                    name="cn"
                    value={formik.values.cn}
                    onChange={formik.handleChange}
                    error={formik.touched.cn && Boolean(formik.errors.cn)}
                    helperText={formik.touched.cn && formik.errors.cn}
                />
                <CustomFormLabel>Car Registration Year</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter Car Registration Year'
                    fullWidth
                    id="cry"
                    name="cry"
                    value={formik.values.cry}
                    onChange={formik.handleChange}
                    error={formik.touched.cry && Boolean(formik.errors.cry)}
                    helperText={formik.touched.cry && formik.errors.cry}
                />
                <CustomFormLabel>Car Color</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter Car Color'
                    fullWidth
                    id="ccolor"
                    name="ccolor"
                    value={formik.values.ccolor}
                    onChange={formik.handleChange}
                    error={formik.touched.ccolor && Boolean(formik.errors.ccolor)}
                    helperText={formik.touched.ccolor && formik.errors.ccolor}
                />
                <CustomFormLabel>Car Chassize Number</CustomFormLabel>
                <CustomTextField
                    placeholder='Enter Car Chassize Number'
                    fullWidth
                    id="ccnumber"
                    name="ccnumber"
                    value={formik.values.ccnumber}
                    onChange={formik.handleChange}
                    error={formik.touched.ccnumber && Boolean(formik.errors.ccnumber)}
                    helperText={formik.touched.ccnumber && formik.errors.ccnumber}
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel>Car Sets</CustomFormLabel>
                <CustomTextField
                placeholder='How many sets'
                    fullWidth
                    id="csnum"
                    name="csnum"
                    value={formik.values.csnum}
                    onChange={formik.handleChange}
                    error={formik.touched.csnum && Boolean(formik.errors.csnum)}
                    helperText={formik.touched.csnum && formik.errors.csnum}
                />
                <CustomFormLabel>Car Fitness Number</CustomFormLabel>
                <CustomTextField
                placeholder='Car Fitness Number'
                    fullWidth
                    id="cfnumber"
                    name="cfnumber"
                    value={formik.values.cfnumber}
                    onChange={formik.handleChange}
                    error={formik.touched.cfnumber && Boolean(formik.errors.cfnumber)}
                    helperText={formik.touched.cfnumber && formik.errors.cfnumber}
                />
                <CustomFormLabel>Car insurance Number</CustomFormLabel>
                <CustomTextField
                placeholder='Enter insurance number'
                    fullWidth
                    id="cinumberr"
                    name="cinumberr"
                    value={formik.values.cinumberr}
                    onChange={formik.handleChange}
                    error={formik.touched.cinumberr && Boolean(formik.errors.cinumberr)}
                    helperText={formik.touched.cinumberr && formik.errors.cinumberr}
                />
                <CustomFormLabel>Car Owner NID Number</CustomFormLabel>
                <CustomTextField
                placeholder='Enter Car owner nid Number'
                    fullWidth
                    id="connumber"
                    name="connumber"
                    value={formik.values.connumber}
                    onChange={formik.handleChange}
                    error={formik.touched.connumber && Boolean(formik.errors.connumber)}
                    helperText={formik.touched.connumber && formik.errors.connumber}
                />
                <CustomFormLabel>Car Owner Image</CustomFormLabel>
                <input type='file'></input>
            </Grid>
        </Grid>
        </AccordionDetails>
      </Accordion>
      {/* car and driver documents */}
      <Accordion elevation={9} sx={{ mb: 2 }} expanded={expanded === 'panel3'} onChange={handleChange4('panel3')}>
        <AccordionSummary
          expandIcon={<IconChevronDown size="20" />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h6">Car & Driver Documents</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel>Driver License Front Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver NID Front Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver House Electricity Bill</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver Bank Cheque Book </CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Front Side Picture</CustomFormLabel>
                    <input type='file'></input>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel>Driver License Back Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver NID Back Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver House Electricity Bill Back SIde</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver Bank Card </CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Front Side Picture</CustomFormLabel>
                    <input type='file'></input>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel>Car Fitness License picture</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Tax Token</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Owner Picture</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Owner NID</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Insurance Picture</CustomFormLabel>
                    <input type='file'></input>
                </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>
        <Button 
        color="primary"
        variant="contained"
        type="submit"
        disabled={formik.isSubmitting}  // Disable the button when the form is submitting
        >
        {formik.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>

      </form>
    </div>
  );
};

export default CarDriverForm;
