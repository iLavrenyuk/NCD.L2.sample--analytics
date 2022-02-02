import React from 'react';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BlockUrge } from '../components/BlockUrge';
import { BlockTitle } from '../components/BlockTitle';
import { HowItWorks } from '../components/HowItWorks';
import { Opportunities } from '../components/Opportunities';
import { ChangeContract } from '../components/ChangeContract';

export const HomePage = () => {
  return (
    <>
      <ChangeContract />
      <Header />
      <BlockTitle />
      <About />
      <HowItWorks />
      <Opportunities />
      <BlockUrge />
      <Footer />
    </>
  );
};
