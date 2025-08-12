import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import { 
  FaWallet, 
  FaShieldAlt, 
  FaUsers, 
  FaCog, 
  FaHome, 
  FaChartBar, 
  FaHistory,
  FaCog as FaSettings
} from 'react-icons/fa';
import './Sidebar.scss';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: FaHome,
      description: 'Overview and analytics'
    },
    {
      id: 'custodial',
      label: 'Custodial Wallet',
      icon: FaShieldAlt,
      description: 'Third-party managed wallet'
    },
    {
      id: 'self-custodial',
      label: 'Self-Custodial',
      icon: FaWallet,
      description: 'Full control over keys'
    },
    {
      id: 'mpc',
      label: 'MPC Wallet',
      icon: FaUsers,
      description: 'Multi-party computation'
    },
    {
      id: 'transactions',
      label: 'Transactions',
      icon: FaHistory,
      description: 'Transaction history'
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: FaChartBar,
      description: 'Performance metrics'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: FaSettings,
      description: 'Global configuration'
    }
  ];

  return (
    <div className="sidebar">
      <Card className="sidebar-card">
        <Card.Body className="p-0">
          <div className="sidebar-header">
            <h5 className="mb-0">
              <FaCog className="me-2" />
              Wallet Config
            </h5>
          </div>
          
          <Nav variant="pills" className="flex-column sidebar-nav">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Nav.Item key={item.id} className="sidebar-nav-item">
                  <Nav.Link
                    active={activeTab === item.id}
                    onClick={() => onTabChange(item.id)}
                    className="sidebar-nav-link"
                  >
                    <div className="d-flex align-items-center">
                      <Icon className="sidebar-icon" />
                      <div className="sidebar-content">
                        <div className="sidebar-label">{item.label}</div>
                        <small className="sidebar-description">{item.description}</small>
                      </div>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;
