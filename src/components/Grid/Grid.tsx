import React from 'react';

export interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export interface GridRowProps {
  children: React.ReactNode;
  className?: string;
}

export interface GridColProps {
  children: React.ReactNode;
  mobile?: number;  // 1-4 columns
  tabs?: number;    // 1-8 columns
  desktop?: number; // 1-12 columns
  className?: string;
}

export const Grid: React.FC<GridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid-container ${className}`}>
      {children}
    </div>
  );
};

export const GridRow: React.FC<GridRowProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid-row ${className}`}>
      {children}
    </div>
  );
};

export const GridCol: React.FC<GridColProps> = ({ 
  children, 
  mobile = 4, 
  tabs = 8, 
  desktop = 12, 
  className = '' 
}) => {
  const getColumnClass = (size: number, device: string) => {
    if (size <= 0 || size > 12) return '';
    return `grid-col-${device}-${size}`;
  };

  const columnClasses = [
    getColumnClass(mobile, 'mobile'),
    getColumnClass(tabs, 'tabs'),
    getColumnClass(desktop, 'desktop')
  ].filter(Boolean).join(' ');

  return (
    <div className={`grid-col ${columnClasses} ${className}`}>
      {children}
    </div>
  );
};
