import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import { IconChevronDown } from '@tabler/icons';
import { useFormik } from 'formik';
import * as yup from 'yup';

import React, { useState } from 'react'
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';

export default function CarForm() {

    const [expanded, setExpanded] = useState('panel1');
    const handleChange4 =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : true);
    };

    const validationSchema = yup.object({
        email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    });

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <div>
        <Accordion elevation={9} sx={{ mb: 2 }} expanded={expanded === 'panel1'} onChange={handleChange4('panel1')}>
            <AccordionSummary
            expandIcon={<IconChevronDown size="20" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                <Typography variant="h6">Car Documents</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
            </AccordionDetails>
        </Accordion>

    </div>
  )
}
