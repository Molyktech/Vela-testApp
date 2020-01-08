import React from 'react';
import './Dashboard.css';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { Main } from './Main';
export const Dashboard = () => {
  return (
    <div className='grid-container'>
      <div className='header'>
        <Navbar />
      </div>
      <Sidebar className='grid-sidebar' />

      <Main className='content' />
    </div>
  );
};
