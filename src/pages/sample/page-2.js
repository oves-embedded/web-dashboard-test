import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Page2 = asyncComponent(() => import('../../components/sample/Page2'));
export default AppPage(() => <Page2 />);
