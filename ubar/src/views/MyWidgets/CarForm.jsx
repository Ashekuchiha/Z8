import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import { IconChevronDown } from '@tabler/icons';
import React, { useState } from 'react'
import CustomFormLabel from 'src/components/forms/theme-elements/CustomFormLabel';

export default function CarForm() {

    const [expanded, setExpanded] = useState('panel1');
    const handleChange4 =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : true);
    };

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
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel>Driver License Front Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver NID Front Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver House Electricity Bill</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver Bank Cheque Book </CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Front Side Picture</CustomFormLabel>
                    <input type='file'></input>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                <CustomFormLabel>Driver License Back Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver NID Back Side</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver House Electricity Bill Back SIde</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Driver Bank Card </CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Front Side Picture</CustomFormLabel>
                    <input type='file'></input>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <CustomFormLabel>Car Fitness License picture</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Tax Token</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Owner Picture</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Owner NID</CustomFormLabel>
                    <input type='file'></input>
                    <CustomFormLabel>Car Insurance Picture</CustomFormLabel>
                    <input type='file'></input>
                </Grid>
            </Grid>
            </AccordionDetails>
        </Accordion>

    </div>
  )
}
