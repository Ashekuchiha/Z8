import { Button, Grid } from '@mui/material'

import React from 'react'

import PageContainer from 'src/components/container/PageContainer'
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField'
import ParentCard from 'src/components/shared/ParentCard'
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb'

import { useFormik } from 'formik'
import * as yup from 'yup';

const validationSchema = yup.object({
    fname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Firstname is Required'),
    lname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    btlname: yup.string().required('Business Tread license Name is Required'),
    mobile:  yup.string().min(11, 'Too Short!').max(11, 'Too Long!').required('mobile number is Required'),
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    Bname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Bank name is Required'),
    account: yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('account is Required'),
    oaddress: yup.string().min(2, 'Too Short!').required('address is Required'),
  });

export default function FormCityAgentRegistration() {
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            btlname: '',
            mobile: '',
            email: '',
            Bname: '',
            account: '',
            oaddress: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2))
        //   try {
        //     const response = await fetch('https://66daff06f47a05d55be6bad9.mockapi.io/need', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(values),
        //     });

        //     if (response.ok) {
        //         const data = await response.json();
        //         alert('Form submitted successfully');
        //         console.log('Submitted data:', data);
        //     } else {
        //         alert('Failed to submit the form');
        //     }
        // } catch (error) {
        //     console.error('Error submitting the form:', error);
        //     alert('An error occurred. Please try again.');
        // }
        },
      });
  return (
    <PageContainer title="Register City Agent Form" description="this is Custom Form page">
        <Breadcrumb title="Register City Agent Form" subtitle="" />
        <ParentCard title="Fill up the Following from">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} mb={3}>
                    <Grid container spacing={2} mb={3}>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 1, lg: 1 }}>
                            <CustomFormLabel>First Name</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="fname"
                                name="fname"
                                value={formik.values.fname}
                                onChange={formik.handleChange}
                                error={formik.touched.fname && Boolean(formik.errors.fname)}
                                helperText={formik.touched.fname && formik.errors.fname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 2, lg: 2 }}>
                            <CustomFormLabel>Last Name</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="lname"
                                name="lname"
                                value={formik.values.lname}
                                onChange={formik.handleChange}
                                error={formik.touched.lname && Boolean(formik.errors.lname)}
                                helperText={formik.touched.lname && formik.errors.lname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 3, lg: 3 }}>
                            <CustomFormLabel>Mobile</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="mobile"
                                name="mobile"
                                value={formik.values.mobile}
                                onChange={formik.handleChange}
                                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                                helperText={formik.touched.mobile && formik.errors.mobile}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 4, lg: 4 }}>
                            <CustomFormLabel>Email</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 5, lg: 5 }}>
                            <CustomFormLabel>Bank Name</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="Bname"
                                name="Bname"
                                value={formik.values.Bname}
                                onChange={formik.handleChange}
                                error={formik.touched.Bname && Boolean(formik.errors.Bname)}
                                helperText={formik.touched.Bname && formik.errors.Bname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 6, lg: 6 }}>
                            <CustomFormLabel>Account</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="account"
                                name="account"
                                value={formik.values.account}
                                onChange={formik.handleChange}
                                error={formik.touched.account && Boolean(formik.errors.account)}
                                helperText={formik.touched.account && formik.errors.account}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 7, lg: 7 }}>
                            <CustomFormLabel>Business Tread License Name</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="btlname"
                                name="btlname"
                                value={formik.values.btlname}
                                onChange={formik.handleChange}
                                error={formik.touched.btlname && Boolean(formik.errors.btlname)}
                                helperText={formik.touched.btlname && formik.errors.btlname}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} order={{ xs: 8, lg: 8 }}>
                            <CustomFormLabel>Office Address</CustomFormLabel>
                            <CustomTextField
                                fullWidth
                                id="oaddress"
                                name="oaddress"
                                value={formik.values.oaddress}
                                onChange={formik.handleChange}
                                error={formik.touched.oaddress && Boolean(formik.errors.oaddress)}
                                helperText={formik.touched.oaddress && formik.errors.oaddress}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">Submit</Button>
            </form>
        </ParentCard>
    </PageContainer>
  )
}
