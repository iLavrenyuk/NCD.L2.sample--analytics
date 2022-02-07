import React from 'react';
import { Header } from '../components/Header';
import { DatasetBody } from '../components/DatasetBody';
import { ChangeContract } from '../components/ChangeContract';

export const DatasetPage = () => {
  return (
    <>
      <ChangeContract />
      <Header />
      <DatasetBody />
    </>
  );
};
