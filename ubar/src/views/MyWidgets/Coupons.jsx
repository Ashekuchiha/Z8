import React from 'react';
import { Button, FormHelperText, Grid, MenuItem, TextField } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import CustomSelect from 'src/components/forms/theme-elements/CustomSelect';
import ParentCard from 'src/components/shared/ParentCard';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const validationSchema = yup.object({
  coupon_code: yup.string().required('Coupon code is required'),
  percentage: yup.string().required('Percentage is required'),
  status: yup.string().required('Status is required'),
  startDate: yup.date().required('Start date is required'),
  endDate: yup.date().required('End date is required'),
});

export default function Coupons() {
  const formik = useFormik({
    initialValues: {
      coupon_code: '',
      percentage: '',
      status: '',
      startDate: null,
      endDate: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <PageContainer title="Driver & Car Details Form" description="This is a Custom Form page">
      <Breadcrumb title="Driver & Car Details Form" subtitle="" />
      <ParentCard title="Fill up the Following form">
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                //   label="Select a start date"
                  value={formik.values.startDate}
                  onChange={(newValue) => {
                    formik.setFieldValue('startDate', newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="startDate"
                      error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                      helperText={formik.touched.startDate && formik.errors.startDate}
                    />
                  )}
                />
              </LocalizationProvider>

              <CustomFormLabel>End Date</CustomFormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                //   label="Select an end date"
                  value={formik.values.endDate}
                  onChange={(newValue) => {
                    formik.setFieldValue('endDate', newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      name="endDate"
                      error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                      helperText={formik.touched.endDate && formik.errors.endDate}
                    />
                  )}
                />
              </LocalizationProvider>

              <CustomFormLabel>Percentage</CustomFormLabel>
              <CustomSelect
                labelId="percentage"
                id="percentage"
                fullWidth
                name="percentage"
                value={formik.values.percentage}
                onChange={formik.handleChange}
              >
                <MenuItem value="10">10%</MenuItem>
                <MenuItem value="20">20%</MenuItem>
              </CustomSelect>
              {formik.errors.percentage && (
                <FormHelperText error>
                  {formik.errors.percentage}
                </FormHelperText>
              )}

              <CustomFormLabel>Status</CustomFormLabel>
              <CustomSelect
                labelId="status"
                id="status"
                fullWidth
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              >
                <MenuItem value="type1">type1</MenuItem>
                <MenuItem value="type2">type2</MenuItem>
              </CustomSelect>
              {formik.errors.status && (
                <FormHelperText error>
                  {formik.errors.status}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </ParentCard>
    </PageContainer>
  );
}
