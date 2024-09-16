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
import { DateTimePicker, LocalizationProvider, MobileDateTimePicker } from '@mui/lab'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

const validationSchema = yup.object({
  });

export default function Coupons () {

    const formik = useFormik({
        initialValues: {
            coupon_code:'',
            percentage:'',
            status:'',
            startDate:'',
            endDate:'',
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
                        <CustomFormLabel>Coupon Code</CustomFormLabel>
                        <CustomTextField
                            fullWidth
                            id="coupon_code"
                            name="coupon_code"
                            value={formik.values.coupon_code}
                            onChange={formik.handleChange}
                            error={formik.touched.coupon_code && Boolean(formik.errors.coupon_code)}
                            helperText={formik.touched.coupon_code && formik.errors.coupon_code}
                        />
                        <CustomFormLabel>Start Date</CustomFormLabel>
                        <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formik.values.startDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.startDate && formik.errors.startDate ? 'input-error' : ''}
                        />
                        {formik.touched.startDate && formik.errors.startDate ? (
                        <div className="error">{formik.errors.startDate}</div>
                        ) : null}

                        <CustomFormLabel>End Date</CustomFormLabel>
                        <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formik.values.endDate}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={formik.touched.endDate && formik.errors.endDate ? 'input-error' : ''}
                        />
                        {formik.touched.endDate && formik.errors.endDate ? (
                        <div className="error">{formik.errors.endDate}</div>
                        ) : null}

                        <MobileDateTimePicker
                        placeholder="End date"
                        onChange={() => { }}
                        renderInput={(inputProps) => (
                        <CustomTextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        inputProps={{ 'aria-label': 'basic date picker' }}
                        {...inputProps}
                        />
                        )}
                        value={new Date()}
                        />
                        <CustomFormLabel>Percentage</CustomFormLabel>
                        <CustomSelect
                            labelId="percentage"
                            id="percentage" fullWidth
                            name="percentage"
                            value={formik.values.percentage}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value='10'>10%</MenuItem>
                            <MenuItem value='20'>20%</MenuItem>
                        </CustomSelect>
                        {formik.errors.percentage && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {formik.errors.percentage}{' '}
                            </FormHelperText>
                        )}
                        <CustomFormLabel>Status</CustomFormLabel>
                        <CustomSelect
                            labelId="status"
                            id="status" fullWidth
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                        >
                            <MenuItem value='type1'>type1</MenuItem>
                            <MenuItem value='type2'>type2</MenuItem>
                        </CustomSelect>
                        {formik.errors.status && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {' '}
                                {formik.errors.status}{' '}
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
