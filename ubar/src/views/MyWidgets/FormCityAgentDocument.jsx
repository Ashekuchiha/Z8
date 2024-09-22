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
    adminaction: yup.string().required('Admin Action selection is required.'),
  });

export default function FormCityAgentDocument() {
    const formik = useFormik({
        initialValues: {
            adminaction: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values, null, 2))
        },
      });
  return (
    <PageContainer title="City Agent Document" description="this is Custom Form page">
        <Breadcrumb title="City Agent DOcument" subtitle="" />
        <ParentCard title="Fill up the Following from">
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={1} mb={3}>
                    <Grid item xs={12} sm={12} lg={4}>
                        <CustomFormLabel>Agent profile picture</CustomFormLabel>
                        <input type="file" />
                        <CustomFormLabel>Your NID Copy picture </CustomFormLabel>
                        <input type="file" />
                        <CustomFormLabel>Your Trade license Copy</CustomFormLabel>
                        <input type="file" />
                        <CustomFormLabel>Bank Check book picture </CustomFormLabel>
                        <input type="file" />
                        <CustomFormLabel>Your office front and inside picture</CustomFormLabel>
                        <input type="file" />
                        <CustomFormLabel>Looking Super Admin Action </CustomFormLabel>
                        <CustomSelect
                        labelId="adminaction"
                        id="adminaction" fullWidth
                        name="adminaction"
                        value={formik.values.adminaction}
                        onChange={formik.handleChange}
                        >
                            <MenuItem value='action'>Active</MenuItem>
                            <MenuItem value='hold'>Hold</MenuItem>
                            <MenuItem value='pending'>Pending</MenuItem>
                            <MenuItem value='delete'>Delete</MenuItem>
                        </CustomSelect>
                        {formik.errors.adminaction && (
                        <FormHelperText error id="standard-weight-helper-text-email-login">
                        {' '}
                        {formik.errors.adminaction}{' '}
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
