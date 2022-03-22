import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Page1 = asyncComponent(() => import('../../components/sample/Page1'));
export default AppPage(() => <Page1 />);
