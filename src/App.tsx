import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import CustodialWalletConfig from './components/wallet-configs/CustodialWalletConfig';
import SelfCustodialWalletConfig from './components/wallet-configs/SelfCustodialWalletConfig';
import MPCWalletConfig from './components/wallet-configs/MPCWalletConfig';
import Transactions from './components/Transactions/Transactions';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';
import './App.scss';

export type WalletType = 'custodial' | 'self-custodial' | 'mpc';

function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'custodial':
        return <CustodialWalletConfig />;
      case 'self-custodial':
        return <SelfCustodialWalletConfig />;
      case 'mpc':
        return <MPCWalletConfig />;
      case 'transactions':
        return <Transactions />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="wallet-config-app">
      {/* Sidebar Toggle Button */}
      <button 
        className="sidebar-toggle"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? '' : 'sidebar-closed'}`}>
        <Container fluid>
          {renderContent()}
        </Container>
      </div>
    </div>
  );
}

export default App;
