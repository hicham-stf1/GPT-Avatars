import React, { useState } from 'react';
import DashboardHeader from './components/header/DashboardHeader';
import Sidebar from './components/sidebar/Sidebar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          pageTitle="Analyses"
        />

        <main className="px-4 sm:px-6 lg:px-8 py-2 w-full max-w-9xl mx-auto">
          <div className="sm:flex sm:justify-between sm:items-center mb-8">
            <div className="mb-4 sm:mb-0" />
            <div />
          </div>

          <div className="mx-3 flex justify-center items-center">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
