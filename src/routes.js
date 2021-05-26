import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const routes = [
  { path: '/home', name: 'Dashboard', component: Dashboard },
  ];

export default routes;
