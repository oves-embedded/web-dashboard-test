import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';
// import Dashboard from '../../modules/dashboard/Dashboard';

const Dashboard = asyncComponent(() =>
  import('../../components/dashboard/Dashboard'),
);
export default AppPage(() => <Dashboard />);
