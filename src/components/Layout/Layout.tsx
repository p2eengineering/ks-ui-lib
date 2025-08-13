import React, { useState } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './Layout.scss';

export interface LayoutProps {
  children: React.ReactNode;
  sidebarItems?: any[];
  walletAddress?: string;
  walletBalance?: string;
  profileImage?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  sidebarItems,
  walletAddress,
  walletBalance,
  profileImage,
  className = '',
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = (item: any) => {
    console.log('Sidebar item clicked:', item);
    // Handle navigation or other actions here
  };

  const componentClasses = [
    'layout',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={componentClasses}>
      <Header
        onMenuToggle={handleMenuToggle}
        walletAddress={walletAddress}
        walletBalance={walletBalance}
        profileImage={profileImage}
      />
      
      <div className="layout__content">
        <Sidebar
          items={sidebarItems}
          isOpen={isSidebarOpen}
          onItemClick={handleSidebarItemClick}
        />
        
        <main className={`layout__main ${isSidebarOpen ? 'layout__main--with-sidebar' : ''}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
