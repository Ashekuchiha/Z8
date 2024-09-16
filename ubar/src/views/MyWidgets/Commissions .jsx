import { Button, FormHelperText, Grid, MenuItem } from '@mui/material'
import React from 'react'
import PageContainer from 'src/components/container/PageContainer'
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel'
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField'
import ParentCard from 'src/components/shared/ParentCard'
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb'

import { useFormik } from 'formik'
import * as yup from 'yup';

import CustomSelect from 'src/components/forms/theme-elements/CustomSelect'

const validationSchema = yup.object({
    commissions: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('categories name is Required'),
  });

export default function Commissions () {
    const formik = useFormik({
        initialValues: {
            commissions:'',
            commission_type:'',
            user_type:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2))
        },
      });
  return (
    <PageContainer title="Driver & Car Details Form" description="this is Custom Form page">
        <Breadcrumb title="Driver & Car Details Form" subtitle="" />
        <ParentCard title="Fill up the Following from">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1} mb={3}>
                    <Grid item xs={12} sm={12} lg={4}>
                        <CustomFormLabel>Commission type</CustomFormLabel>
                        <CustomSelect
                            labelId="commission_type"
                            id="commission_type" fullWidth
                            name="commission_type"
                            value={formik.values.commission_type}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value='type1'>type1</MenuItem>
                            <MenuItem value='type2'>type2</MenuItem>
                        </CustomSelect>
                        {formik.errors.commission_type && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {formik.errors.commission_type}{' '}
                            </FormHelperText>
                        )}
                        <CustomFormLabel>Commission</CustomFormLabel>
                        <CustomTextField
                            fullWidth
                            id="commissions"
                            name="commissions"
                            value={formik.values.commissions}
                            onChange={formik.handleChange}
                            error={formik.touched.commissions && Boolean(formik.errors.commissions)}
                            helperText={formik.touched.commissions && formik.errors.commissions}
                        />
                        <CustomFormLabel>User Type</CustomFormLabel>
                        <CustomSelect
                            labelId="user_type"
                            id="user_type" fullWidth
                            name="user_type"
                            value={formik.values.user_type}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value='active'>active</MenuItem>
                            <MenuItem value='off'>off</MenuItem>
                        </CustomSelect>
                        {formik.errors.user_type && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {formik.errors.user_type}{' '}
                            </FormHelperText>
                        )}
                    </Grid>
                    {/* <Grid item xs={12} sm={12} lg={4}>                       
                    </Grid> */}
                    {/* <Grid item xs={12} sm={12} lg={4}>
                        
                       
                    </Grid> */}
                </Grid>
                <Button color="primary" variant="contained" type="submit">Submit</Button>
            </form>
        </ParentCard>
    </PageContainer>
  )
}
