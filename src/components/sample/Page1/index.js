import React from 'react';
import {Box} from '@mui/material';
import AppPageMeta from '../../../@crema/core/AppPageMeta';
import AppGridContainer from '../../../@crema/core/AppGridContainer';
import Grid from '@mui/material/Grid';

const Page1 = () => {
  return (
    <>
      <AppGridContainer>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4}></Grid>
      </AppGridContainer>
    </>
  );
};

export default Page1;
