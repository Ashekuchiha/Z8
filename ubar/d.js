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
    mobile:  yup.string().min(11, 'Too Short!').max(11, 'Too Long!').required('Mobile number is Required'),
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    Bname: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Bank name is Required'),
    account: yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Account is Required'),
    oaddress: yup.string().min(2, 'Too Short!').required('Address is Required'),
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
            try {
                const response = await fetch('https://66daff06f47a05d55be6bad9.mockapi.io/need', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    const data = await response.json();
                    alert('Form submitted successfully');
                    console.log('Submitted data:', data);
                } else {
                    alert('Failed to submit the form');
                }
            } catch (error) {
                console.error('Error submitting the form:', error);
                alert('An error occurred. Please try again.');
            }
        },
    });

    return (
        <PageContainer title="Register City Agent Form" description="this is Custom Form page">
            <Breadcrumb title="Register City Agent Form" subtitle="" />
            <ParentCard title="Fill up the Following form">
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
                            {/* Other fields */}
                            <Grid item xs={12}>
                                <Button color="primary" variant="contained" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </ParentCard>
        </PageContainer>
    );
}
