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
    cname: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('categories name is Required'),
  });

export default function CategoriesForm() {
    const formik = useFormik({
        initialValues: {
            cname:'',
            status:'',
            description:'',
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
                        <CustomFormLabel>category_name
                        </CustomFormLabel>
                        <CustomTextField
                            fullWidth
                            id="cname"
                            name="cname"
                            value={formik.values.cname}
                            onChange={formik.handleChange}
                            error={formik.touched.cname && Boolean(formik.errors.cname)}
                            helperText={formik.touched.cname && formik.errors.cname}
                        />
                        <CustomFormLabel>category_icon
                        </CustomFormLabel>
                        <input type='file'></input>
                        <CustomFormLabel>category_image</CustomFormLabel>
                        <input type='file'></input>
                        <CustomFormLabel>Profile pic</CustomFormLabel>
                        <input type='file'></input>
                        <CustomFormLabel>category_description</CustomFormLabel>
                        <CustomTextField
                            fullWidth
                            id="description"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
                        />
                         <CustomFormLabel>category_status</CustomFormLabel>
                        <CustomSelect
                            labelId="status-select"
                            id="status" fullWidth
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value='active'>active</MenuItem>
                            <MenuItem value='off'>off</MenuItem>
                        </CustomSelect>
                        {formik.errors.city && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {formik.errors.city}{' '}
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
