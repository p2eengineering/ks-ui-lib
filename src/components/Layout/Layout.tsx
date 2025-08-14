import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";

export interface LayoutProps {
  children: React.ReactNode;
  sidebarItems?: any[];
  walletAddress?: string;
  walletBalance?: string;
  profileImage?: string;
  className?: string;
  // Controlled sidebar state
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
  onSidebarItemClick?: (item: any) => void;
  // Controlled sidebar active state
  activeSidebarId?: string;
  onActiveSidebarIdChange?: (activeId: string) => void;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  sidebarItems,
  walletAddress,
  walletBalance,
  profileImage,
  className = "",
  // Controlled sidebar state
  isSidebarOpen = true,
  onSidebarToggle,
  onSidebarItemClick,
  // Controlled sidebar active state
  activeSidebarId,
  onActiveSidebarIdChange,
}) => {
  const handleMenuToggle = () => {
    onSidebarToggle?.();
  };

  const handleSidebarItemClick = (item: any) => {
    onSidebarItemClick?.(item);
  };

  const handleActiveSidebarIdChange = (activeId: string) => {
    onActiveSidebarIdChange?.(activeId);
  };

  const componentClasses = ["layout", className].filter(Boolean).join(" ");

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
          activeId={activeSidebarId}
          onActiveIdChange={handleActiveSidebarIdChange}
        />

        <main
          className={`layout__main ${
            isSidebarOpen ? "layout__main--with-sidebar" : ""
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
