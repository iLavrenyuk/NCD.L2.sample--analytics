import React from 'react';
import { DashboardBody } from '../components/DashboardBody';
import { ChangeContract } from '../components/ChangeContract';
import { HeaderDashboard } from '../components/HeaderDashboard';

export const DashboardPage = () => {
  return (
    <>
      <ChangeContract />
      <HeaderDashboard />
      <DashboardBody />
    </>
  );
};
