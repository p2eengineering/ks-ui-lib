import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'rounded' | 'segmented';
  showIcons?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({
  items,
  activeTab,
  onTabChange,
  size = 'medium',
  variant = 'rounded',
  showIcons = false,
  className = '',
  style,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(activeTab || items[0]?.id || '');

  const currentActiveTab = activeTab || internalActiveTab;

  const handleTabClick = (tabId: string) => {
    if (onTabChange) {
      onTabChange(tabId);
    } else {
      setInternalActiveTab(tabId);
    }
  };

  const componentClasses = [
    'tabs',
    `tabs--${size}`,
    `tabs--${variant}`,
    showIcons ? 'tabs--with-icons' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={componentClasses} style={style} role="tablist">
      {items.map((item, index) => {
        const isActive = item.id === currentActiveTab;
        const isDisabled = item.disabled;

        const tabClasses = [
          'tabs__tab',
          isActive ? 'tabs__tab--active' : '',
          isDisabled ? 'tabs__tab--disabled' : '',
          index === 0 ? 'tabs__tab--first' : '',
          index === items.length - 1 ? 'tabs__tab--last' : ''
        ].filter(Boolean).join(' ');

        return (
          <button
            key={item.id}
            type="button"
            className={tabClasses}
            onClick={() => !isDisabled && handleTabClick(item.id)}
            disabled={isDisabled}
            role="tab"
            aria-selected={isActive}
            aria-controls={`panel-${item.id}`}
          >
            {showIcons && item.icon && (
              <span className="tabs__icon">
                {item.icon}
              </span>
            )}
            <span className="tabs__label">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
