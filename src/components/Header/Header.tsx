import React, { useState } from 'react';
import { FaBars, FaBell, FaQuestionCircle, FaTh, FaWallet } from 'react-icons/fa';
import './Header.scss';

export interface HeaderProps {
  onMenuToggle?: () => void;
  walletAddress?: string;
  walletBalance?: string;
  profileImage?: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  walletAddress = '0x2E22...CD71',
  walletBalance = '$2,500.00',
  profileImage,
  className = '',
}) => {
  const [showAppsMenu, setShowAppsMenu] = useState(false);

  const handleMenuToggle = () => {
    onMenuToggle?.();
  };

  const handleAppsToggle = () => {
    setShowAppsMenu(!showAppsMenu);
  };

  const componentClasses = [
    'header',
    className
  ].filter(Boolean).join(' ');

  return (
    <header className={componentClasses}>
      <div className="header__left">
        <div className="header__logo">
          <span className="header__logo-text">KALP STUDIO</span>
        </div>
        <button
          type="button"
          className="header__menu-toggle"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      <div className="header__right">
        <button
          type="button"
          className="header__icon-button"
          aria-label="Notifications"
        >
          <FaBell />
        </button>

        <button
          type="button"
          className="header__icon-button"
          aria-label="Help"
        >
          <FaQuestionCircle />
        </button>

        <div className="header__wallet">
          <div className="header__wallet-icon">
            <FaWallet />
          </div>
          <div className="header__wallet-info">
            <div className="header__wallet-address">{walletAddress}</div>
            <div className="header__wallet-balance">{walletBalance}</div>
          </div>
        </div>

        <div className="header__separator"></div>

        <div className="header__apps">
          <button
            type="button"
            className="header__apps-button"
            onClick={handleAppsToggle}
            aria-label="Apps"
          >
            <FaTh />
            <span className="header__apps-text">Apps</span>
          </button>
          
          {showAppsMenu && (
            <div className="header__apps-menu">
              <div className="header__apps-menu-item">Dashboard</div>
              <div className="header__apps-menu-item">Smart Contract</div>
              <div className="header__apps-menu-item">API Gateway</div>
              <div className="header__apps-menu-item">Transaction Monitoring</div>
              <div className="header__apps-menu-item">Subscription</div>
              <div className="header__apps-menu-item">API Key Generation</div>
              <div className="header__apps-menu-item">Settings</div>
            </div>
          )}
        </div>

        <div className="header__profile">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="header__profile-image"
            />
          ) : (
            <div className="header__profile-placeholder">
              <div className="header__profile-avatar">
                <div className="header__profile-initials">JD</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
