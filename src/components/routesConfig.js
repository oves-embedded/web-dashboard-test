import React from 'react';
import {BiAlignLeft} from 'react-icons/bi';

// Configuring the routes of the sidebar
const routesConfig = [
  {
    id: 'app',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        messageId: 'sidebar.app.dashboard',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/dashboard/dashboard',
      },
      {
        id: 'page-2',
        title: 'Page 2',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        icon: <BiAlignLeft />,
        url: '/sample/page-2',
      },
    ],
  },
];

export default routesConfig;
