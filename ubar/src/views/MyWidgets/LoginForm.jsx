// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   FormGroup,
//   FormControlLabel,
//   Button,
//   Stack,
//   Divider,
// } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';

// // import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
// // import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
// // import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';

// // import AuthSocialButtons from './AuthSocialButtons';
// import { useDispatch, useSelector } from 'react-redux';
// // import { login } from 'src/views/MyWidgets/userSlice';

// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
// import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
// import { login } from './userSlice';


// const validationSchema = Yup.object({
//   username: Yup.string().required('Username is required'),
//   password: Yup.string().required('Password is required'),
// });

// const LoginForm = ({ title, subtitle, subtext }) => {
  
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);

//   const formik = useFormik({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       const result = await dispatch(login(values));
//       if (result.payload) {
//         navigate('/dashboard');
//       }
//     },
//   });


//   return (
//     <>
//       {title ? (
//         <Typography fontWeight="700" variant="h3" mb={1}>
//           {title}
//         </Typography>
//       ) : null}

//       {subtext}

//       <form onSubmit={formik.handleSubmit}>
//         <Stack>
//           <Box>
//             <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
//             <CustomTextField 
            
//             id="username"
//             name="username"
//             variant="outlined"
//             fullWidth
//             value={formik.values.username}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.username && Boolean(formik.errors.username)}
//             helperText={formik.touched.username && formik.errors.username}
          
//              />
//           </Box>
//           <Box>
//             <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
//             <CustomTextField 
//             id="password"
//             name="password"
//             type="password"
//             variant="outlined"
//             fullWidth
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.password && Boolean(formik.errors.password)}
//             helperText={formik.touched.password && formik.errors.password}
          
//             />
//           </Box>
//         </Stack>
//         <Box>
//           <Button
//             color="primary"
//             variant="contained"
//             size="large"
//             fullWidth
//             type="submit"
//           >
//             Sign In 
//           </Button>
//         </Box>
//         {subtitle}
//       </form>
//     </>
//   )
// };

// export default LoginForm;



// src/pages/auth/LoginForm.js
import React, { useEffect } from 'react';
import { Box, Typography, Stack, Button, Divider } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { login } from './userSlice';
import AuthSocialButtons from '../authentication/authForms/AuthSocialButtons';


// Define validation schema with Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const role = useSelector((state) => state.user.role);

  // Redirect user to dashboard if already authenticated
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/dashboard');
  //   }
  //   console.log(isAuthenticated)
  // }, [isAuthenticated, navigate]);
  useEffect(() => {
    if (isAuthenticated) {
      // if (role === 'admin') {
      //   navigate('/admin-dashboard');
      // } else if (role === 'city admin') {
      //   navigate('/city-admin-dashboard');
      // }
      navigate('/admin')
    }
  }, [isAuthenticated, role, navigate]);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    // onSubmit: async (values, { setErrors }) => {
    //   const result = await dispatch(login(values));
    //   if (result.error) {
    //     setErrors({ general: 'Invalid username or password' });
    //   }
    // },
    onSubmit: async (values, { setErrors }) => {
      try {
        await dispatch(login(values));
        // if (role === 'admin') {
        //   navigate('/admin-dashboard');
        // } else if (role === 'city admin') {
        //   navigate('/city-admin-dashboard');
        // }
        navigate('/admin')
      } catch (error) {
        setErrors({ general: 'Invalid username or password' });
      }
    },
  });

  return (
    <>
      <Typography fontWeight="700" variant="h3" mb={1}>
        Login
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} mb={2}>
          <Box>
            <CustomFormLabel htmlFor="username">Username</CustomFormLabel>
            <CustomTextField
              id="username"
              name="username"
              variant="outlined"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Box>

          <Box mb={2}>
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Box>
        </Stack>

        {formik.errors.general && (
          <Typography color="error" variant="body2">
            {formik.errors.general}
          </Typography>
        )}

        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          
        >
          Sign In
        </Button>
      </form>
    </>
  );
};

export default LoginForm;

