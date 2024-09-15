import React from 'react'
import {
    CardContent,
    FormHelperText,
    Grid,
    MenuItem
} from '@mui/material';

import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

import { Box, Button, Stack, FormGroup, FormControlLabel, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import CarForm from './CarForm';

const validationSchema = yup.object({
    fname: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Firstname is Required'),
    lname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
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

export default function FormDriver() {
    const formik = useFormik({
        initialValues: {
          fname:'',
          lname:'',
          gender:'',
          city:'',
          firstName: '',
          email: '',
          password: '',
          changepassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <form onSubmit={formik.handleSubmit}>
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
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                </CustomSelect>
                {formik.errors.city && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.city}{' '}
                    </FormHelperText>
                )}
            </Grid>
        </Grid>
        <CarForm/>
        <Button color="primary" variant="contained" type="submit">
        Sign In
        </Button>
    </form>
  )
}
