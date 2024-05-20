// src/components/Body.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Head from './Head';

const Body = () => {
  return (
    <div className="flex flex-col h-screen">
      <Head /> {/* Head component is always rendered at the top */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4 overflow-auto">
          <Outlet /> {/* This will render the matched child routes */}
        </div>
      </div>
    </div>
  );
};

export default Body;
