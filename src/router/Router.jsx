import React from 'react';
import { routes } from './routes';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './roles/RequireAuth';
import { DashboardPage } from '../pages/DashboardPage';

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<HomePage />} />
      <Route path={routes.Dashboard} element={<RequireAuth component={DashboardPage} />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
