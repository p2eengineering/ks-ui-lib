import React, { useState, useEffect } from 'react';
import { 
  FaTh, 
  FaFileContract, 
  FaCogs, 
  FaExchangeAlt, 
  FaGift, 
  FaKey, 
  FaCog 
} from 'react-icons/fa';
import './Sidebar.scss';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface SidebarProps {
  items?: SidebarItem[];
  isOpen?: boolean;
  defaultActiveId?: string;
  onItemClick?: (item: SidebarItem) => void;
  onActiveChange?: (activeId: string) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  isOpen = true,
  defaultActiveId = 'dashboard',
  onItemClick,
  onActiveChange,
  className = '',
}) => {
  const [activeId, setActiveId] = useState(defaultActiveId);

  const defaultItems: SidebarItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <FaTh />,
    },
    {
      id: 'smart-contract',
      label: 'Smart Contract',
      icon: <FaFileContract />,
    },
    {
      id: 'api-gateway',
      label: 'API Gateway',
      icon: <FaCogs />,
    },
    {
      id: 'transaction-monitoring',
      label: 'Transaction Monitoring',
      icon: <FaExchangeAlt />,
    },
    {
      id: 'subscription',
      label: 'Subscription',
      icon: <FaGift />,
    },
    {
      id: 'api-key-generation',
      label: 'API Key Generation',
      icon: <FaKey />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <FaCog />,
    },
  ];

  const sidebarItems = items || defaultItems;

  // Update active state when defaultActiveId changes
  useEffect(() => {
    setActiveId(defaultActiveId);
  }, [defaultActiveId]);

  const handleItemClick = (item: SidebarItem) => {
    // Update active state
    setActiveId(item.id);
    
    // Call the onActiveChange callback
    onActiveChange?.(item.id);
    
    // Call the onItemClick callback
    onItemClick?.(item);
    
    // Handle navigation if href is provided
    if (item.href) {
      window.location.href = item.href;
    }
    
    // Handle custom onClick if provided
    if (item.onClick) {
      item.onClick();
    }
  };

  const componentClasses = [
    'sidebar',
    isOpen ? 'sidebar--open' : 'sidebar--closed',
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={componentClasses}>
      <div className="sidebar__content">
        <ul className="sidebar__menu">
          {sidebarItems.map((item) => {
            const isActive = item.isActive !== undefined ? item.isActive : item.id === activeId;
            
            return (
              <li key={item.id} className="sidebar__menu-item">
                <button
                  type="button"
                  className={`sidebar__menu-button ${isActive ? 'sidebar__menu-button--active' : ''}`}
                  onClick={() => handleItemClick(item)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="sidebar__menu-icon">
                    {item.icon}
                  </span>
                  <span className="sidebar__menu-label">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
